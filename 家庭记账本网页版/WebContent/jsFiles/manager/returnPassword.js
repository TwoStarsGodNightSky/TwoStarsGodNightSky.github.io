function TurnToReturnPassword()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>��Ա�һ�����</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>��Ա���ƣ�</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='name' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>��Ա��ţ�</b>";
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
	Area += "	<button onclick='CheckAndReturnPassword()' class='basicButton'>��ʼ�һ�</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndReturnPassword()
{
	if(document.getElementById("name").value==""&&document.getElementById("code").value=="")
		alert("�����ͱ�ű���Ҫ��һ�");
	else if(document.getElementById("name").value!=""&&document.getElementById("code").value!="")
		alert("�����ͱ��ֻ����һ�");
	else if(document.getElementById("name").value=="Manager"||document.getElementById("code").value=="1")
	{
		document.getElementById("name").value = "";	
		document.getElementById("code").value = "";
		alert("����Ա�����һ����룡");
	}
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
		    		document.getElementById("name").value = "";	
	    			document.getElementById("code").value = "";
		    		if(InformationSet[0].Length==0)
			    		alert("�û������ڣ�");
		    		else
		    			ReturnPassword(InformationSet[1].Password);
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
function ReturnPassword(password)
{
	alert("�������һأ�"+password);
}