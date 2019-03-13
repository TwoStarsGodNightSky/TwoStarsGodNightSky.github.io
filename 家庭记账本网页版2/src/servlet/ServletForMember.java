package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import basic.Member;
import basic.DateTime;
import sql.MySqlForBasic;
import sql.MySqlForMembers;

public class ServletForMember extends HttpServlet
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
		 String serverkind = request.getParameter("server");
		 MySqlForMembers lt = new MySqlForMembers();
		 
		 if(serverkind.compareTo("add")==0)
		 {
			 String t1 = request.getParameter("name");
			 String t2 = request.getParameter("password");
			 Member x = new Member((lt.MaxCode()+1),t1,new DateTime().toString(),t2,0);
			 lt.Add(x);
		 }
		 else if(serverkind.compareTo("delete")==0)
		 {
			 String kind = request.getParameter("kind");
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 lt.Delete(id);
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 lt.Delete(name);
			 }
		 }
		 else if(serverkind.compareTo("change")==0||serverkind.compareTo("renew")==0)
		 {
			 String kind = request.getParameter("kind");
			 Member m = null;
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 m = lt.Refer(id);
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 m = lt.Refer(name);
			 }
			 
			 String ck = request.getParameter("changekind");
			 if(ck.compareTo("password")==0)
			 {
				 String password = request.getParameter("password");
				 m.setPassword(password);
			 }
			 else if(ck.compareTo("username")==0)
			 {
				 String username = request.getParameter("username");
				 m.setUsername(username);
			 }
			 else
			 {
				 String password = request.getParameter("password");
				 String username = request.getParameter("username");
				 m.setPassword(password);
				 m.setUsername(username);
			 }
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("id"));
				 lt.Renew(id, m);
			 }
			 else
			 {
				 String name = request.getParameter("name");
				 lt.Renew(name, m);
			 }
		 }
		 else if(serverkind.compareTo("refer")==0)
		 {
			 //使用JSON 传递数据
			 JSONArray json = new JSONArray();
			 JSONObject jo = new JSONObject();
			 JSONObject jos = new JSONObject();
			 
			 String kind = request.getParameter("kind");
			 Member m = null;
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 m = lt.Refer(id);
				 if(!lt.exist(id))
		         {
					 jos.put("Length",0);
				     jo.put("Code",null);
				     jo.put("Name",null);
				     jo.put("Password",null);
				     jo.put("Creatdate",null);
				     jo.put("Isfrozen",null);
		         }
				 else
				 {
					jos.put("Length",1);
			        jo.put("Code",m.getCode());
			        jo.put("Name",m.getUsername());
			        jo.put("Password",m.getPassword());
			        jo.put("Creatdate",m.getCreatdate());
			        jo.put("Isfrozen",m.getIsfrozen());
				 }
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 m = lt.Refer(name);
				 if(!lt.exist(name))
		         {
					jos.put("Length",0);
			        jo.put("Code",null);
			        jo.put("Name",null);
			        jo.put("Password",null);
			        jo.put("Creatdate",null);
			        jo.put("Isfrozen",null);
		         }
				 else
				 {
					jos.put("Length",1);
			        jo.put("Code",m.getCode());
			        jo.put("Name",m.getUsername());
			        jo.put("Password",m.getPassword());
			        jo.put("Creatdate",m.getCreatdate());
			        jo.put("Isfrozen",m.getIsfrozen());
				 }
			 }
			 json.put(jos);
	         json.put(jo);
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 else if(serverkind.compareTo("all")==0)
		 {
			 JSONArray json = new JSONArray();
			 JSONObject jos = new JSONObject();
			 int y = lt.Length();
			 jos.put("Length",y-1);
			 json.put(jos); 
			 for(int i=2;i<=y;++i)
			 {
				 JSONObject jo = new JSONObject();
				 Member member = lt.GetFromSQL(i);
				 if(member==null)
					 continue;
				 jo.put("Code",member.getCode());
				 jo.put("Name",member.getUsername());
				 jo.put("Password",member.getPassword());
				 jo.put("Creatdate",member.getCreatdate());
				 jo.put("Isfrozen",member.getIsfrozen());
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 else if(serverkind.compareTo("changefroze")==0)
		 {
			 String kind = request.getParameter("kind");
			 Member m = null;
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 m = lt.Refer(id);
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 m = lt.Refer(name);
			 }
			 int p = (1-m.getIsfrozen());
			 m.setIsfrozen(p);
			 lt.Renew(m.getCode(),m);
		 }
		 else if(serverkind.compareTo("changename")==0)
		 {
			 String name = request.getParameter("name");
			 MySqlForBasic msfb = new MySqlForBasic();
			 int code = msfb.ReferLoginCode();
			 Member m = lt.Refer(code);
			 m.setUsername(name);
			 lt.Renew(code,m);
			 msfb.free();
		 }
         lt.free();
	}
 }