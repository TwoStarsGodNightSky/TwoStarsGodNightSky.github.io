function TurnToAddAccount()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>����˱�</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>���������</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='items' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>����������</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='num' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>�۸�����ң���</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput' id='balance' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>������Ϣ��</b>";
	Area += "			</td>";
	Area += "			<td>";
	Area += "				<input class='basicInput'  id='inform' value=''/>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='CheckAndAddAccount()' class='basicButton'>����˱�</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndAddAccount()
{
	if(document.getElementById("items").value==""||document.getElementById("num").value==""||document.getElementById("balance").value==""||document.getElementById("inform").value=="")
		alert("������Ϣ����ȫ������!");
	else if(document.getElementById("num").value<0||document.getElementById("num").value>1000)
		alert("������Ϣ����");
	else if(document.getElementById("balance").value<0||document.getElementById("balance").value>99999999999)
		alert("�۸���Ϣ����");
	else
		AddAccount();
}

function AddAccount()
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
		    	alert("��ӳɹ���");
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/account/AddAccountsServlet"; 
    var server = "customname=" + TheName;
    server = server += ("&num=" + document.getElementById("num").value);
    server = server += ("&balance=" + document.getElementById("balance").value);
    server = server += ("&items=" + document.getElementById("items").value);
    server = server += ("&inform=" + document.getElementById("inform").value);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}