function TurnToReferAllMember()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>�û�����</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<div id='MemberInformation'></div>";
	Area += "	<br>";
	Area += "	<b class='mordernText'>��</b><input class='mordernInput' id='Page' value='1' /><b class='mordernText'>ҳ����</b><input class='mordernInput2' disabled='disabled' id='MaxPage'/><b class='mordernText'>ҳ</b>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button id='before' class='basicButton2' onclick='PrevPageForReferAccount()'>��һҳ</button>";
	Area += "	<button id='jump' class='basicButton2' onclick='CheckAndForReferAccount()'>��ת</button>";
	Area += "	<button id='last' class='basicButton2' onclick='NextPageForReferAccount()'>��һҳ</button>";
	Area += "	<br>";
	Area += "</center>";
	Area += "<br>";
	document.getElementById("RightArea").innerHTML = Area;
	ReferAllMember();
}
function ReturnToForMember()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>�û�����</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<div id='MemberInformation'></div>";
	Area += "	<br>";
	Area += "	<b class='mordernText'>��</b><input class='mordernInput' id='Page' value='1' /><b class='mordernText'>ҳ����</b><input class='mordernInput2' disabled='disabled' id='MaxPage'/><b class='mordernText'>ҳ</b>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button id='before' class='basicButton2' onclick='PrevPageForAllMember()'>��һҳ</button>";
	Area += "	<button id='jump' class='basicButton2' onclick='CheckAndForAllMember()'>��ת</button>";
	Area += "	<button id='last' class='basicButton2' onclick='NextPageForAllMember()'>��һҳ</button>";
	Area += "	<br>";
	Area += "</center>";
	Area += "<br>";
	document.getElementById("RightArea").innerHTML = Area;
	MakePagesForAllMember();
}
function ReferAllMember()
{
	ThePage = 1;
	MakePagesForAllMember();
}
function MakePagesForAllMember()
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
	    		var PopArea = "";
    			PopArea += "<table class='modernTable'>";
    			PopArea += "	<tr class='mordernThr'>";
    			PopArea += "		<th class='mordernBasic'>���</th>";
    			PopArea += "		<th class='mordernBasic'>�û���</th>";
    			PopArea += "		<th class='mordernBasic'>�û�״̬</th>";
    			PopArea += "		<th class='mordernBasic'>��������</th>";
    			PopArea += "		<th colspan='3' class='mordernBasic'>����</th>";
    			PopArea += "	</tr>";
    			var leng;
	    		if(InformationSet[0].Length==0)	
		    		alert("������û���κεǼǵ��˵���Ϣ��");
	    		else
	    		{
	    			leng = InformationSet[0].Length;
	    			document.getElementById("MaxPage").value = ((leng-leng%5)/5)+((leng%5)==0?0:1);
	    			if(ThePage<document.getElementById("MaxPage").value)
	    				leng = 5;
	    			else
	    			{
	    				leng = leng % 5;
	    				if(leng==0)
	    					leng = 5;
	    			}
	    			for(var i=1+(ThePage-1)*5;i<=leng+(ThePage-1)*5;++i)
	    			{
	    				PopArea += "	<tr class='mordernTdr'>";
	    				PopArea += "		<td class='mordernBasic3'>"+InformationSet[i].Code+"</td>";
	        			PopArea += "		<td class='mordernBasic5'>"+InformationSet[i].Name+"</td>";
	        			PopArea += "		<td class='mordernBasic9'>"+(InformationSet[i].Isfrozen==1?"�ѱ�����":"����")+"</td>";
	        			PopArea += "		<td class='mordernBasic6'>"+InformationSet[i].Creatdate+"</td>";
	        			PopArea += "		<td class='mordernBasic8'>"+"<button class='TableButton' onclick='changeFroze("+InformationSet[i].Code+")'>"+(InformationSet[i].Isfrozen==1?"�ⶳ":"����")+"</button>"+"</td>";
	        			PopArea += "		<td class='mordernBasic8'>"+"<button class='TableButton2' onclick='TurnToChangeMemberFromAll("+InformationSet[i].Code+")'>"+"�޸�"+"</button>"+"</td>";
	        			PopArea += "		<td class='mordernBasic8'>"+"<button class='TableButton3' onclick='TurnToDeleteMemberFromAll("+InformationSet[i].Code+")'>"+"ɾ��"+"</button>"+"</td>";
	        			PopArea += "	</tr>";
	        			UserCheckPage();
	    			}
	    		}
	    		PopArea += "</table>";
	    		document.getElementById("MemberInformation").innerHTML = PopArea;
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/AllMembersServlet"; 
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(null);
}
function CheckAndForAllMember()
{
	if(document.getElementById("Page").value<=document.getElementById("MaxPage").value&&document.getElementById("Page").value>=1)
	{
		ThePage = document.getElementById("Page").value;
		MakePagesForAllMember();
	}
	else
		document.getElementById("Page").value = ThePage;
}
function NextPageForAllMember()
{
	if(document.getElementById("MaxPage").value!=document.getElementById("Page").value)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = ++sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForAllMember();
	}
}
function PrevPageForAllMember()
{
	if(1!=document.getElementById("Page").value)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = --sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForAllMember();
	}
}
//--------------------------------------
function changeFroze(code)
{
	if(code==1)
		alert("��Ȩ������");
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
			    	MakePagesForAllMember();
			    	//Do Nothing...
		    	}
		   		else 
		   			alert(xmlHttp.status);
		   	}
		};
	    var url ="../../servlet/member/FrozeMembersCodeServlet"; 
	    var server= "code=" + code;
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
}
//---
function TurnToChangeMemberFromAll(code)
{
	if(code==1)
		alert("��Ȩ������");
	else
	{
		var Area = "";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<p class='welcomeB'>�޸ĳ�Ա����</p>";
		Area += "</center>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<table>";
		Area += "		<tr>";
		Area += "			<td>";
		Area += "				<b class='Kort'>��Ա�����ƣ�</b>";
		Area += "			</td>";
		Area += "			<td>";
		Area += "				<input class='basicInput' disabled='disabled' id='name' value=''/>";
		Area += "			</td>";
		Area += "		</tr>";
		Area += "		<tr>";
		Area += "			<td>";
		Area += "				<b class='Kort'>��Ա�����ƣ�</b>";
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
		Area += "	<button onclick='CheckAndChangeNameFromAll("+code+")' class='basicButton'>�޸�</button>";
		Area += "	<button onclick='ReturnToForMember()' class='basicButton'>����</button>";
		Area += "</center>";
		document.getElementById("RightArea").innerHTML = Area;
		document.getElementById("name2").focus();
		BuildChangeNamePart2(code);
	}
}
function CheckAndChangeNameFromAll(code)
{
	if(document.getElementById("name2").value=="")
		alert("���������ƣ�");
	else if(document.getElementById("name").value==document.getElementById("name2").value)
		alert("�����벻ͬ�����ƣ�");
	else
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
			    			ChangeNameFromAllPart1(code);
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
}
function ChangeNameFromAllPart1(code)
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
	    			ChangeNameFromAllPart2(InformationSet[1].Code,InformationSet[1].Password,InformationSet[1].Isfrozen);
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
function ChangeNameFromAllPart2(code,password,isfrozen)
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
    server += "&isfrozen="+isfrozen;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//---
function TurnToDeleteMemberFromAll(code)
{
	if(code==1)
		alert("��Ȩ������");
	else
	{
		var Area = "";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<p class='welcomeB'>�����û���Ϣ</p>";
		Area += "</center>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<table>";
		Area += "		<tr>";
		Area += "			<td>";
		Area += "				<b class='Kort'>ȷ��Ҫ���ٸ��û�����Ϣ��</b>";
		Area += "			</td>";
		Area += "		</tr>";
		Area += "	</table>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<button onclick='ForSureToDestoryMember("+code+")' class='basicButton'>ȷ��</button>";
		Area += "	<button onclick='ReturnToForMember()' class='basicButton'>����</button>";
		Area += "</center>";
		document.getElementById("RightArea").innerHTML = Area;
	}
}
function ForSureToDestoryMember(code)
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
    			alert("���û���ɾ����");
    			ReturnToForMember();
		    }	
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/DeleteMembersCodeServlet"; 
    var server= "code=" + code;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function CheckAndForAllMember()
{
	if(document.getElementById("Page").value<=document.getElementById("MaxPage").value&&document.getElementById("Page").value>=1)
	{
		ThePage = document.getElementById("Page").value;
		MakePagesForAllAccount();
	}
	else
		document.getElementById("Page").value = ThePage;
}