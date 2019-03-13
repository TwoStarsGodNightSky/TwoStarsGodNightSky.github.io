//----------
//添加分类
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Add_AccountKind(){
    	var Area = '';
    	Area += '<div class="row">';
    	Area += '	<div class="col-md-12">';
    	Area += '		<h2>添加分类</h2> ';
    	Area += '	</div>';
    	Area += '</div>';
    	Area += '<hr/>';
    	Area += '<br>';
    	Area += '<br>';
    	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">分类名称</span>：</label>';
    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="name" class="MeoryInput" />';
    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="alert_add_accountkind" style="color:red;"></span>';
    	Area += '<br>';
    	Area += '<br>';
    	Area += '<br>';
    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    Area += '&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="MakeSure_Add_AccountKind()">确认</button>';
    	document.getElementById("page-inner").innerHTML = Area;
    }
function Make_Direction_Add_AccountKind(pop){
	var Area = '';
	if(pop==0)
		Area = '';
	else if(pop==1)
		Area = '输入内容不能为空！';
	else if(pop==2)
		Area = '该分类名已存在！';
	else if(pop==3)
		Area = '分类名的长度不可以超过15！';
	else
		Area = '传输的pop应该有问题！';
	document.getElementById("alert_add_accountkind").innerHTML = Area;
}
function MakeSure_Add_AccountKind(){
	var Name = document.getElementById("name").value;
	if(Name=="")
		Make_Direction_Add_AccountKind(1);
	else if(Name.length>15)
		Make_Direction_Add_AccountKind(3);
	else
	{
		Refer_AccountKind_Exist_In_Add_AccountKind();
	}
}
function Refer_AccountKind_Exist_In_Add_AccountKind(){
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
	   			{
	    			True_Do_Thing_Add_AccountKind();
	    			Make_Direction_Add_AccountKind(0);
	    		}
	    		else 
	    		{
	    			Make_Direction_Add_AccountKind(2);
	    		}
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccountKind"; 
    var server= "server="+"refer";
    server += ("&"+"kind="+"name");
    server += ("&"+"select="+document.getElementById("name").value);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function True_Do_Thing_Add_AccountKind(){
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
	    		alert("添加成功！");
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccountKind"; 
    var server= "server="+"add";
    server += ("&"+"name="+document.getElementById("name").value);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//查询分类
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Refer_AccountKind(){
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
		    	Area += '		<h2>分类查询</h2> ';
		    	Area += '	</div>';
		    	Area += '</div>';
		    	Area += '<hr/>';
		    	Area += '<br>';
		    	if(length==0)
		    	{
		    		Area += '<div id="MessageArea">';
			    	Area += '	&nbsp;&nbsp;目前还没有任何商品类呢！';
			    	Area += '</div>';
		    	}
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
	    				Area += '<div class="MessageDIV">';
				    	Area += '	<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(134,250,247);">';
				        Area += '		<div class="MessageDIV3">';
				        Area += '			<br>';
				        Area += '			&nbsp;&nbsp;<b class="Main_B">编号：</b>';
				        Area += '			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				        Area += ('			<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
				        Area += '			<hr/>';
				        Area += '			<span class="TitleSpan"><b>分类名称：</b></span>';
				        Area += ('			<span style="color:rgb(24,189,206);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>指定更新内容：</b></span>';
				        Area += ('			<span style="color:rgb(24,189,206);float:right;margin-right:20px;">'+'<input style="width:100px;background:none;border:1px soild black;" id="NewNameInput'+i+'"/>'+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span id="alert_renew_accountkind" style="float:right;margin-rght:20px;color:rgb(23,93,207);">&nbsp;</span>';
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<div class="Message_Button_DIV">';
				        Area += ('				<button class="Message_Button" onclick="Get_A_Translate_For_Them('+InformationSet[i].Code+',true)">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Get_A_Translate_For_Them('+InformationSet[i].Code+',true)">删除</button>');
				        Area += '			</div>';
				        Area += '		</div>';
				        Area += '	</div>';
				    	Area += '</div>';
	    				Area += '		</td>';
	    				if(i%4==0)
	    					Area += '	</tr>';
	    			}
	    			if(restInt!=0)
	    				Area += '	<tr>';
	    			for(;i<=length;++i)
	    			{
	    				Area += '		<td>';
	    				Area += '<div class="MessageDIV">';
				    	Area += '	<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(134,250,247);">';
				        Area += '		<div class="MessageDIV3">';
				        Area += '			<br>';
				        Area += '			&nbsp;&nbsp;<b class="Main_B">编号：</b>';
				        Area += '			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				        Area += ('			<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
				        Area += '			<hr/>';
				        Area += '			<span class="TitleSpan"><b>分类名称：</b></span>';
				        Area += ('			<span style="color:rgb(24,189,206);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>指定更新内容：</b></span>';
				        Area += ('			<span style="color:rgb(24,189,206);float:right;margin-right:20px;">'+'<input style="width:100px;background:none;border:1px soild black;" id="NewNameInput'+InformationSet[i].Code+'"/>'+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span id="alert_renew_accountkind" style="float:right;margin-rght:20px;color:rgb(23,93,207);">&nbsp;</span>';
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<div class="Message_Button_DIV">';
				        Area += ('				<button class="Message_Button" onclick="Get_A_Translate_For_Them('+InformationSet[i].Code+',true)">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Get_A_Translate_For_Them('+InformationSet[i].Code+',true)">删除</button>');
				        Area += '			</div>';
				        Area += '		</div>';
				        Area += '	</div>';
				    	Area += '</div>';
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
    var url ="../servlet/ServletForAccountKind"; 
    var server= "server="+"all";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Get_A_Translate_For_Them(thecode,type){
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
	    		if(length==0)
	    		{
	    			if(type)
			    		Make_It_To_Change_AccountKind(thecode);
			    	else
			    		Make_It_To_Delete_AccountKind(thecode);
	    		}
	    		else
	    			alert("仍然有商品存在！不可以对商品类型做处理！");
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"all";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Make_It_To_Change_AccountKind(TheCode)
{
	var seas = document.getElementById("NewNameInput"+TheCode).value;
	
	if(seas=="")
		alert("输入的内容为空！");
	else if(seas.length<2||seas.length>12)
		alert("输入的名字应该在2~12范围内！");
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
			    	MakePageTo_Refer_AccountKind();
		    	}
		   	}
		};
	    var url ="../servlet/ServletForAccountKind"; 
	    var server= "server="+"change";
	    server += ("&"+"kind="+"id");
	    server += ("&"+"select="+TheCode);
	    server += ("&"+"name="+seas);
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttp.send(server);
	}
}
function Make_It_To_Delete_AccountKind(TheCode)
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
		    	MakePageTo_Refer_AccountKind();
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccountKind"; 
    var server= "server="+"delete";
    server += ("&"+"kind="+"id");
    server += ("&"+"select="+TheCode);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}