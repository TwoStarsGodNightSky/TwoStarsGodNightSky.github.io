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
import basic.DateTime;

import sql.MySqlForAccountKinds;
import sql.MySqlForAccounts;
import sql.MySqlForBasic;
import sql.MySqlForMembers;
public class ServletForAccount extends HttpServlet
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
		 
		 MySqlForAccounts lt = new MySqlForAccounts();
		 MySqlForAccountKinds lts = new MySqlForAccountKinds();
		 MySqlForBasic ltb = new MySqlForBasic();
		 MySqlForMembers ltm = new MySqlForMembers();
		 
		 String serverkind = request.getParameter("server");
		 
		 if(serverkind.compareTo("add")==0)
		 {
			 String items = request.getParameter("item");
			 double balance = Double.parseDouble(request.getParameter("balance"));
			 int num = Integer.parseInt(request.getParameter("num"));
			 AccountKind kind = lts.Refer(request.getParameter("kindname"));
			 String customname = ltm.Refer(ltb.ReferLoginCode()).getUsername();
			 String shop = request.getParameter("shop");
			 Account x = new Account((lt.MaxCode()+1),items,new DateTime().toString(),balance,num,kind,customname,shop);
			 lt.Add(x);
		 }
		 else if(serverkind.compareTo("delete")==0)
		 {
			int id = Integer.parseInt(request.getParameter("select"));
			lt.Delete(id);
		 }
		 else if(serverkind.compareTo("change")==0||serverkind.compareTo("renew")==0)
		 {
			 
			 int id = Integer.parseInt(request.getParameter("select"));
			 
			 Account a = lt.Refer(id);
			 
			 String Name = request.getParameter("name");
			 a.setItems(Name);
			 
			 double Balance = Double.parseDouble(request.getParameter("balance"));
			 a.setBalance(Balance);
			 
			 int Num = Integer.parseInt(request.getParameter("num"));
			 a.setNum(Num);
			 
			 String Shop = request.getParameter("shop");
			 a.setShop(Shop);
			 
			 AccountKind ak = lts.Refer(request.getParameter("accountkind"));
			 a.setKind(ak);
			 
			 lt.Renew(id, a);
		 }
		 else if(serverkind.compareTo("refer")==0)
		 {
			//使用JSON 传递数据
			 JSONArray json = new JSONArray();
			 JSONObject jo = new JSONObject();
			 JSONObject jos = new JSONObject();
			 
			 Account a = null;
			 
			 int id = Integer.parseInt(request.getParameter("select"));
			 
			 a = lt.Refer(id);
			 
			 if(!lt.exist(id))
		     {
				 jos.put("Length",0);
				 jo.put("Code",null);
				 jo.put("Kindname",null);
				 jo.put("Creatdate",null);
				 jo.put("Items",null);
				 jo.put("Balance",null);
				 jo.put("Custom",null);
				 jo.put("Num",null);
				 jo.put("Shop",null);
		     }
			 else
			 {
				jos.put("Length",1);
			    jo.put("Code",a.getCode());
			    jo.put("Kindname",a.getKind().getKindname());
			    jo.put("Creatdate",a.getCreatdate());
			    jo.put("Items",a.getItems());
			    jo.put("Balance",a.getBalance());
			    jo.put("Custom",a.getCustomname());
			    jo.put("Num",a.getNum());
			    jo.put("Shop",a.getShop());
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
				 Account a = lt.GetFromSQL(i);
				 if(a==null)
					 continue;			 
				 jo.put("Code",a.getCode());
				 jo.put("Kindname",a.getKind().getKindname());
				 jo.put("Creatdate",a.getCreatdate());
				 jo.put("Items",a.getItems());
				 jo.put("Balance",a.getBalance());
				 jo.put("Num",a.getNum());
				 jo.put("Custom",a.getCustomname());
				 jo.put("Shop",a.getShop());
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 else if(serverkind.compareTo("part")==0)
		 {
			 String name = ltm.Refer(ltb.ReferLoginCode()).getUsername(); 
			 
			 JSONArray json = new JSONArray();
			 JSONObject jos = new JSONObject();
			 int y = lt.Length();
			 int x = 0;
			 for(int j=1;j<=y;++j)
			 {
				 Account a = lt.GetFromSQL(j);
				 if(a==null)
					 continue;
				 if(a.getCustomname().compareTo(name)==0)
					 ++x;
			 }
			 jos.put("Length",x);
			 json.put(jos);
			 for(int i=1;i<=y;++i)
			 {
				 JSONObject jo = new JSONObject();
				 Account a = lt.GetFromSQL(i);
				 if(a==null||a.getCustomname().compareTo(name)!=0)
					 continue;			 
				 jo.put("Code",a.getCode());
				 jo.put("Kindname",a.getKind().getKindname());
				 jo.put("Creatdate",a.getCreatdate());
				 jo.put("Items",a.getItems());
				 jo.put("Balance",a.getBalance());
				 jo.put("Num",a.getNum());
				 jo.put("Custom",a.getCustomname());
				 jo.put("Shop",a.getShop());
				 json.put(jo);
			 }
	         ServletOutputStream os = response.getOutputStream();
	         os.write(json.toString().getBytes());
	         os.flush();
	         os.close();
		 }
		 ltm.free();
		 ltb.free();
		 lts.free();
         lt.free();
	}
 }