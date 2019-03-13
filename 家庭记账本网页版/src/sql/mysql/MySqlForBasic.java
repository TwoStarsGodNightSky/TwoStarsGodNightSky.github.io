package sql.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySqlForBasic {
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
    //-------《重设rs》
    public void ReSetResult(String sql){
    	try {
    		stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
    }
    //-------《改查》
    //修改现在登录的编号
    public void RenewLoginCode(int code){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update basic set  type=?, information=? where type=?");
			pstmt.setString(1, "logincode");
    		pstmt.setString(2, Integer.toString(code));
    		pstmt.setString(3, "logincode");
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    //返回现在登录的编号
    public int ReferLoginCode(){
    	ReSetResult("SELECT type , information FROM basic");
    	try {
			while(rs.next())
			{
				String Type = rs.getString("type");
				String Information = rs.getString("information");
				if(Type.compareTo("logincode")==0)
					return Integer.parseInt(Information);
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return 0;
    }
  //修改现在页面的图片
    public void RenewBackGroundImage(String information){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update basic set  type=?, information=? where type=?");
			pstmt.setString(1, "backgroundimage");
    		pstmt.setString(2, information);
    		pstmt.setString(3, "backgroundimage");
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    //返回现在页面的图片
    public String ReferBackGroundImage(){
    	ReSetResult("SELECT type , information FROM basic");
    	try {
			while(rs.next())
			{
				String Type = rs.getString("type");
				String Information = rs.getString("information");
				if(Type.compareTo("logincode")==0)
					return Information;
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return null;
    }
  //修改现在是否要记住
    public void RenewIsRemember(int isremember){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update basic set type=?, information=? where type=?");
			pstmt.setString(1, "isRemember");
    		pstmt.setInt(2, isremember);
    		pstmt.setString(3, "isRemember");
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		} catch (ClassNotFoundException e) {
			System.out.println("爷爷！你的Class驱动加载出现问题啦！");
		}
    }
    //返回现在是否要求被记住
    public int ReferIsRemember(){
    	ReSetResult("SELECT type , information FROM basic");
    	try {
			while(rs.next())
			{
				String Type = rs.getString("type");
				String Information = rs.getString("information");
				if(Type.compareTo("isRemember")==0)
					return Integer.parseInt(Information);
			}
		} catch (SQLException e) {
			System.out.println("爷爷！你的数据库连接出现问题啦！");
		}
		return -1;
    }
    //-------《数据数》
    public int Length(){
    	ReSetResult("SELECT type , information FROM basic");
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
    public MySqlForBasic(){
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
    	MySqlForBasic m = new MySqlForBasic();
    	m.RenewIsRemember(1);
    	System.out.println(m.ReferIsRemember());
    	m.free();
	}
}
