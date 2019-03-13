//------------------------------------
//
//
//
//
//
//
//------------------------------------
function  MakePageTo_Management_Add_Member(){
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
	    		
	    		//添加
	    		var Area = '';
	    		Area += '<div class="row">';
	    		Area += '	<div class="col-md-12">';
	    		Area += '		<h2>用户注册管理</h2> ';
	    		Area += '	</div>';
	    		Area += '</div>';
	    		Area += '<hr/>';
	    		Area += '<span class="Tran_Under_Title">如下即为需要注册用户的游客发来的请求：</span>';
	    	    Area += '<br>';
	    	    Area += '<br>';
	    	    
	    	    if(length==0)
	    			Area += '<b style="margin-left:30px;">目前还没有用户发来请求</b>';
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
	    					Area += '<tr>';
	    				Area += '<td>';
	    				Area += '<div class="MessageDIV">';
	    				//
	    				Area += '<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:#90EE90;">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">请求编号：</b>';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>用户名：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Name+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>用户密码：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Password+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>创建日期：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Addmited_To_Check_Out('+InformationSet[i].Code+')">允许</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="To_Lost_Add_Member('+InformationSet[i].Code+')">忽略</button>');
	    	    	    Area += '		</div>';
	    	    	    Area += '	</div>';
	    	    	    Area += '</div>';
	    				//
	    				Area += '</div>';
	    				Area += '</td>';
	    				
	    				if(i%4==0)
	    					Area += '</tr>';
	    			}
	    			if(restInt!=0)
	    				Area += '<tr>';
	    			for(;i<=length;++i)
	    			{
	    				Area += '<td>';
	    				Area += '<div class="MessageDIV">';
	    				//
	    				Area += '<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:#90EE90;">';
	    	    	    Area += '	<div class="MessageDIV3">';
	    	    	    Area += '		<br>';
	    	    	    Area += '		&nbsp;&nbsp;<b class="Main_B">请求编号：</b>';
	    	    	    Area += ('		<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	    	    Area += '		<hr/>';
	    	    	    Area += '		<span class="TitleSpan"><b>用户名：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Name+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>用户密码：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Password+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<span class="TitleSpan"><b>创建日期：</b></span>';
	    	    	    Area += ('		<span style="color:#3CB371;;float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	    	    Area += '		<br>';
	    	    	    Area += '		<br>';
	    	    	    Area += '		<div class="Message_Button_DIV">';
	    	    	    Area += ('			<button class="Message_Button" onclick="Addmited_To_Check_Out('+InformationSet[i].Code+')">允许</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="To_Lost_Add_Member('+InformationSet[i].Code+')">忽略</button>');
	    	    	    Area += '		</div>';
	    	    	    Area += '	</div>';
	    	    	    Area += '</div>';
	    				//
	    				Area += '</div>';
	    				Area += '</td>';
	    			}
	    			for(var j=1;j<=restInt;++j)
	    			{
	    				Area += '<td>';
	    				Area += '</td>';
	    			}
	    			if(restInt!=0)
	    				Area += '</tr>';
	    			Area += '</table>';
	    			Area += '</div>';
	    		}
	    	    document.getElementById("page-inner").innerHTML = Area;
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageAddMember"; 
    var server= "server="+"all";
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Addmited_To_Check_Out(TheCode)
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
	    		
	    		Addmited_To_Add_Member(InformationSet[1].Code,InformationSet[1].Name,InformationSet[1].Password);
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageAddMember"; 
    var server = "server="+"refer";
    server += ("&kind="+"id");
    server += ("&select="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);

}
function Addmited_To_Add_Member(TheCode,TheName,ThePassword){
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
	    			alert("该用户已存在！");
	    		else
	    			Make_It_Add_Access(TheCode,TheName,ThePassword);
		    	
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"refer";
    server += ("&"+"kind"+"="+"name");
    server += ("&"+"select"+"="+TheName);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Make_It_Add_Access(theCode,theName,thePassword)
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
		    	alert("申请完成！");
		    	To_Lost_Add_Member(theCode);
	    	}
	   	}
	};
    var url ="../servlet/ServletForMember"; 
    var server= "server="+"add";
    server += ("&"+"name"+"="+theName);
    server += ("&"+"password"+"="+thePassword);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function To_Lost_Add_Member(TheCode){
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
		    	MakePageTo_Management_Add_Member();
	    	}
	   	}
	};
    var url ="../servlet/ServletForMessageAddMember"; 
    var server= "server="+"delete";
    server += ("&"+"kind"+"="+"id");
    server += ("&"+"select"+"="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}