package servlet.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import basic.people.Member;

import sql.mysql.MySqlForMembers;

public class ChangeMembersCodeServlet extends HttpServlet
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
		 String t3 = request.getParameter("name");
		 String t4 = request.getParameter("password");
		 int t5 = Integer.parseInt(request.getParameter("isfrozen"));
		 MySqlForMembers lt = new MySqlForMembers();
		 Member member = lt.Refer(t1);
		 member.setName(t3);
		 member.setPassword(t4);
		 member.setIsFrozen(t5);
		 lt.Delete(t1);
		 lt.Add(member);
         lt.free();
	}
 }