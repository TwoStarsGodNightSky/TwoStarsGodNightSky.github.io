function TurnToReferAccount()
{
	var Area = "";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<p class='welcomeB'>�����˵���ѯ</p>";
	Area += "</center>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<br>";
	Area += "<center>";
	Area += "	<div id='AccountInformation'>";
	Area += "	</div>";
	Area += "	<br>";
	Area += "	<b class='mordernText'>��</b><input class='mordernInput' id='Page' value='1' /><b class='mordernText'>ҳ����</b><input class='mordernInput2' disabled='disabled' id='MaxPage'/><b class='mordernText'>ҳ</b>";
	Area += "	<br>";
	Area += "	<br>";
	Area += "	<button id='before' class='basicButton2' onclick='PrevPageForReferAccount()'>��һҳ</button>";
	Area += "	<button id='jump' class='basicButton2' onclick='CheckAndForReferAccount()'>��ת</button>";
	Area += "	<button id='last' class='basicButton2' onclick='NextPageForReferAccount()'>��һҳ</button>";
	Area += "	<br>";
	Area += "</center>";
	document.getElementById("RightArea").innerHTML = Area;
	CheckAndReferAccount();
}
function CheckAndReferAccount()
{
	ThePage = 1;
	MakePagesForReferAccount();
}
function MakePagesForReferAccount()
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
    			PopArea += "		<th class='mordernBasic'>�������</th>";
    			PopArea += "		<th class='mordernBasic'>�۸�</th>";
    			PopArea += "		<th class='mordernBasic'>����</th>";
    			PopArea += "		<th class='mordernBasic'>��������</th>";
    			PopArea += "		<th class='mordernBasic'>������Ϣ</th>";
    			PopArea += "	</tr>";
    			var leng;
	    		if(InformationSet[0].Length==0)	
		    		alert("��������û�еǼ��κ��˵���Ϣ��");
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
	        			PopArea += "		<td class='mordernBasic'>"+InformationSet[i].Date+"</td>";
	        			PopArea += "		<td class='mordernBasic5'>"+InformationSet[i].Inform+"</td>";
	        			PopArea += "	</tr>";
	    			}
	    		}
	    		PopArea += "</table>";
	    		document.getElementById("AccountInformation").innerHTML = PopArea;
	    	}
	   		else 
	   			alert(xmlHttp.status);
	   	}
	};
    var url ="../../servlet/account/SelfAccountsServlet"; 
    var server= "name=" + TheName;
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
	UserCheckPage();
}
function CheckAndForReferAccount()
{
	if(document.getElementById("Page").value<=document.getElementById("MaxPage").value&&document.getElementById("Page").value>=1)
	{
		ThePage = document.getElementById("Page").value;
		MakePagesForReferAccount();
	}
	else
		document.getElementById("Page").value = ThePage;
}
function NextPageForReferAccount()
{
	if(document.getElementById("MaxPage").value>document.getElementById("Page").value)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = ++sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForReferAccount();
	}
}
function PrevPageForReferAccount()
{
	if(document.getElementById("Page").value>1)
	{
		var sn = document.getElementById("Page").value;
		document.getElementById("Page").value = --sn;
		ThePage = document.getElementById("Page").value;
		CheckAndForReferAccount();
	}
}
function UserCheckPage()
{
	if(1==document.getElementById("Page").value)
		document.getElementById("before").disabled = true;
	else
		document.getElementById("before").disabled = false;
	if(document.getElementById("MaxPage").value==document.getElementById("Page").value)
		document.getElementById("last").disabled = true;
	else
		document.getElementById("last").disabled = false;
}