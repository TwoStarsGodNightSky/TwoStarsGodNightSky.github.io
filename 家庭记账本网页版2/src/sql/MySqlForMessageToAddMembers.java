package sql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import basic.Message_AddMember;

public class MySqlForMessageToAddMembers {
	//=======================================================================================����������
	//JDBC ������
	private final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    //���ݿ� URL
	private final String DB_URL = "jdbc:mysql://localhost:3306/familycashmanager?useSSL=false";
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
    public boolean exist(String username){
    	ReSetResult("SELECT username from message_addmember");
    	try {
    		while(rs.next())
    		{
    			String t = rs.getString("username");
    			if(username.compareTo(t)==0)
    				return true;
    		}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return false;
    }
    //-------�������Ƿ�����ͺ�Ϊn�����ݡ�
    public boolean exist(int code){
    	ReSetResult("SELECT code from message_addmember");
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
    public void Add(Message_AddMember x){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("insert into message_addmember values (?,?,?,?)");
    		pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getUsername());
			pstmt.setString(3, x.getCreatdate());
			pstmt.setString(4, x.getPassword());
			pstmt.executeUpdate();
			pstmt.close();
			} catch (SQLException e) {
				System.out.println("үү��������ݿ����ӳ�����������");	
		}
    }
    //ɾ��һ���û�������
    public void Delete(String Name){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from message_addmember where username=?");
    		pstmt.setString(1,Name);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    public void Delete(int code){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from message_addmember where code=?");
    		pstmt.setInt(1,code);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //����һ���û�������
    public void Renew(String Name,Message_AddMember x){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update message_addmember set code=?, username=?, creatdate=? , password=?  where username=?");
			pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getUsername());
			pstmt.setString(3, x.getCreatdate());
			pstmt.setString(4, x.getPassword());
			pstmt.setString(5,Name);
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    public void Renew(int code,Message_AddMember x){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update message_addmember set code=?, username=?, creatdate=? , password=?  where code=?");
			pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getUsername());
			pstmt.setString(3, x.getCreatdate());
			pstmt.setString(4, x.getPassword());
			pstmt.setInt(5,code);
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    //��ѯ�ڼ����û�������
    public Message_AddMember GetFromSQL(int number){
    	if(number <=0||number>Length())
    		return null;
    	ReSetResult("SELECT code, username, creatdate, password FROM message_addmember");
    	try {
    		int i = 1;
			while(rs.next()&&number>=i)
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("username");
				String Password = rs.getString("password");
				String Creatdate = rs.getString("creatdate");
				if(number==i)
					return new Message_AddMember(Code,Name,Creatdate,Password);
				++i;
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    	return null;
    }
    //��ѯһ���û�������
    public Message_AddMember Refer(String name_s){
    	ReSetResult("SELECT code, username, creatdate, password FROM message_addmember");
    	Message_AddMember s = null;
    	try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("username");
				String Password = rs.getString("password");
				String Creatdate = rs.getString("creatdate");
				if(name_s.compareTo(Name)==0)
					return new Message_AddMember(Code,Name,Creatdate,Password);	
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return s;
    }
    public Message_AddMember Refer(int code_s){
    	ReSetResult("SELECT code, username, creatdate, password FROM message_addmember");
    	Message_AddMember s = null;
    	try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("username");
				String Password = rs.getString("password");
				String Creatdate = rs.getString("creatdate");
				if(code_s==Code)
					return new Message_AddMember(Code,Name,Creatdate,Password);	
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return s;
    }
    //-------����������
    public int Length(){
    	ReSetResult("SELECT code, username, creatdate, password FROM message_addmember");
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
    	ReSetResult("SELECT code FROM message_addmember");
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
    public MySqlForMessageToAddMembers(){
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
    	MySqlForMessageToAddMembers m = new MySqlForMessageToAddMembers();
    	System.out.println();
    	for(int i=1;i<=m.Length();++i)
    	{
    		m.GetFromSQL(i);
    	}
    	m.free();
	}
}
