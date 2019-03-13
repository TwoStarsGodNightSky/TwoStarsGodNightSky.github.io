package servlet.account;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import sql.mysql.MySqlForAccounts;

import basic.account.Account;

public class ReferAccountsServlet extends HttpServlet
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
		 MySqlForAccounts lt = new MySqlForAccounts();
		 //获得数据的方法
		 int code = Integer.parseInt(request.getParameter("code"));
		 //使用JSON 传递数据
		 JSONArray json = new JSONArray();
		 JSONObject jo = new JSONObject();
		 JSONObject jos = new JSONObject();
         Account account = lt.Refer(code);
         if(lt.exist(code))
         {
        	jos.put("Length",1);
        	jo.put("Code",account.getCode());
			jo.put("Items",account.getItems());
			jo.put("Balance",account.getBalance());
			jo.put("Num",account.getNum());
			jo.put("Customname",account.getCustomname());
			jo.put("Date",account.getDate());
			jo.put("Inform",account.getInform());
         }
         else
         {
        	jos.put("Length",0);
        	jo.put("Code",null);
			jo.put("Items",null);
			jo.put("Balance",null);
			jo.put("Num",null);
			jo.put("Customname",null);
			jo.put("Date",null);
			jo.put("Inform",null);
         }
         json.put(jos);
         json.put(jo);
         ServletOutputStream os = response.getOutputStream();
         os.write(json.toString().getBytes());
         os.flush();
         os.close();
         lt.free();
	}
}
