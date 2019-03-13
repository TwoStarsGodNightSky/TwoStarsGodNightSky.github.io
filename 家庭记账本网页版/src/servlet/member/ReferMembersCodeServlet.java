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

public class ReferMembersCodeServlet extends HttpServlet
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
	{        
		doPost(request, response);    
	}
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException
	{
		 request.setCharacterEncoding("utf-8");
		 response.setCharacterEncoding("utf-8");
		 response.setContentType("application/json");
	     response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Pragma", "no-cache");
		 MySqlForMembers lt = new MySqlForMembers();
		 //������ݵķ���
		 int code = Integer.parseInt(request.getParameter("code"));
		 //ʹ��JSON ��������
		 JSONArray json = new JSONArray();
		 JSONObject jo = new JSONObject();
		 JSONObject jos = new JSONObject();
         Member member = lt.Refer(code);
         if(lt.exist(code))
         {
        	jos.put("Length",1);
        	jo.put("Code",member.getCode());
        	jo.put("Name",member.getName());
         	jo.put("Password",member.getPassword());
         	jo.put("Creatdate",member.getCreatdate());
         	jo.put("Isfrozen",member.getIsFrozen());
         }
         else
         {
        	jos.put("Length",0);
        	jo.put("Code",null);
         	jo.put("Name",null);
          	jo.put("Password",null);
          	jo.put("Creatdate",null);
          	jo.put("Isfrozen",null);
         }
         json.put(jos);
         json.put(jo);
         ServletOutputStream os = response.getOutputStream();
         os.write(json.toString().getBytes());
         os.flush();
         os.close();
         lt.free();
	}
}
