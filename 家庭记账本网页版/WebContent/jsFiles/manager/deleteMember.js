function TurnToDeleteMember()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>删除成员</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>成员名称：</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='name' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>成员编号：</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='code' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='CheckAndDeleteMember()' class='basicButton'>确认删除</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndDeleteMember()
{
	if(document.getElementById("name").value==""&&document.getElementById("code").value=="")
		alert("姓名和编号必须要填一项！");
	else if(document.getElementById("name").value!=""&&document.getElementById("code").value!="")
		alert("姓名和编号只能填一项！");
	else if(document.getElementById("name").value=="Manager"||document.getElementById("code").value=="1")
		alert("管理员不可删除！");
	else
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
		    			document.getElementById("name").value = "";	
		    			document.getElementById("code").value = "";	
			    		alert("用户名存在！");
		    		}
		    		else
		    			DeleteMember();
		    	}
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url = ""; 
	    var server = "";
	    if(document.getElementById("name").value!="")
	    {
	    	url += "../../servlet/member/ReferMembersServlet";
	    	server += ("name=" + document.getElementById("name").value);
	    }
	    else
	    {
	    	url += "../../servlet/member/ReferMembersCodeServlet";
	    	server += ("code=" + document.getElementById("code").value);
	    }
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
}
function DeleteMember()
{
	if(document.getElementById("name").value!="")
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
			    	alert("该用户已删除！");
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url ="../../servlet/member/DeleteMembersServlet"; 
	    var server= "name=" + document.getElementById("name").value;
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
	else if(document.getElementById("code").value!="")
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
			    	document.getElementById("name").value = "";	
	    			document.getElementById("code").value = "";
	    			alert("该用户已删除！");
			    }	
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url ="../../servlet/member/DeleteMembersCodeServlet"; 
	    var server= "code=" + document.getElementById("code").value;
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
}