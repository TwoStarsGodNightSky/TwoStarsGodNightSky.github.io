function CheckAndLogin()
{
	if(document.getElementById("username").value==""&&document.getElementById("password").value=="")
		alert("�û��������벻��Ϊ�գ�");
	else if(document.getElementById("username").value=="")
		alert("�û�������Ϊ�գ�");
	else if(document.getElementById("password").value=="")
		alert("���벻��Ϊ�գ�");
	else
		Login();
}
function Login()
{
	var xmlHttp = null;
	try{
		xmlHttp = new XMLHttpRequest();
	   } catch (e1) {
	   	 try {
	   		 xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e2) {
			alert("Your browser does not support XMLHTTP!");
			return;
		}
	}
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {
		    if (xmlHttp.status == 200) 
		    {
	    		s = xmlHttp.responseText;
	    		var InformationSet = eval('('+s+')');
	    		if(InformationSet[0].Length==0)
	   			{
	    			document.getElementById("username").value = "";		
	    			document.getElementById("password").value = "";
		    		alert("�û��������ڣ�");
	    		}
	    		else if(InformationSet[1].Isfrozen=="1")
	    		{
	    			document.getElementById("username").value = "";		
	    			document.getElementById("password").value = "";
		    		alert("�û����ѱ����ᣡ");
	    		}
	    		else
	    		{
	   				if(InformationSet[1].Password==document.getElementById("password").value)
	   				{
	   					RenewIsRememeberAfterLogin();
	   					UpDatingLoginCode(InformationSet[1].Code);
	   					if(document.getElementById("username").value=="Manager")
	   						window.location.href = "../turn/welcome2.jsp";
    					else
    						window.location.href = "../turn/welcome1.jsp";
	    			}
		    		else
		    		{
		   				document.getElementById("password").value = "";
		   				alert("���벻��ȷ��");
		   			}	
	   			}
	    	}
	   	}
	};
    var url ="../../servlet/member/ReferMembersServlet"; 
    var server= "name=" + document.getElementById("username").value;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function UpDatingLoginCode(membercode)
{
	var UserName = document.getElementById("username").value;
	var xmlHttp = null;
	try{
		xmlHttp = new XMLHttpRequest();
	   } catch (e1) {
	   	 try {
	   		 xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e2) {
			alert("Your browser does not support XMLHTTP!");
			return;
		}
	}
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {
		    if (xmlHttp.status == 200) 
		    {
		    	//Do Nothing...
	    	}
	   	}
	};
    var url ="../../servlet/basic/ChangeLoginCodeServlet"; 
    var server= "code=" + membercode;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}