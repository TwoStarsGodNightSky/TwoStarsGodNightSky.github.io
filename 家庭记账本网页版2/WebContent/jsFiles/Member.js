//----------
//ע�����˻�
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Add_Member(){
    	var Area = '';
    	Area += '<div class="row">';
    	Area += '	<div class="col-md-12">';
    	Area += '		<h2>ע�����û�</h2> ';
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
    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    	Area += '<input id="password2" class="MeoryInput" />';
    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    Area += '<span style="color:red;" id="error_password2"></span>';
	    Area += '<br>';
	    Area += '<br>';
	    Area += '<br>';
	    Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    Area += '<button class="Message_Button" onclick="Check_For_Add_Member()">ȷ��</button>';
	    Area += '<br>';
    	document.getElementById("page-inner").innerHTML = Area;
    }
function Check_For_Add_Member(){
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
		    		Access_To_Add_Member();
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
function Access_To_Add_Member(){
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
		    	alert("��ӳɹ���");
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"add";
    server += ("&"+"name"+"="+document.getElementById("name").value);
    server += ("&"+"password"+"="+document.getElementById("password1").value);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//��ѯ�˻�
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Refer_Member(){
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
	    		var length = InformationSet[0].Length;
	    		var Area = '';
	        	Area += '<div class="row">';
	        	Area += '	<div class="col-md-12">';
	        	Area += '		<h2>�û���ѯ</h2> ';
	        	Area += '	</div>';
	        	Area += '</div>';
	        	Area += '<hr/>';
	        	Area += '<span style="margin-left:20px;color:gray;">����Ϊ�û���Ϣ������</span>';
	        	Area += '<br>';
	        	Area += '<br>';
				if(length!=0)
				{
					Area += '<div style="width:1185px;height:800px;overflow-y:auto;">';
					Area += '<table class="MeoryTable">';
	    			var restInt = (length % 4);
	    			var rowInt = length - restInt;
	    			var i = 0;
	    			for(i = 1; i <= rowInt ;++i)
	    			{
	    				if(i%4==1)
	    					Area += '	<tr>';
	    				Area += '		<td>';
	    				Area += '			<div class="MessageDIV">';
	    				//
	    				Area += '<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(242,239,133);">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">��ţ�</b>';
	    	    	    Area += '		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�����</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+InformationSet[i].Name+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�״̬��</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+(InformationSet[i].Isfrozen==1?'�Ѷ���':'δ����')+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�������ڣ�</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Turn_To_Froze_Member('+InformationSet[i].Code+')">'+(InformationSet[i].Isfrozen==1?'�ⶳ':'����')+'</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Change_Member('+InformationSet[i].Code+')">�޸�</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Member('+InformationSet[i].Code+')">ɾ��</button>');
	    	    	    Area += '		</div>';
	    	    	    Area += '	</div>';
	    	    	    Area += '</div>';
	    				//
	    				Area += '			</div>';
	    				Area += '		</td>';
	    				if(i%4==0)
	    					Area += '	</tr>';
	    			}
	    			if(restInt!=0)
	    				Area += '	<tr>';
	    			for(;i<=length;++i)
	    			{
	    				Area += '		<td>';
	    				Area += '			<div class="MessageDIV">';
	    				//
	    				Area += '<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(242,239,133);">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">��ţ�</b>';
	    	    	    Area += '		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�����</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+InformationSet[i].Name+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�״̬��</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+(InformationSet[i].Isfrozen==1?'�Ѷ���':'δ����')+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�������ڣ�</b></span>';
	    	    	    Area += ('		<span style="color:rgb(197,183,7);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Turn_To_Froze_Member('+InformationSet[i].Code+')">'+(InformationSet[i].Isfrozen==1?'�ⶳ':'����')+'</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Change_Member('+InformationSet[i].Code+')">�޸�</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Member('+InformationSet[i].Code+')">ɾ��</button>');
	    	    	    Area += '		</div>';
	    	    	    Area += '	</div>';
	    	    	    Area += '</div>';
	    				//
	    				Area += '			</div>';
	    				Area += '		</td>';
	    			}
	    			for(var j=1;j<=restInt;++j)
	    			{
	    				Area += '		<td>';
	    				Area += '		</td>';
	    			}
	    			if(restInt!=0)
	    				Area += '	</tr>';
	    			Area += '</table>';
	    			Area += '</div>';
				}
				else
				{
					Area += '<div id="MessageArea">';
    	        	Area += '	&nbsp;&nbsp;Ŀǰû���û����͹�������Ϣ�أ�';
    	        	Area += '</div>';
				}
				document.getElementById("page-inner").innerHTML = Area;
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"all";
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Turn_To_Change_Member(TheCode)
{
	var Area = "";
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>�޸��û�����</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<label>&nbsp;&nbsp;&nbsp;������<span style="color:#3CB371;">������</span>��</label>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="name" class="MeoryInput" />';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="alert_add_accountkind" style="color:red;"></span>';
	Area += '<br>';
	Area += '<br>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    Area += ('&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Make_It_To_Change_Member('+TheCode+')">ȷ��</button>');
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="MakePageTo_Refer_Member()">����</button>';
	
	document.getElementById("page-inner").innerHTML = Area;
}
function Make_It_To_Change_Member(the_code)
{
	var its_name = document.getElementById("name").value;
	
	if(its_name=="")
		document.getElementById("alert_add_accountkind").innerHTML = "�������ݲ���Ϊ�գ�";
	else if(its_name.length<2||its_name.length>18)
		document.getElementById("alert_add_accountkind").innerHTML = "�������ݵĳ��ȱ���Ҫ��2~18��Χ�ڣ�";
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
		    		var length = InformationSet[0].Length;
		    		if(length==1)
		    			document.getElementById("alert_add_accountkind").innerHTML = "������û����Ѵ��ڣ��������";
		    		else
		    		{
		    			document.getElementById("alert_add_accountkind").innerHTML = "";
		    			Final_To_Be_Here(the_code);
		    		}
		    	}
		   	}
		};
	    var url ="../servlet/ServletForMember"; 
	    var server = "server="+"refer";
	    server += ("&kind="+"id");
	    server += ("&select="+the_code);
	    xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
	
}
function Final_To_Be_Here(TheCode)
{
	var its_name = document.getElementById("name").value;
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
		    	alert("�޸ĳɹ���");
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server = "server="+"change";
    server += ("&kind="+"id");
    server += ("&select="+TheCode);
    server += ("&changekind="+"username");
    server += ("&username="+its_name);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Turn_To_Froze_Member(TheCode)
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
		    	MakePageTo_Refer_Member();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server = "server="+"changefroze";
    server += ("&kind="+"id");
    server += ("&select="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Turn_To_Delete_Member(TheCode)
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
		    	MakePageTo_Refer_Member();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server = "server="+"delete";
    server += ("&kind="+"id");
    server += ("&select="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//�޸ĸ�����Ϣ
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Change_PersonalInformation(){
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
		    	var Area = '';
		    	Area += '<div class="row">';
		    	Area += '	<div class="col-md-12">';
		    	Area += '		<h2>�޸ĸ�����Ϣ</h2> ';
		    	Area += '	</div>';
		    	Area += '</div>';
		    	Area += '<hr/>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;����<span style="color:#3CB371;">����</span>��</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="name" class="MeoryInput" value="'+InformationSet[1].Name+'"/>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="error_name" style="color:red;"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		        Area += '&nbsp;&nbsp;<button class="Message_Button" onclick="MakeSure_Change_Member()">����</button>';
		    	document.getElementById("page-inner").innerHTML = Area;
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
function MakeSure_Change_Member(){
	var name = document.getElementById("name").value;
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
		    	if(name=="")
		    		document.getElementById("error_name").innerHTML = "������û�������Ϊ�գ�";
		    	else if(name.length>16||name.length<2)
		    		document.getElementById("error_name").innerHTML = "������û����ĳ��ȱ�����2~16��Χ�ڣ�";
		    	else if(leng==1)
		    		document.getElementById("error_name").innerHTML = "������û����Ѵ��ڻ���δ�ı䣡";
		    	else
		    	{
		    		document.getElementById("error_name").innerHTML = "&nbsp;";
		    		Change_Personal_Information();
		    	}
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server = "server="+"refer";
    server += ("&kind="+"name");
    server += ("&select="+name);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Change_Personal_Information(){
	var name = document.getElementById("name").value;
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
		    	alert("�޸ĳɹ���");
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server = "server="+"changename";
    server += ("&name="+name);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
	alert(server);
}