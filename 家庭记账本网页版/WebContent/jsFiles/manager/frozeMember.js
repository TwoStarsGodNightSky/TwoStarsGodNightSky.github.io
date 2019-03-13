function TurnToFrozeMember()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>账户冻结</p>";
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
	Area += "	<button onclick='CheckAndFrozeMember()' class='basicButton'>确认冻结</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	document.getElementById("name").focus();
}
function CheckAndFrozeMember()
{
	if(document.getElementById("name").value==""&&document.getElementById("code").value=="")
		alert("姓名和编号必须要填一项！");
	else if(document.getElementById("name").value!=""&&document.getElementById("code").value!="")
		alert("姓名和编号只能填一项！");
	else if(document.getElementById("name").value=="Manager"||document.getElementById("code").value=="1")
	{
		document.getElementById("name").value = "";	
		document.getElementById("code").value = "";
		alert("管理员不可被冻结！");
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
			    		alert("用户不存在！");
		    		else if(InformationSet[1].Isfrozen=="1")
		    			alert("该用户为已冻结账号！");
		    		else
		    			FrozeMember(InformationSet[1].Code,InformationSet[1].Name,InformationSet[1].Password);
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
function FrozeMember(code,name,password)
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
		    	document.getElementById("code").value = "";
		    	document.getElementById("name").value = "";
	    		alert("冻结完成！");
	    	}
		   	else 
				alert(xmlHttp.status);
	   	}
	};
    var url = ""; 
    var server = "";
    url += "../../servlet/member/ChangeMembersCodeServlet";
    server += ("code=" + code);
    server += ("&name=" + name);
    server += ("&password=" + password);
    server += ("&isfrozen=" + 1);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}