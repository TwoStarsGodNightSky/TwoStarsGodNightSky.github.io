function TurnToChangeName()
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
	Area += "				<b class='Kort'>ԭʼ������</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' disabled='disabled' id='name' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>��������</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='name2' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='CheckAndChangeName()' class='basicButton'>ȷ���޸�</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name2").focus();
	BuildChangeName();
}
function CheckAndChangeName()
{
	if(document.getElementById("name2").value=="")
		alert("���������ƣ�");
	else if(document.getElementById("name").value==document.getElementById("name2").value)
		alert("�����벻ͬ�����ƣ�");
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
		    			CheckAndChangeNamePart2();
		    		else
		    		{
		    			document.getElementById("name2").value = "";
		    			alert("�û����Ѵ��ڣ�");
		    		}
		    			
		    	}
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url ="../../servlet/member/ReferMembersServlet"; 
	    var server= "name=" + document.getElementById("name2").value;
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
}
function CheckAndChangeNamePart2()
{
	ChangeName(TheCode);
}
function ChangeName(selfcode)
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
		    		alert("�û��������ڣ�");
	    		else
	    			ChangeNamePart2(InformationSet[1].Code,InformationSet[1].Password,InformationSet[1].Isfrozen);
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
function ChangeNamePart2(code,password,isfrozen)
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
		    	document.getElementById("name").value = document.getElementById("name2").value;
		    	document.getElementById("name2").value = "";
	    		alert("�޸���ɣ�");
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/ChangeMembersCodeServlet"; 
    var server = "code="+code;
    server += "&name="+document.getElementById("name2").value;
    server += "&password="+password;
    server += "&isfrozen"+isfrozen;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function BuildChangeName()
{
	BuildChangeNamePart2(TheCode);
}
function BuildChangeNamePart2(code)
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
		    		alert("�û��������ڣ�");
	    		else
	    			document.getElementById("name").value = InformationSet[1].Name;
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/ReferMembersCodeServlet"; 
    var server= "code=" + code;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}