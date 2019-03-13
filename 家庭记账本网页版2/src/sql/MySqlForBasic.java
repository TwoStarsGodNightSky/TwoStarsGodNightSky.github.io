package sql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySqlForBasic {
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
    //-------������rs��
    public void ReSetResult(String sql){
    	try {
    		stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
    }
    //-------���Ĳ顷
    //�޸����ڵ�¼�ı��
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
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    //�������ڵ�¼�ı��
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
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return 0;
    }
    //�޸������Ƿ�Ҫ��ס
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
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    //���������Ƿ�Ҫ�󱻼�ס
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
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return -1;
    }
    //�޸����ڵ�����������Ϣ������
    public void RenewReferJourneyType(int jourType){
    	try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt = conn.createStatement();
			pstmt = (PreparedStatement) conn.prepareStatement("update basic set type=?, information=? where type=?");
			pstmt.setString(1, "jourType");
    		pstmt.setInt(2, jourType);
    		pstmt.setString(3, "jourType");
			pstmt.executeUpdate();
		    pstmt.close();
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		} catch (ClassNotFoundException e) {
			System.out.println("үү�����Class�������س�����������");
		}
    }
    //�������ڵ�����������Ϣ������
    public int ReferJourneyType(){
    	ReSetResult("SELECT type , information FROM basic");
    	try {
			while(rs.next())
			{
				String Type = rs.getString("type");
				String Information = rs.getString("information");
				if(Type.compareTo("jourType")==0)
					return Integer.parseInt(Information);
			}
		} catch (SQLException e) {
			System.out.println("үү��������ݿ����ӳ�����������");
		}
		return -1;
    }
    //-------����������
    public int Length(){
    	ReSetResult("SELECT type , information FROM basic");
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
    public MySqlForBasic(){
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
    	MySqlForBasic m = new MySqlForBasic();
    	m.RenewLoginCode(2);
    	m.free();
	}
}
