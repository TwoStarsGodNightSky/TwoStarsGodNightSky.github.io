//----------
//申请用户注册
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Apply_Add_Member(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>申请用户注册</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;请输入注册的新<span style="color:#3CB371;">用户名称</span>：</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="name" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_name"></span>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;请输入注册的新<span style="color:#3CB371;">用户密码</span>：</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="password1" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_password1"></span>';
    Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;请再次输入注册的新<span style="color:#3CB371;">用户密码</span>：</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="password2" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_password2"></span>';
    Area += '<br>';
    Area += '<br>';
    Area += '<br>';
    Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<button class="Message_Button" onclick="Check_For_Apply_Add_Member()">确认</button>';
    Area += '<br>';
	document.getElementById("page-inner").innerHTML = Area;
}
function Check_For_Apply_Add_Member(){
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

		    	var name = document.getElementById("name").value;
		    	var password1 = document.getElementById("password1").value;
		    	var password2 = document.getElementById("password2").value;

		    	var code = 0;
		    	
		    	if(name=="")
		    		document.getElementById("error_name").innerHTML = "输入的用户名不能为空！";
		    	else if(name.length>16||name.length<2)
		    		document.getElementById("error_name").innerHTML = "输入的用户名的长度必须在2~16范围内！";
		    	else if(leng==1)
		    		document.getElementById("error_name").innerHTML = "输入的用户名已存在！";
		    	else
		    	{
		    		code += 1;
		    		document.getElementById("error_name").innerHTML = "";
		    	}

		    	if(password1=="")
		    		document.getElementById("error_password1").innerHTML = "输入的用户密码不能为空！";
		    	else if(password1.length<4||password1.length>12)
		    		document.getElementById("error_password1").innerHTML = "输入的用户密码的长度必须在4~12范围内！";
		    	else
		    	{
		    		code += 1;
		    		document.getElementById("error_password1").innerHTML = "";
		    	}
		
		    	if(password2!=password1)
		    		document.getElementById("error_password2").innerHTML = "两次输入的用户密码不一致！";
		    	else
		    	{
		    		code += 1;
		    		document.getElementById("error_password2").innerHTML = "";
		    	}
		    	
		    	if(code==3)
		    		Access_To_Apply_Add_Member();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"refer";
    server += ("&"+"kind"+"="+"name");
    if(document.getElementById("name").value!="")
    	server += ("&"+"select"+"="+document.getElementById("name").value);
    else
    	server += ("&"+"select"+"="+"Manager");
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Access_To_Apply_Add_Member(){
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
	    		if(leng==1)
	    			alert("注册的用户名申请已提交！");
	    		else
	    			Access_To_Apply_Part_Add_Member();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageAddMember"; 
    var server= "server="+"refer";
    server += ("&"+"kind"+"="+"name");
    server += ("&"+"select"+"="+document.getElementById("name").value);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Access_To_Apply_Part_Add_Member(){
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
		    	alert("申请已提交");
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageAddMember"; 
    var server= "server="+"add";
    server += ("&"+"name"+"="+document.getElementById("name").value);
    server += ("&"+"password"+"="+document.getElementById("password1").value);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//申请密码重置
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Apply_Reset_Password(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>申请密码重置</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<b>&nbsp;&nbsp;&nbsp;请选择您的查询方式：</b>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:blue;" onclick="Renew_Input_Of_Forgot_Password()"><input id="ID" type="radio" name="selectkind" checked/>&nbsp;ID</label>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:green;" onclick="Renew_Input_Of_Forgot_Password()"><input type="radio" id="NAME" name="selectkind" />&nbsp;名称</label>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">查询内容</span>：</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="Input" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="error_Input" style="color:red;"></span>';
	Area += '<br>';
	Area += '<br>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="MakeSure_Apply_Reset_Password()">提交</button>';
	document.getElementById("page-inner").innerHTML = Area;
}
function Renew_Input_Of_Forgot_Password(){
	document.getElementById("Input").value = "";
}
function MakeSure_Apply_Reset_Password(){
	
	var items = document.getElementById("Input").value;
	
	var pop = true;
	
	if(document.getElementById("ID").checked)
		pop = true;
	else
		pop = false;
	
	if(items=="")
		document.getElementById("error_Input").innerHTML = "输入的搜索内容不能为空！";
	else if(pop&&!isInt(items))
		document.getElementById("error_Input").innerHTML = "输入的ID不能是非数字形式！";
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
		    		var leng = InformationSet[0].Length;
		    		if(InformationSet[0].Length==0)
		    			document.getElementById("error_Input").innerHTML = "找不到拥有该信息的用户！";
		    		else if(InformationSet[1].Name=="Manager")
		    			document.getElementById("error_Input").innerHTML = "不可以对管理员进行申请！";
		    		else
		    		{
		    			document.getElementById("error_Input").innerHTML = "";
		    			Access_To_Apply_Forgot_Password(InformationSet[1].Name);
		    		}
		    	}
		   	}
		};
		
	    var url ="../servlet/ServletForMember"; 
	    var server= "server="+"refer";
	    
	    if(pop)
	    	server += ("&"+"kind"+"="+"id");
	    else
	    	server += ("&"+"kind"+"="+"name");
	    
	    if(items=="")
	    	server += ("&"+"select="+"22");
	    else
	    	server += ("&"+"select="+items);
	    
	    xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}	
}
function Access_To_Apply_Forgot_Password(Username){
	
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
	    		if(leng==1)
	    			alert("注册的用户名申请已提交！");
	    		else
	    			Access_To_Apply_Part_Reset_Password(Username);
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageForgotPassword"; 
    var server= "server="+"refer";
    server += ("&"+"kind"+"="+"name");
    server += ("&"+"select"+"="+Username);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Access_To_Apply_Part_Reset_Password(username){
	
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
		    	alert("提交成功！请耐心等候管理员的消息！");
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageForgotPassword"; 
    var server= "server="+"add";
    server += ("&"+"kind"+"="+"name");
    server += ("&"+"select"+"="+username);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}