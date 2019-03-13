package sql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import basic.AccountKind;

public class MySqlForAccountKinds {
	//=======================================================================================【数据区】
	//JDBC 驱动名
	private final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    //数据库 URL
	private final String DB_URL = "jdbc:mysql://localhost:3306/familycashmanager?useSSL=false";
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
    	ReSetResult("SELECT name from accountkind");
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
    	ReSetResult("SELECT code from accountkind");
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
    public void Add(AccountKind x){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("insert into accountkind values (?,?)");
    		pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getKindname());
    		pstmt.executeUpdate();
			pstmt.close();
			} catch (SQLException e) {
				System.out.println("爷爷！你的数据库连接出现问题啦！");	
		}
    }
    //删除一个用户的数据
    public void Delete(String Name){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from accountkind where name=?");
    		pstmt.setString(1,Name);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    public void Delete(int code){
    	try {
    		pstmt = (PreparedStatement) conn.prepareStatement("delete from accountkind where code=?");
    		pstmt.setInt(1,code);
    		pstmt.executeUpdate();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //更新一个用户的数据
    public void Renew(String Name,AccountKind x){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update accountkind set code=?, name=? where name=?");
			pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getKindname());
			pstmt.setString(3,Name);
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    public void Renew(int code,AccountKind x){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update accountkind set code=?, name=? where code=?");
			pstmt.setInt(1, x.getCode());
    		pstmt.setString(2, x.getKindname());
			pstmt.setInt(3,code);
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    //查询第几个用户的数据
    public AccountKind GetFromSQL(int number){
    	if(number <=0||number>Length())
    		return null;
    	ReSetResult("SELECT code, name FROM accountkind");
    	try {
    		int i = 1;
			while(rs.next()&&number>=i)
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("name");
				if(number==i)
					return new AccountKind(Code,Name);
				++i;
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    	return null;
    }
    //查询一个用户的数据
    public AccountKind Refer(String name_s){
    	ReSetResult("SELECT code, name FROM accountkind");
    	AccountKind s = null;
    	try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("name");
				if(name_s.compareTo(Name)==0)
					return new AccountKind(Code,Name);	
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return s;
    }
    public AccountKind Refer(int code_s){
    	ReSetResult("SELECT code, name FROM accountkind");
    	AccountKind s = null;
    	try {
			while(rs.next())
			{
				int Code = Integer.parseInt(rs.getString("code"));
				String Name = rs.getString("name");
				if(code_s==Code)
					return new AccountKind(Code,Name);	
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return s;
    }
    //-------《数据数》
    public int Length(){
    	ReSetResult("SELECT code, name FROM accountkind");
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
    	ReSetResult("SELECT code FROM accountkind");
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
    public MySqlForAccountKinds(){
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
    	MySqlForAccountKinds m = new MySqlForAccountKinds();
    	m.Refer("食品类");
    	m.free();
	}
}
