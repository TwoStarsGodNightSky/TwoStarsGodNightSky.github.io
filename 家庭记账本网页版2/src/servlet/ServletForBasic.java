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

import sql.MySqlForBasic;
import sql.MySqlForMembers;
public class ServletForBasic extends HttpServlet
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
		 
		 MySqlForBasic ltb = new MySqlForBasic();
		 
		 String serverkind = request.getParameter("server");
		 
		 String character = request.getParameter("character");
		 
		 if(serverkind.compareTo("refer")==0)
		 {
			 if(character.compareTo("login")==0)
			 {
				 JSONArray json = new JSONArray();
				 JSONObject jo = new JSONObject();
				 JSONObject jos = new JSONObject();
				 
				 Member m = null;
				 MySqlForMembers lt = new MySqlForMembers();
				 
				 m = lt.Refer(ltb.ReferLoginCode());
				 jos.put("Length",1);
			     jo.put("Code",m.getCode());
			     jo.put("Name",m.getUsername());
			     jo.put("Password",m.getPassword());
			     jo.put("Creatdate",m.getCreatdate());
			     jo.put("Isfrozen",m.getIsfrozen());
			     json.put(jos);
		         json.put(jo);
		         ServletOutputStream os = response.getOutputStream();
		         os.write(json.toString().getBytes());
		         os.flush();
		         os.close();
		         lt.free();
			 }
			 else if(character.compareTo("remember")==0||character.compareTo("isRemember")==0)
			 {
				 JSONArray json = new JSONArray();
				 JSONObject jos = new JSONObject();
				 jos.put("isRemember",ltb.ReferIsRemember());
			     json.put(jos);
		         ServletOutputStream os = response.getOutputStream();
		         os.write(json.toString().getBytes());
		         os.flush();
		         os.close();
			 }
			 else if(character.compareTo("jourtype")==0)
			 {
				 JSONArray json = new JSONArray();
				 JSONObject jos = new JSONObject();
				 jos.put("isRemember",ltb.ReferIsRemember());
			     json.put(jos);
		         ServletOutputStream os = response.getOutputStream();
		         os.write(json.toString().getBytes());
		         os.flush();
		         os.close();
			 }
		 }
		 else if(serverkind.compareTo("change")==0||serverkind.compareTo("renew")==0)
		 {
			 if(character.compareTo("login")==0)
			 {
				 int newCode = Integer.parseInt(request.getParameter("newcode"));
				 ltb.RenewLoginCode(newCode);
			 }
			 else if(character.compareTo("remember")==0||character.compareTo("isRemember")==0)
			 {
				 int IsRemember = Integer.parseInt(request.getParameter("isRemember"));
				 ltb.RenewIsRemember(IsRemember);
			 }
			 else if(character.compareTo("jourtype")==0)
			 {
				 int journeyType = Integer.parseInt(request.getParameter("journeyType"));
				 ltb.RenewReferJourneyType(journeyType);
			 }
		 }
		 ltb.free();
	}
 }