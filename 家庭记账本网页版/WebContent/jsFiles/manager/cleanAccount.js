function TurnToCleanAccount()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>����˵���Ϣ</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table>";
	Area += "		<tr>";
	Area += "			<td>";
	Area += "				<b class='Kort'>ȷ��Ҫ������е���Ϣ��</b>";
	Area += "			</td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='CleanAccount()' class='basicButton'>ȷ��</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
}
function CleanAccount()
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
			    	alert("��Ϣ�Ѿ����!");
		    	}
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url = "../../servlet/account/CleanAllAccountsServlet";
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(null);
}