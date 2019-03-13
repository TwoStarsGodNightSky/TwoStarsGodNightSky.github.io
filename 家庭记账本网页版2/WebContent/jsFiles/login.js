//----------
//页面保存
//-
//-
//-
//-
//-
//-
//----------
var pops = true;
function onLoadP(){
	if(pops)
	{
		pops = false;
		onLoad();
	}
}
function onLoad(){
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
	    		var leng = InformationSet[0].isRemember;
	    		if(leng==1)
	    		{
	    			document.getElementById("isRemember_Login").checked = true;
	    			Get_MeMory_To_Admin();
	    		}
	    		else if(leng==0)
	    		{
	    			document.getElementById("isRemember_Login").checked = false;
	    		}
	    	}
	   	}
	};
    var url ="../servlet/ServletForBasic"; 
    var server = "server="+"refer";
    server += ("&character="+"isRemember");
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Get_MeMory_To_Admin(){
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
	    		var leng = InformationSet[1].Name;
	    		document.getElementById("username").value = leng;
	    	}
	   	}
	};
    var url ="../servlet/ServletForBasic"; 
    var server = "server="+"refer";
    server += ("&character="+"login");
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);	
}
//----------
//登录
//-
//-
//-
//-
//-
//-
//----------
var username = "";
var password = "";
function Login_To_Main_Page(){
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
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
	    		var leng = InformationSet[0].Length;
		    	
	    		if(username==""||password=="")
	    			alert("用户名或密码为空！");
	    		else if(username.length<2||username.length>16)
	    			alert("用户名长度应该在2~16范围内！");
	    		else if(password.length<4||password.length>12)
	    			alert("密码长度应该在4~12范围内！");
	    		else if(leng==0)
	    			alert("用户名不存在或者未得到注册！");
	    		else if(InformationSet[1].Password!=password)
	    			alert("输入的密码不正确！");
	    		else
	    			TimeToLoad_Login(InformationSet[1].Code);
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"refer";
    server += ("&kind="+"name");
    if(username!="")
    	server += ("&select="+username);
    else
    	server += ("&select="+"s");
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//数据更新
//-
//-
//-
//-
//-
//-
//----------
function TimeToLoad_Login(TheCode){
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
		    	TimeToLoad_Renew_CheckBox();
	    	}
	   	}
	};
    var url ="../servlet/ServletForBasic";
    var p1 = "change";
    var p2 = "login";
    var server = "server="+p1;
    server += ("&character="+p2);
    server += ("&newcode="+TheCode);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function TimeToLoad_Renew_CheckBox(){
	var isChecked = 0;
	if(document.getElementById("isRemember_Login").checked == true)
		isChecked = 1;
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
		    	if(username=="Manager")
		    		window.location.href = "index.jsp";
		    	else
		    		window.location.href = "member.jsp";
	    	}
	   	}
	};
    var url ="../servlet/ServletForBasic"; 
    var server = "server="+"renew";
    server += ("&character="+"isRemember");
    server += ("&isRemember="+isChecked);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}