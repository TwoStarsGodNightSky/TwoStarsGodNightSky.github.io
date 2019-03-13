package servlet.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sql.mysql.MySqlForMembers;

@SuppressWarnings("serial")
public class DeleteMembersServlet extends HttpServlet
 { 
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException
	{
		 request.setCharacterEncoding("utf-8");
		 response.setCharacterEncoding("utf-8");
		 response.setContentType("application/json");
	     response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Pragma", "no-cache");
		 String t2 = request.getParameter("name");
		 MySqlForMembers lt = new MySqlForMembers();
		 lt.Delete(t2);
         lt.free();
	}
 }