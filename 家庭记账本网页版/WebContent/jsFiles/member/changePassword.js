function TurnToChangePassword()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>�޸ĸ�������</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>ԭʼ���룺</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' maxlength='8' id='password' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>�����룺</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' maxlength='8' id='password2' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>ȷ�����룺</b>";
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
	Area += "	<button onclick='CheckAndChangePassword()' class='basicButton'>ȷ���޸�</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndChangePassword()
{
	if(document.getElementById("password").value=="")
		alert("������ԭʼ���룡");
	else if(document.getElementById("password2").value=="")
		alert("�����������룡");
	else if(document.getElementById("password3").value=="")
		alert("������ȷ�����룡");
	else if(document.getElementById("password2").value!=document.getElementById("password3").value)
	{
    	document.getElementById("password3").value="";
    	alert("�����������벻һ��!");
	}	
	else if(document.getElementById("password").value==document.getElementById("password2").value)
	{
		document.getElementById("password2").value="";
    	document.getElementById("password3").value="";
    	alert("��������Ӧ�������䶯��");
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
		    		alert("�û������ڣ�");
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
	    		alert("�޸���ɣ�");
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