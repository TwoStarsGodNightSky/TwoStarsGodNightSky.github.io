package servlet.account;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sql.mysql.MySqlForAccounts;

@SuppressWarnings("serial")
public class DeleteAccountsServlet extends HttpServlet
 { 
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException
	{
		 request.setCharacterEncoding("utf-8");
		 response.setCharacterEncoding("utf-8");
		 response.setContentType("application/json");
	     response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Pragma", "no-cache");
		 int t2 = Integer.parseInt(request.getParameter("code"));
		 MySqlForAccounts lt = new MySqlForAccounts();
		 lt.Delete(t2);
         lt.free();
	}
 }