function TurnToChangePassword()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>修改个人密码</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>原始密码：</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' maxlength='8' id='password' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>新密码：</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' maxlength='8' id='password2' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>确认密码：</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' maxlength='8' id='password3' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='CheckAndChangePassword()' class='basicButton'>确认修改</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndChangePassword()
{
	if(document.getElementById("password").value=="")
		alert("请输入原始密码！");
	else if(document.getElementById("password2").value=="")
		alert("请输入新密码！");
	else if(document.getElementById("password3").value=="")
		alert("请输入确认密码！");
	else if(document.getElementById("password2").value!=document.getElementById("password3").value)
	{
    	document.getElementById("password3").value="";
    	alert("两次输入密码不一致!");
	}	
	else if(document.getElementById("password").value==document.getElementById("password2").value)
	{
		document.getElementById("password2").value="";
    	document.getElementById("password3").value="";
    	alert("两次密码应该有所变动！");
	}
	else
		ChangePasswordPart1();
}
function ChangePasswordPart1()
{
	ChangePasswordPart2(TheCode);
}
function ChangePasswordPart2(selfcode)
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
		    		alert("用户不存在！");
	    		else
	    			ChangePasswordPart3(InformationSet[1].Code,InformationSet[1].Name,InformationSet[1].Isfrozen);
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/ReferMembersCodeServlet"; 
    var server= "code=" + selfcode;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function ChangePasswordPart3(code,name,isfrozen)
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
		    	document.getElementById("password").value="";
		    	document.getElementById("password2").value="";
		    	document.getElementById("password3").value="";
	    		alert("修改完成！");
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/ChangeMembersCodeServlet"; 
    var server = "code="+code;
    server += "&name="+name;
    server += "&password="+document.getElementById("password2").value;
    server += "&isfrozen="+isfrozen;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}