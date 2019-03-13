package sql.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import basic.account.Account;

public class MySqlForAccounts {
	//=======================================================================================����������
	//JDBC ������
	private final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    //���ݿ� URL
    private final String DB_URL = "jdbc:mysql://localhost:3306/familycash?useSSL=false";
    //�û���
    private final String USER = "root";
    //����
    private final String PASS = "123456";
    //������
    private Connection conn = null;
    private Statement stmt = null;
    private PreparedStatement pstmt = null;
    private ResultSet rs = null;
	//=======================================================================================����������
    //-------�������Ƿ��������Ϊname�����ݡ�
    public boolean exist(String name){
    	ReSetResult("SELECT customname from account");
    	try {
    		while(rs.next())
    		{
    			String t = rs.getString("name");
    			if(name.compareTo(t)==0)
    				return true;
    		}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return false;
    }
    //-------�������Ƿ�����ͺ�Ϊn�����ݡ�
    public boolean exist(int code){
    	ReSetResult("SELECT code from account");
    	try {
    		while(rs.next())
    		{
    			String t = rs.getString("code");
    			if(code==Integer.parseInt(t))
    				return true;
    		}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return false;
    }
    //-------������rs��
    public void ReSetResult(String sql){
    	try {
    		stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //-------����ɾ�Ĳ顷
    //���һ���û�������
    public void Add(Account x){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("insert into account values (?,?,?,?,?,?,?)");
    		pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getItems());
    		pstmt.setDouble(3, x.getBalance());
			pstmt.setInt(4, x.getNum());
			pstmt.setString(5, x.getCustomname());
			pstmt.setString(6, x.getDate());
			pstmt.setString(7, x.getInform());
			pstmt.executeUpdate();
			pstmt.close();
			} catch (SQLException e) {
				System.out.println("үү��������ݿ����ӳ�����������");	
		}
    }
    //����û�����
    public void cleanAll(){
    	int l = MaxCode();
    	for(int i=1;i<=l;++i)
    		Delete(i);
    }
    //ɾ��һ���û�������
    public void Delete(int code){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from account where code=?");
    		pstmt.setInt(1,code);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //����һ���û�������
    public void Renew(int code,Account x){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update account set code=?, items=?, balance=?, num=?, customname=? ,date=? , inform=? where code=?");
			pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getItems());
    		pstmt.setDouble(3, x.getBalance());
			pstmt.setInt(4, x.getNum());
			pstmt.setString(5, x.getCustomname());
			pstmt.setString(6, x.getDate());
			pstmt.setString(7, x.getInform());
			pstmt.setInt(8,code);
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    //���ط��ϸ�ʽ�ĳ���
    public int AccountLength(String customname){
    	ReSetResult("SELECT code, items, balance, num , customname, date, inform FROM account");
    	int l = 0;
		try {
			while(rs.next())
			{
				String Customname = rs.getString("customname");
				if(Customname.compareTo(customname)==0)
					++l;
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return l;
    	
    }
    //��ѯ�ڼ����û�������
    public Account GetFromSQL(int number){
    	if(number <=0||number>Length())
    		return null;
    	ReSetResult("SELECT code, items, balance, num , customname, date, inform FROM account");
    	try {
    		int i = 1;
			while(rs.next()&&number>=i)
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Items = rs.getString("items");
				double Balance = Double.parseDouble(rs.getString("balance"));
				int Num = Integer.parseInt(rs.getString("num"));
				String Customname = rs.getString("customname");
				String Date = rs.getString("date");
				String Inform = rs.getString("inform");
				if(number==i)
					return new Account(Code,Items,Num,Balance,Customname,Date,Inform);
				++i;
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    	return null;
    }
    //��ѯһ���û�������
    public Account Refer(int code_s){
    	ReSetResult("SELECT code, items, balance, num , customname, date, inform FROM account");
    	Account s = null;
    	try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Items = rs.getString("items");
				double Balance = Double.parseDouble(rs.getString("balance"));
				int Num = Integer.parseInt(rs.getString("num"));
				String Customname = rs.getString("customname");
				String Date = rs.getString("date");
				String Inform = rs.getString("inform");
				if(code_s==Code)
					return new Account(Code,Items,Num,Balance,Customname,Date,Inform);
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return s;
    }
    //-------����������
    public int Length(){
    	ReSetResult("SELECT code, items, balance, num , customname, date, inform FROM account");
    	int l = 0;
		try {
			while(rs.next())
			{
				++l;
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return l;
    }
    //-------�����ı��ֵ��
    public int MaxCode(){
    	ReSetResult("SELECT code FROM account");
    	int l = 0;
		try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				if(l<Code)
					l = Code;
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return l;
    }
    //-------���ͷš�
    public void free(){
    	try {
    		if(pstmt!=null)
    			pstmt.close();
    		if(stmt!=null)
    			stmt.close();
    		if(conn!=null)
    			conn.close();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //-------�����췽����
    public MySqlForAccounts(){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
		} catch (ClassNotFoundException e1) {
			System.out.println("үү�����Class�������س�����������");
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //-------����������
    public static void main(String[] args){
    	MySqlForAccounts m = new MySqlForAccounts();
    	System.out.println();
    	for(int i=1;i<=m.Length();++i)
    	{
    		System.out.println(m.exist(i));
    	}
    	m.free();
	}
}
