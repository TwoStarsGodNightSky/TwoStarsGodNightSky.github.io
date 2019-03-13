package servlet.basic;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import sql.mysql.MySqlForBasic;

public class ReferIsRememberServlet extends HttpServlet
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
	{        
		doPost(request, response);    
	}
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException
	{
		 request.setCharacterEncoding("utf-8");
		 response.setCharacterEncoding("utf-8");
		 response.setContentType("application/json");
	     response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Pragma", "no-cache");
		 MySqlForBasic lt = new MySqlForBasic();
		 //使用JSON 传递数据
		 JSONArray json = new JSONArray();
		 JSONObject jos = new JSONObject();
         jos.put("IsRemember",lt.ReferIsRemember());
         json.put(jos);
         ServletOutputStream os = response.getOutputStream();
         os.write(json.toString().getBytes());
         os.flush();
         os.close();
         lt.free();
	}
}
