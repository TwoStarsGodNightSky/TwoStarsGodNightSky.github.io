//----------
//�����û�ע��
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
	Area += '		<h2>�����û�ע��</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;������ע�����<span style="color:#3CB371;">�û�����</span>��</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="name" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_name"></span>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;������ע�����<span style="color:#3CB371;">�û�����</span>��</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="password1" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_password1"></span>';
    Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;���ٴ�����ע�����<span style="color:#3CB371;">�û�����</span>��</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<input id="password2" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<span style="color:red;" id="error_password2"></span>';
    Area += '<br>';
    Area += '<br>';
    Area += '<br>';
    Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '<button class="Message_Button" onclick="Check_For_Apply_Add_Member()">ȷ��</button>';
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
		    		document.getElementById("error_name").innerHTML = "������û�������Ϊ�գ�";
		    	else if(name.length>16||name.length<2)
		    		document.getElementById("error_name").innerHTML = "������û����ĳ��ȱ�����2~16��Χ�ڣ�";
		    	else if(leng==1)
		    		document.getElementById("error_name").innerHTML = "������û����Ѵ��ڣ�";
		    	else
		    	{
		    		code += 1;
		    		document.getElementById("error_name").innerHTML = "";
		    	}

		    	if(password1=="")
		    		document.getElementById("error_password1").innerHTML = "������û����벻��Ϊ�գ�";
		    	else if(password1.length<4||password1.length>12)
		    		document.getElementById("error_password1").innerHTML = "������û�����ĳ��ȱ�����4~12��Χ�ڣ�";
		    	else
		    	{
		    		code += 1;
		    		document.getElementById("error_password1").innerHTML = "";
		    	}
		
		    	if(password2!=password1)
		    		document.getElementById("error_password2").innerHTML = "����������û����벻һ�£�";
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
	    			alert("ע����û����������ύ��");
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
		    	alert("�������ύ");
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
//������������
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
	Area += '		<h2>������������</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<b>&nbsp;&nbsp;&nbsp;��ѡ�����Ĳ�ѯ��ʽ��</b>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:blue;" onclick="Renew_Input_Of_Forgot_Password()"><input id="ID" type="radio" name="selectkind" checked/>&nbsp;ID</label>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:green;" onclick="Renew_Input_Of_Forgot_Password()"><input type="radio" id="NAME" name="selectkind" />&nbsp;����</label>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;������<span style="color:#3CB371;">��ѯ����</span>��</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="Input" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="error_Input" style="color:red;"></span>';
	Area += '<br>';
	Area += '<br>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += '&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="MakeSure_Apply_Reset_Password()">�ύ</button>';
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
		document.getElementById("error_Input").innerHTML = "������������ݲ���Ϊ�գ�";
	else if(pop&&!isInt(items))
		document.getElementById("error_Input").innerHTML = "�����ID�����Ƿ�������ʽ��";
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
		    			document.getElementById("error_Input").innerHTML = "�Ҳ���ӵ�и���Ϣ���û���";
		    		else if(InformationSet[1].Name=="Manager")
		    			document.getElementById("error_Input").innerHTML = "�����ԶԹ���Ա�������룡";
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
	    			alert("ע����û����������ύ��");
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
		    	alert("�ύ�ɹ��������ĵȺ����Ա����Ϣ��");
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