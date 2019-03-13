package servlet.member;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import sql.mysql.MySqlForMembers;

import basic.people.Member;

public class AllMembersServlet extends HttpServlet
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
		 MySqlForMembers lt = new MySqlForMembers();
		 JSONArray json = new JSONArray();
		 JSONObject jos = new JSONObject();
		 int y = lt.Length();
		 jos.put("Length",y);
		 json.put(jos); 
		 for(int i=1;i<=y;++i)
		 {
			 JSONObject jo = new JSONObject();
			 Member member = lt.GetFromSQL(i);
			 if(member==null)
				 continue;
			 jo.put("Code",member.getCode());
			 jo.put("Name",member.getName());
			 jo.put("Password",member.getPassword());
			 jo.put("Creatdate",member.getCreatdate());
			 jo.put("Isfrozen",member.getIsFrozen());
			 json.put(jo);
		 }
         ServletOutputStream os = response.getOutputStream();
         os.write(json.toString().getBytes());
         os.flush();
         os.close();
         lt.free();
	}
 }