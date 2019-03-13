package servlet.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import basic.people.Member;
import basic.type.date.DateTime;
import sql.mysql.MySqlForMembers;
public class AddMembersServlet extends HttpServlet
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
		 String t1 = request.getParameter("name");
		 String t2 = request.getParameter("password");
		 MySqlForMembers lt = new MySqlForMembers();
		 Member x = new Member((lt.MaxCode()+1),t1,t2,new DateTime(),0);
		 lt.Add(x);
         lt.free();
	}
 }