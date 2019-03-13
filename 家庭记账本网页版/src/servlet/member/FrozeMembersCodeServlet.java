package servlet.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import basic.people.Member;

import sql.mysql.MySqlForMembers;

public class FrozeMembersCodeServlet extends HttpServlet
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
		 MySqlForMembers lt = new MySqlForMembers();
		 Member member = lt.Refer(t1);
		 int p = member.getIsFrozen();
		 int q = 1 - p;
		 member.setIsFrozen(q);
		 lt.Delete(t1);
		 lt.Add(member);
         lt.free();
	}
 }