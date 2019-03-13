package sql.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import basic.account.Account;

public class MySqlForAccounts {
	//=======================================================================================【数据区】
	//JDBC 驱动名
	private final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    //数据库 URL
    private final String DB_URL = "jdbc:mysql://localhost:3306/familycash?useSSL=false";
    //用户名
    private final String USER = "root";
    //密码
    private final String PASS = "123456";
    //构造器
    private Connection conn = null;
    private Statement stmt = null;
    private PreparedStatement pstmt = null;
    private ResultSet rs = null;
	//=======================================================================================【方法区】
    //-------《返回是否存在名称为name的数据》
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return false;
    }
    //-------《返回是否存在型号为n的数据》
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return false;
    }
    //-------《重设rs》
    public void ReSetResult(String sql){
    	try {
    		stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //-------《增删改查》
    //添加一个用户的数据
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
				System.out.println("爷爷！你的数据库连接出现问题啦！");	
		}
    }
    //清空用户数据
    public void cleanAll(){
    	int l = MaxCode();
    	for(int i=1;i<=l;++i)
    		Delete(i);
    }
    //删除一个用户的数据
    public void Delete(int code){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from account where code=?");
    		pstmt.setInt(1,code);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //更新一个用户的数据
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    //返回符合格式的长度
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return l;
    	
    }
    //查询第几个用户的数据
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    	return null;
    }
    //查询一个用户的数据
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return s;
    }
    //-------《数据数》
    public int Length(){
    	ReSetResult("SELECT code, items, balance, num , customname, date, inform FROM account");
    	int l = 0;
		try {
			while(rs.next())
			{
				++l;
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return l;
    }
    //-------《最大的编号值》
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
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return l;
    }
    //-------《释放》
    public void free(){
    	try {
    		if(pstmt!=null)
    			pstmt.close();
    		if(stmt!=null)
    			stmt.close();
    		if(conn!=null)
    			conn.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //-------《构造方法》
    public MySqlForAccounts(){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
		} catch (ClassNotFoundException e1) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //-------《主方法》
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
