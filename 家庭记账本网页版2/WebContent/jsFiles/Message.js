function MakePageTo_Management_Reset_Password()
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
	    		
	    		//���
	    		var Area = '';
	    	    Area += '<div class="row">';
	    	    Area += '	<div class="col-md-12">';
	    	    Area += '		<h2>�������ù���</h2> ';
	    	    Area += '	</div>';
	    	    Area += '</div>';
	    	    Area += '<hr/>';
	    	    Area += '<span class="Tran_Under_Title">���¼�Ϊ��Ҫ�������õ��û�����������</span>';
	    	    Area += '<br>';
	    	    Area += '<br>';
	    	    if(length==0)
	    			Area += '<b style="margin-left:30px;">Ŀǰ��û���û���������</b>';
	    		else
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
	    				Area += '<div class="MessageDIV2">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">�����ţ�</b>';
	    	    	    Area += '		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�����</b></span>';
	    	    	    Area += ('		<span style="color:rgb(255,109,109);float:right;margin-right:20px;">'+InformationSet[i].UserName+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û���ţ�</b></span>';
	    	    	    Area += ('		<span style="color:rgb(255,109,109);float:right;margin-right:20px;">'+InformationSet[i].UserCode+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Check_And_Make_It_Reset('+InformationSet[i].Code+')">����</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Check_And_Make_It_Lost('+InformationSet[i].Code+')">����</button>');
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
	    				Area += '<div class="MessageDIV2">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">�����ţ�</b>';
	    	    	    Area += '		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û�����</b></span>';
	    	    	    Area += ('		<span style="color:rgb(255,109,109);float:right;margin-right:20px;">'+InformationSet[i].UserName+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>�û���ţ�</b></span>';
	    	    	    Area += ('		<span style="color:rgb(255,109,109);float:right;margin-right:20px;">'+InformationSet[i].UserCode+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Check_And_Make_It_Reset('+InformationSet[i].Code+')">����</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Check_And_Make_It_Lost('+InformationSet[i].Code+')">����</button>');
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
	    	    document.getElementById("page-inner").innerHTML = Area;
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageForgotPassword"; 
    var server= "server="+"all";
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Check_And_Make_It_Reset(TheCode){
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
	    		if(leng==0)
	    			alert("���û��Ѿ�ɾ���򲻴��ڣ�");
	    		else
	    			Make_It_Reset(TheCode);
		    	
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"refer";
    server += ("&"+"kind"+"="+"id");
    server += ("&"+"select"+"="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Make_It_Reset(theCode){
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
		    	alert("�����Ѿ��ɹ���Ϊ123456��");
		    	Check_And_Make_It_Lost(theCode);
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"change";
    server += ("&"+"kind"+"="+"id");
    server += ("&"+"select"+"="+theCode);
    server += ("&"+"changekind"+"="+"password");
    server += ("&"+"password"+"="+"123456");
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Check_And_Make_It_Lost(TheCode){
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
		    	MakePageTo_Management_Reset_Password();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageForgotPassword"; 
    var server= "server="+"delete";
    server += ("&"+"kind"+"="+"id");
    server += ("&"+"select"+"="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
/*
	margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:#FFDAB9;
*/