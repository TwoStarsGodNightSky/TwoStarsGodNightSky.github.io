package servlet.account;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import basic.account.Account;

import sql.mysql.MySqlForAccounts;

public class ChangeAccountsServlet extends HttpServlet
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
		 int t1 = Integer.parseInt(request.getParameter("code"));
		 String t2 = request.getParameter("items");
		 double t3 = Double.parseDouble(request.getParameter("balance"));
		 int t4 = Integer.parseInt(request.getParameter("num"));
		 String t7 = request.getParameter("inform");
		 MySqlForAccounts lt = new MySqlForAccounts();
		 Account account = lt.Refer(t1);
		 account.setItems(t2);
		 account.setBalance(t3);
		 account.setNum(t4);
		 account.setInform(t7);
		 lt.Delete(t1);
		 lt.Add(account);
         lt.free();
	}
 }