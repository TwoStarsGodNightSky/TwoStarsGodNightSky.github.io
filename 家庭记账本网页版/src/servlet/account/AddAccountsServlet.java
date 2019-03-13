package servlet.account;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import basic.account.Account;
import basic.type.date.DateTime;
import sql.mysql.MySqlForAccounts;

public class AddAccountsServlet extends HttpServlet
 { 
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException
	{
		 request.setCharacterEncoding("utf-8");
		 response.setCharacterEncoding("utf-8");
		 response.setContentType("application/json");
	     response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Pragma", "no-cache");
		 String t2 = request.getParameter("items");
		 int t3 = Integer.parseInt(request.getParameter("num"));
		 double t4 = Double.parseDouble(request.getParameter("balance"));
		 String t5 = request.getParameter("customname");
		 String t6 = request.getParameter("inform");
		 MySqlForAccounts lt = new MySqlForAccounts();
		 Account x = new Account((lt.MaxCode()+1),t2,t3,t4,t5,new DateTime(),t6);
		 lt.Add(x);
         lt.free();
	}
 }