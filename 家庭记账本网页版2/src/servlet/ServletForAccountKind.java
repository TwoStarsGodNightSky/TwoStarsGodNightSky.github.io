package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import basic.Account;
import basic.AccountKind;

import sql.MySqlForAccountKinds;
import sql.MySqlForAccounts;
public class ServletForAccountKind extends HttpServlet
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
		 
		 MySqlForAccountKinds lt = new MySqlForAccountKinds();
		 
		 String serverkind = request.getParameter("server");
		 
		 if(serverkind.compareTo("add")==0)
		 {
			 String name = request.getParameter("name");
			 AccountKind x = new AccountKind((lt.MaxCode()+1),name);
			 lt.Add(x);
		 }
		 else if(serverkind.compareTo("delete")==0)
		 {
			 String kind = request.getParameter("kind");
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0)
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
			 AccountKind ak = null;
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 ak = lt.Refer(id);
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 ak = lt.Refer(name);
			 }
			 
			 String Name = request.getParameter("name");
			 ak.setKindname(Name);
			 
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 lt.Renew(id, ak);
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 lt.Renew(name, ak);
			 }
		 }
		 else if(serverkind.compareTo("refer")==0)
		 {
			//使用JSON 传递数据
			 JSONArray json = new JSONArray();
			 JSONObject jo = new JSONObject();
			 JSONObject jos = new JSONObject();
			 
			 String kind = request.getParameter("kind");
			 AccountKind ak = null;
			 if(kind.compareTo("id")==0||kind.compareTo("ID")==0||kind.compareTo("Id")==0||kind.compareTo("iD")==0)
			 {
				 int id = Integer.parseInt(request.getParameter("select"));
				 ak = lt.Refer(id);
				 if(!lt.exist(id))
		         {
					 jos.put("Length",0);
				     jo.put("Code",null);
				     jo.put("Kindname",null);
		         }
				 else
				 {
					jos.put("Length",1);
			        jo.put("Code",ak.getCode());
			        jo.put("Kindname",ak.getKindname());
				 }
			 }
			 else
			 {
				 String name = request.getParameter("select");
				 ak = lt.Refer(name);
				 if(!lt.exist(name))
		         {
					 jos.put("Length",0);
				     jo.put("Code",null);
				     jo.put("Kindname",null);
		         }
				 else
				 {
					jos.put("Length",1);
			        jo.put("Code",ak.getCode());
			        jo.put("Kindname",ak.getKindname());
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
				 AccountKind ak = lt.GetFromSQL(i);
				 if(ak==null)
					 continue;			 
			     jo.put("Code",ak.getCode());
			     jo.put("Kindname",ak.getKindname());
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 else if(serverkind.compareTo("account")==0)
		 {
			 MySqlForAccounts msfa = new MySqlForAccounts();
			 JSONArray json = new JSONArray();
			 JSONObject jos = new JSONObject();
			 int y = lt.Length();
			 int x = msfa.Length();
			 jos.put("Length",y);
			 json.put(jos); 
			 for(int i=1;i<=y;++i)
			 {
				 JSONObject jo = new JSONObject();
				 AccountKind ak = lt.GetFromSQL(i);
				 int deal = 0;
				 double cost = 0;
				 if(ak==null)
					 continue;			 
			     jo.put("Code",ak.getCode());
			     jo.put("Kindname",ak.getKindname());
			     for(int j=1;j<=x;++j)
			     {
			    	 Account a = msfa.GetFromSQL(j);
			    	 if(a.getKind().getKindname().compareTo(ak.getKindname())==0)
			    	 {
			    		 ++deal;
			    		 cost += (a.getBalance()*a.getNum());
			    	 }
			     }
			     jo.put("Cost", cost);
			     jo.put("Deal", deal);
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close(); 
	         msfa.free();
		 }
         lt.free();
	}
 }