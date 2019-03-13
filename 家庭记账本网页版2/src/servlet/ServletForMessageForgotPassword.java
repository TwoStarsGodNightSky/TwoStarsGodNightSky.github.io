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
import basic.Message_ForgotPassword;
import sql.MySqlForMembers;
import sql.MySqlForMessageToForgotPassword;

public class ServletForMessageForgotPassword extends HttpServlet
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
		 MySqlForMessageToForgotPassword lt = new MySqlForMessageToForgotPassword();
		 MySqlForMembers ltm = new MySqlForMembers();
		 
		 if(serverkind.compareTo("add")==0)
		 {
			 String kind = request.getParameter("kind");
			 String select = request.getParameter("select");
			 Member x = null;
			 if(kind.compareTo("id")==0||kind.compareTo("Id")==0||kind.compareTo("ID")==0)
			 	x = ltm.Refer(Integer.parseInt(select));
			 else if(kind.compareTo("name")==0||kind.compareTo("Name")==0)
				x = ltm.Refer(select);
			 Message_ForgotPassword y = new Message_ForgotPassword((lt.MaxCode()+1),x.getUsername(),x.getCode());
			 lt.Add(y);
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
		 else if(serverkind.compareTo("refer")==0)
		 {
			 //使用JSON 传递数据
			 JSONArray json = new JSONArray();
			 JSONObject jo = new JSONObject();
			 JSONObject jos = new JSONObject();
			 
			 String kind = request.getParameter("kind");
			 Message_ForgotPassword m = null;
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 m = lt.Refer(id);
				 if(!lt.exist(id))
		         {
					 jos.put("Length",0);
				     jo.put("Code",null);
				     jo.put("UserName",null);
				     jo.put("UserCode",null);
		         }
				 else
				 {
					jos.put("Length",1);
			        jo.put("Code",m.getCode());
			        jo.put("UserName",m.getUsername());
			        jo.put("UserCode",m.getUsercode());
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
				     jo.put("UserName",null);
				     jo.put("UserCode",null);
		         }
				 else
				 {
					 jos.put("Length",1);
					 jo.put("Code",m.getCode());
					 jo.put("UserName",m.getUsername());
					 jo.put("UserCode",m.getUsercode());
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
			 jos.put("Length",y);
			 json.put(jos); 
			 for(int i=1;i<=y;++i)
			 {
				 JSONObject jo = new JSONObject();
				 Message_ForgotPassword m = lt.GetFromSQL(i);
				 if(m==null)
					 continue;
				 jo.put("Code",m.getCode());
				 jo.put("UserName",m.getUsername());
				 jo.put("UserCode",m.getUsercode());
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 else if(serverkind.compareTo("reset")==0)
		 {
			 String kind = request.getParameter("kind");
			 String select = request.getParameter("select");
			 Message_ForgotPassword x = null;
			 if(kind.compareTo("id")==0||kind.compareTo("Id")==0||kind.compareTo("ID")==0)
			 	x = lt.Refer(Integer.parseInt(select));
			 else if(kind.compareTo("name")==0||kind.compareTo("Name")==0)
				x = lt.Refer(select);
			 else if(kind.compareTo("code")==0||kind.compareTo("Code")==0)
				x = lt.Refer(ltm.Refer(Integer.parseInt(select)).getUsername());
			 Member y = ltm.Refer(x.getUsername());
			 ltm.Add(y);
		 }
		 ltm.free();
         lt.free();
	}
 }