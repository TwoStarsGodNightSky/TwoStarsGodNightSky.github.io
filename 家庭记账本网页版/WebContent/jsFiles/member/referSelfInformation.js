function TurnToReferSelfInformation()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>��ѯ���˻�����Ϣ</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>��Ա��ţ�</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='code' disabled='disabled' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>��Ա���ƣ�</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' disabled='disabled' id='name' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>�������ڣ�</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' disabled='disabled' id='creatdate' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	CheckAndReferSelfInformation();
}
function CheckAndReferSelfInformation()
{
	ReferSelfInformation(TheCode);
}
function ReferSelfInformation(selfcode)
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
	    		{
	    			document.getElementById("name").value = InformationSet[1].Name;
	    			document.getElementById("code").value = InformationSet[1].Code;
	    			document.getElementById("creatdate").value = InformationSet[1].Creatdate;
	    		}
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