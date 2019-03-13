function TurnToReferAllAccount()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>账单管理</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<div id='AccountInformation'></div>";
	Area += "	<br>";
	Area += "	<b class='mordernText'>第</b><input class='mordernInput' id='Page' value='1' /><b class='mordernText'>页，共</b><input class='mordernInput2' disabled='disabled' id='MaxPage'/><b class='mordernText'>页</b>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button id='before' class='basicButton2' onclick='PrevPageForAllAccount()'>上一页</button>";
	Area += "	<button id='jump' class='basicButton2' onclick='CheckAndForAllAccount()'>跳转</button>";
	Area += "	<button id='last' class='basicButton2' onclick='NextPageForAllAccount()'>下一页</button>";
	Area += "	<br>";
	Area += "</center>";
	Area += "<br>";
	document.getElementById("RightArea").innerHTML = Area;
	ReferAllAccount();
}
function ReferAllAccount()
{
	ThePage = 1;
	MakePagesForAllAccount();
}
function ReActThePages()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>账单管理</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<div id='AccountInformation'></div>";
	Area += "	<br>";
	Area += "	<b class='mordernText'>第</b><input class='mordernInput' id='Page' value='"+ThePage+"' /><b class='mordernText'>页，共</b><input class='mordernInput2' disabled='disabled' id='MaxPage'/><b class='mordernText'>页</b>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button id='before' class='basicButton2' onclick='PrevPageForAllAccount()'>上一页</button>";
	Area += "	<button id='jump' class='basicButton2' onclick='CheckAndForAllAccount()'>跳转</button>";
	Area += "	<button id='last' class='basicButton2' onclick='NextPageForAllAccount()'>下一页</button>";
	Area += "	<br>";
	Area += "</center>";
	Area += "<br>";
	document.getElementById("RightArea").innerHTML = Area;
	MakePagesForAllAccount();
}
function MakePagesForAllAccount()
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
    			PopArea += "		<th class='mordernBasic'>编号</th>";
    			PopArea += "		<th class='mordernBasic'>物件名称</th>";
    			PopArea += "		<th class='mordernBasic'>价格</th>";
    			PopArea += "		<th class='mordernBasic'>数量</th>";
    			PopArea += "		<th class='mordernBasic'>购买人</th>";
    			PopArea += "		<th class='mordernBasic'>购买日期</th>";
    			PopArea += "		<th class='mordernBasic'>其他信息</th>";
    			PopArea += "		<th colspan='2' class='mordernBasic'>操作</th>";
    			PopArea += "	</tr>";
    			var leng;
	    		if(InformationSet[0].Length==0)	
		    		alert("看来并没有任何登记的账单信息！");
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
	        			PopArea += "		<td class='mordernBasic6'>"+InformationSet[i].Code+"</td>";
	        			PopArea += "		<td class='mordernBasic2'>"+InformationSet[i].Items+"</td>";
	        			PopArea += "		<td class='mordernBasic4'>"+InformationSet[i].Balance+"</td>";
	        			PopArea += "		<td class='mordernBasic3'>"+InformationSet[i].Num+"</td>";
	        			PopArea += "		<td class='mordernBasic7'>"+InformationSet[i].Customname+"</td>";
	        			PopArea += "		<td class='mordernBasic'>"+InformationSet[i].Date+"</td>";
	        			PopArea += "		<td class='mordernBasic5'>"+InformationSet[i].Inform+"</td>";
	        			PopArea += "		<td class='mordernBasic8'>"+"<button class='TableButton' onclick='TurnToChangeAccountFromAll("+InformationSet[i].Code+")'>修改</button>"+"</td>";
	        			PopArea += "		<td class='mordernBasic8'>"+"<button class='TableButton' onclick='TurnToDeleteAccountFromAll("+InformationSet[i].Code+")'>删除</button>"+"</td>";
	        			PopArea += "	</tr>";
	        			UserCheckPage();
	    			}
	    		}
	    		PopArea += "</table>";
	    		document.getElementById("AccountInformation").innerHTML = PopArea;
	    	}
	   	}
	};
    var url ="../../servlet/account/AllAccountsServlet"; 
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(null);
}
function CheckAndForAllAccount()
{
	if(document.getElementById("Page").value<=document.getElementById("MaxPage").value&&document.getElementById("Page").value>=1)
	{
		ThePage = document.getElementById("Page").value;
		MakePagesForAllAccount();
	}
	else
		document.getElementById("Page").value = ThePage;
}
function NextPageForAllAccount()
{
	if(document.getElementById("MaxPage").value!=document.getElementById("Page").value)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = ++sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForAllAccount();
	}
}
function PrevPageForAllAccount()
{
	if(1!=document.getElementById("Page").value)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = --sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForAllAccount();
	}
}
//-------------------------------------------------------------------
function TurnToChangeAccountFromAll(code)
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>修改账单信息</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<table class='modernTable'>";
	Area += "		<tr>";
	Area += "			<th class='mordernThr2'>物件名称</th>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' disabled='disabled' id='items'/></td>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' id='items2'/></td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<th class='mordernThr2'>价格</th>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' disabled='disabled' id='balance'/></td>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' id='balance2'/></td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<th class='mordernThr2'>数量</th>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' disabled='disabled' id='num'/></td>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' id='num2'/></td>";
	Area += "		</tr>";
	Area += "		<tr>";
	Area += "			<th class='mordernThr2'>其他信息</th>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' disabled='disabled' id='inform'/></td>";
	Area += "			<td class='mordernTdr'><input class='mordernInput3' id='inform2'/></td>";
	Area += "		</tr>";
	Area += "	</table>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button onclick='ForSureToChangeAccount("+code+")' class='basicButton'>确认</button>";
	Area += "	<button onclick='ReActThePages()' class='basicButton'>返回</button>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	GerogeLeting(code);
}
function GerogeLeting(code)
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
		    		alert("账单不存在！");
	    		else
	    		{
	    			document.getElementById("items").value = InformationSet[1].Items;
	    			document.getElementById("balance").value = InformationSet[1].Balance;
	    			document.getElementById("num").value = InformationSet[1].Num;
	    			document.getElementById("inform").value = InformationSet[1].Inform;
	    		}
	    	}
	   	}
	};
    var url ="../../servlet/account/ReferAccountsServlet"; 
    var server= "code=" + code;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function ForSureToChangeAccount(code)
{
	if(document.getElementById("items2").value==""&&document.getElementById("num2").value==""&&document.getElementById("balance2").value==""&&document.getElementById("inform2").value=="")
		alert("请至少输入一项！");
	else
	{
		if(document.getElementById("items2").value=="")
			document.getElementById("items2").value = document.getElementById("items").value;
		else if(document.getElementById("num2").value=="")
			document.getElementById("num2").value = document.getElementById("num").value;
		else if(document.getElementById("balance2").value=="")
			document.getElementById("balance2").value = document.getElementById("balance").value;
		else if(document.getElementById("inform2").value=="")
			document.getElementById("inform2").value = document.getElementById("inform").value;
		
		document.getElementById("items").value = document.getElementById("items2").value;
		document.getElementById("num").value = document.getElementById("num2").value;
		document.getElementById("balance").value = document.getElementById("balance2").value;
		document.getElementById("inform").value = document.getElementById("inform2").value;
		
		document.getElementById("items2").value = "";
		document.getElementById("num2").value = "";
		document.getElementById("balance2").value = "";
		document.getElementById("inform2").value = "";
		
		ReUnionToBeIncluded(code);
	}
}
function ReUnionToBeIncluded(code)
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
    			alert("该账本记录已删除！");
    			ReActThePages();
		    }	
	   	}
	};
    var url ="../../servlet/member/DeleteAccountsCodeServlet"; 
    var server = "code=" + code;
    server += "&items=" + document.getElementById("items").value;
    server += "&balance=" + document.getElementById("balance").value;
    server += "&num=" + document.getElementById("num").value;
    server += "&inform=" + document.getElementById("inform").value;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//---
function TurnToDeleteAccountFromAll(code)
{
		var Area = "";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<p class='welcomeB'>删除账单信息</p>";
		Area += "</center>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<br>";
		Area += "<center>";
		Area += "	<table>";
		Area += "		<tr>";
		Area += "			<td>";
		Area += "				<b class='Kort'>确定要删除该账单的信息吗？</b>";
		Area += "			</td>";
		Area += "		</tr>";
		Area += "	</table>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<br>";
		Area += "	<button onclick='ForSureToDestoryAccount("+code+")' class='basicButton'>确认</button>";
		Area += "	<button onclick='ReActThePages()' class='basicButton'>返回</button>";
		Area += "</center>";
		document.getElementById("RightArea").innerHTML = Area;
}
function ForSureToDestoryAccount(code)
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
    			alert("该账本记录已删除！");
    			ReActThePages();
		    }	
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/member/DeleteAccountsCodeServlet"; 
    var server= "code=" + code;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}