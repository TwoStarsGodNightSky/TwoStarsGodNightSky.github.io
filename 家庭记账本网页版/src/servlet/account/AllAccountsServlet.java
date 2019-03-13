package servlet.account;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import sql.mysql.MySqlForAccounts;

import basic.account.Account;

public class AllAccountsServlet extends HttpServlet
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
		 JSONArray json = new JSONArray();
		 JSONObject jos = new JSONObject();
		 int y = lt.Length();
		 jos.put("Length",y);
		 json.put(jos); 
		 for(int i=1;i<=y;++i)
		 {
			 JSONObject jo = new JSONObject();
			 Account account = lt.GetFromSQL(i);
			 if(account==null)
				 continue;
			 jo.put("Code",account.getCode());
			 jo.put("Items",account.getItems());
			 jo.put("Balance",account.getBalance());
			 jo.put("Num",account.getNum());
			 jo.put("Customname",account.getCustomname());
			 jo.put("Date",account.getDate());
			 jo.put("Inform",account.getInform());
			 json.put(jo);
		 }
         ServletOutputStream os = response.getOutputStream();
         os.write(json.toString().getBytes());
         os.flush();
         os.close();
         lt.free();
	}
 }