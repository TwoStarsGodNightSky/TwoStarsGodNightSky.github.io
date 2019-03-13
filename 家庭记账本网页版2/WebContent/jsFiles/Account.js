//----------
//添加账单
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Add_Account(){
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
		    	var Area = '';
		    	Area += '<div class="row">';
		    	Area += '	<div class="col-md-12">';
		    	Area += '		<h2>添加账单</h2> ';
		    	Area += '	</div>';
		    	Area += '</div>';
		    	Area += '<hr/>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">购买物件名称</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="name" class="MeoryInput" />';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_name"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">单价</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="balance" class="MeoryInput" />';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_balance"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">数量</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="num" class="MeoryInput"/>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_num"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;请选择<span style="color:#3CB371;">账单类型</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<select id="accountkind">';
		    	
	    		s = xmlHttp.responseText;
	    		var InformationSet = eval('('+s+')');
	    		var leng = InformationSet[0].Length;
	   			for(var i=1;i<=leng;++i)
	   			{
	   				var pop = InformationSet[i].Kindname;
	   				Area += '<option value ="c'+i+'">'+pop+'</option>';
	   			}
	   			Area += '</select>';
	   			Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '<label>&nbsp;&nbsp;&nbsp;请输入<span style="color:#3CB371;">购买商店</span>：</label>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<input id="shop" class="MeoryInput" />';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_shop"></span>';
	   	    	Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<button class="Message_Button" onclick="Check_For_Add_Account()">确认</button>';
	   	    	Area += '<br>';
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
function Check_For_Add_Account(){
	var mort = 0;//用于判定通过数量
	
	var name = document.getElementById("name").value;
	var shop = document.getElementById("shop").value;
	var balance = document.getElementById("balance").value;
	var num = document.getElementById("num").value;
	
	if(name=="")
		document.getElementById("error_name").innerHTML = "输入的物件名称不能为空！";
	else if(name.length>20)
		document.getElementById("error_name").innerHTML = "输入的物件名称的长度不能超过20！";
	else
	{
		document.getElementById("error_name").innerHTML = "";
		mort += 1;
	}
		
	if(shop=="")
		document.getElementById("error_shop").innerHTML = "输入的商店名称不能为空！";
	else if(shop.length>20)
		document.getElementById("error_shop").innerHTML = "输入的商店名称的长度不能超过20！";
	else
	{
		document.getElementById("error_shop").innerHTML = "";
		mort += 1;
	}

	if(balance=="")
		document.getElementById("error_balance").innerHTML = "输入的价格不能为空！";
	else if(balance.length>8)
		document.getElementById("error_balance").innerHTML = "输入的价格的长度不能超过8！";
	else if(!isDouble(balance))
		document.getElementById("error_balance").innerHTML = "输入的价格的格式不符:只能是数字或小数点且小数点只能有一个！";
	else
	{
		document.getElementById("error_balance").innerHTML = "";
		mort += 1;
	}

	if(num=="")
		document.getElementById("error_num").innerHTML = "输入的数量不能为空！";
	else if(num.length>4)
		document.getElementById("error_num").innerHTML = "输入的数量的长度不能超过4！";
	else if(!isInt(num))
		document.getElementById("error_num").innerHTML = "输入的价格的格式不符:只能是数字！";
	else
	{
		document.getElementById("error_num").innerHTML = "";
		mort += 1;
	}
	
	if(mort==4)
		Achieve_Goal_Add_Account();
}
function Achieve_Goal_Add_Account(){
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
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"add";
    server += ("&"+"item="+document.getElementById("name").value);
    server += ("&"+"num="+document.getElementById("num").value);
    server += ("&"+"balance="+document.getElementById("balance").value);
    server += ("&"+"shop="+document.getElementById("shop").value);
    server += ("&"+"kindname="+document.getElementById("accountkind").options[document.getElementById("accountkind").selectedIndex].text);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//----------
//遍历账单
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Refer_Account(){
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
	        	Area += '		<h2>遍历所有账单信息</h2> ';
	        	Area += '	</div>';
	        	Area += '</div>';
	        	Area += '<hr/>';
	        	Area += '<br>';
	        	if(length==0)
		    	{
		    		Area += '<div id="MessageArea">';
			    	Area += '	&nbsp;&nbsp;目前还没有任何账单！';
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
	    				Area += '	<div style="width:280px;height:430px;">';
	    	        	Area += '		<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:420px;border:2px soild gray;border-radius:10px;background:rgb(200,240,120);">';
	    	            Area += '			<div class="MessageDIV3">';
	    	            Area += '				<br>';
	    	            Area += '				&nbsp;&nbsp;<b class="Main_B">编号：</b>';
	    	            Area += '				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	            Area += ('				<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	            Area += '				<hr/>';
	    	            Area += '				<span class="TitleSpan"><b>商品名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Items+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品价格：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Balance+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品数量：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Num+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品分类：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购买日期：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购物者：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Custom+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>卖家名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Shop+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<div class="Message_Button_DIV">';
	    	            Area += ('					<button class="Message_Button" onclick="Turn_To_The_Page_Of_Change_Account('+InformationSet[i].Code+')">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Account('+InformationSet[i].Code+')">删除</button>');
	    	            Area += '				</div>';
	    	            Area += '			</div>';
	    	            Area += '		</div>';
	    	        	Area += '	</div>';
	    				Area += '		</td>';
	    				if(i%4==0)
	    					Area += '	</tr>';
	    			}
	    			if(restInt!=0)
	    				Area += '	<tr>';
	    			for(;i<=length;++i)
	    			{
	    				Area += '		<td>';
	    				Area += '	<div style="width:280px;height:430px;">';
	    	        	Area += '		<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:420px;border:2px soild gray;border-radius:10px;background:rgb(200,240,120);">';
	    	            Area += '			<div class="MessageDIV3">';
	    	            Area += '				<br>';
	    	            Area += '				&nbsp;&nbsp;<b class="Main_B">编号：</b>';
	    	            Area += '				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	            Area += ('				<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	            Area += '				<hr/>';
	    	            Area += '				<span class="TitleSpan"><b>商品名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Items+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品价格：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Balance+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品数量：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Num+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品分类：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购买日期：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购物者：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Custom+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>卖家名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(114,163,17);float:right;margin-right:20px;">'+InformationSet[i].Shop+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<div class="Message_Button_DIV">';
	    	            Area += ('					<button class="Message_Button" onclick="Turn_To_The_Page_Of_Change_Account('+InformationSet[i].Code+')">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Account('+InformationSet[i].Code+')">删除</button>');
	    	            Area += '				</div>';
	    	            Area += '			</div>';
	    	            Area += '		</div>';
	    	        	Area += '	</div>';
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
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"all";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function MakePageTo_Refer_Account_In_Member(){
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
	        	Area += '		<h2>个人账单查询</h2> ';
	        	Area += '	</div>';
	        	Area += '</div>';
	        	Area += '<hr/>';
	        	Area += '<br>';
	        	if(length==0)
		    	{
		    		Area += '<div id="MessageArea">';
			    	Area += '	&nbsp;&nbsp;目前还没有任何账单！';
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
	    				Area += '	<div style="width:280px;height:430px;">';
	    	        	Area += '		<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:420px;border:2px soild gray;border-radius:10px;background:rgb(247,176,247);">';
	    	            Area += '			<div class="MessageDIV3">';
	    	            Area += '				<br>';
	    	            Area += '				&nbsp;&nbsp;<b class="Main_B">编号：</b>';
	    	            Area += '				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	            Area += ('				<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	            Area += '				<hr/>';
	    	            Area += '				<span class="TitleSpan"><b>商品名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Items+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品价格：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Balance+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品数量：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Num+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品分类：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购买日期：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购物者：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Custom+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>卖家名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Shop+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<div class="Message_Button_DIV">';
	    	            Area += ('					<button class="Message_Button" onclick="Turn_To_The_Page_Of_Change_Account('+InformationSet[i].Code+')">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Account('+InformationSet[i].Code+')">删除</button>');
	    	            Area += '				</div>';
	    	            Area += '			</div>';
	    	            Area += '		</div>';
	    	        	Area += '	</div>';
	    				Area += '		</td>';
	    				if(i%4==0)
	    					Area += '	</tr>';
	    			}
	    			if(restInt!=0)
	    				Area += '	<tr>';
	    			for(;i<=length;++i)
	    			{
	    				Area += '		<td>';
	    				Area += '	<div style="width:280px;height:430px;">';
	    	        	Area += '		<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:420px;border:2px soild gray;border-radius:10px;background:rgb(247,176,247);">';
	    	            Area += '			<div class="MessageDIV3">';
	    	            Area += '				<br>';
	    	            Area += '				&nbsp;&nbsp;<b class="Main_B">编号：</b>';
	    	            Area += '				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	    	            Area += ('				<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
	    	            Area += '				<hr/>';
	    	            Area += '				<span class="TitleSpan"><b>商品名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Items+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品价格：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Balance+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品数量：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Num+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>商品分类：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购买日期：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Creatdate+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>购物者：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Custom+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<span class="TitleSpan"><b>卖家名称：</b></span>';
	    	            Area += ('				<span style="color:rgb(227,29,227);float:right;margin-right:20px;">'+InformationSet[i].Shop+'</span>');
	    	            Area += '				<br>';
	    	            Area += '				<br>';
	    	            Area += '				<div class="Message_Button_DIV">';
	    	            Area += ('					<button class="Message_Button" onclick="Turn_To_The_Page_Of_Change_Account('+InformationSet[i].Code+')">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="Message_Button" onclick="Turn_To_Delete_Account('+InformationSet[i].Code+')">删除</button>');
	    	            Area += '				</div>';
	    	            Area += '			</div>';
	    	            Area += '		</div>';
	    	        	Area += '	</div>';
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
    var url ="../servlet/ServletForAccount"; 
    var server = "server="+"part";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Turn_To_The_Page_Of_Change_Account(TheCode){
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
		    	var Area = '';
		    	Area += '<div class="row">';
		    	Area += '	<div class="col-md-12">';
		    	Area += '		<h2>修改账单信息</h2> ';
		    	Area += '	</div>';
		    	Area += '</div>';
		    	Area += '<hr/>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;<span style="color:#3CB371;">购买物件名称</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="name" class="MeoryInput" />';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_name"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;<span style="color:#3CB371;">单价</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="balance" class="MeoryInput" />';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_balance"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;<span style="color:#3CB371;">数量</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<input id="num" class="MeoryInput"/>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_num"></span>';
		    	Area += '<br>';
		    	Area += '<br>';
		    	Area += '<label>&nbsp;&nbsp;&nbsp;<span style="color:#3CB371;">账单类型</span>：</label>';
		    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		    	Area += '<select id="accountkind">';
		    	
	    		s = xmlHttp.responseText;
	    		var InformationSet = eval('('+s+')');
	    		var leng = InformationSet[0].Length;
	   			for(var i=1;i<=leng;++i)
	   			{
	   				var pop = InformationSet[i].Kindname;
	   				Area += '<option value ="c'+i+'">'+pop+'</option>';
	   			}
	   			Area += '</select>';
	   			Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '<label>&nbsp;&nbsp;&nbsp;<span style="color:#3CB371;">购买商店</span>：</label>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<input id="shop" class="MeoryInput" />';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<span style="color:red;" id="error_shop"></span>';
	   	    	Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '<br>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<button class="Message_Button" onclick="Check_For_Change_Account('+TheCode+')">保存</button>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<button class="Message_Button" onclick="Re_Load_For_Change_Account('+TheCode+')">重置</button>';
	   	    	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	   	    	Area += '<button class="Message_Button" onclick="MakePageTo_Refer_Account()">返回</button>';
	   	    	Area += '<br>';
	   	    	document.getElementById("page-inner").innerHTML = Area;
	   	    	Re_Load_For_Change_Account(TheCode);
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccountKind"; 
    var server= "server="+"all";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Re_Load_For_Change_Account(thecode){
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
	    		{
	    			document.getElementById("name").value = InformationSet[1].Items;
	    			document.getElementById("balance").value = InformationSet[1].Balance;
	    			document.getElementById("num").value = InformationSet[1].Num;
	    			var maxSize = document.getElementById("accountkind").length;
	    			for(var i = 0;i<maxSize;++i)
	    			{
	    				if(document.getElementById("accountkind").options[i].text==InformationSet[1].Kindname)
	    				{
	    					document.getElementById("accountkind").selectedIndex = i;
	    					break;
	    				}
	    			}
	    			document.getElementById("shop").value = InformationSet[1].Shop;
	    		}
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"refer";
    server += ("&select="+thecode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Check_For_Change_Account(thecode){
	var mort = 0;//用于判定通过数量
	
	var name = document.getElementById("name").value;
	var shop = document.getElementById("shop").value;
	var balance = document.getElementById("balance").value;
	var num = document.getElementById("num").value;
	
	if(name=="")
		document.getElementById("error_name").innerHTML = "输入的物件名称不能为空！";
	else if(name.length>20)
		document.getElementById("error_name").innerHTML = "输入的物件名称的长度不能超过20！";
	else
	{
		document.getElementById("error_name").innerHTML = "";
		mort += 1;
	}
		
	if(shop=="")
		document.getElementById("error_shop").innerHTML = "输入的商店名称不能为空！";
	else if(shop.length>20)
		document.getElementById("error_shop").innerHTML = "输入的商店名称的长度不能超过20！";
	else
	{
		document.getElementById("error_shop").innerHTML = "";
		mort += 1;
	}

	if(balance=="")
		document.getElementById("error_balance").innerHTML = "输入的价格不能为空！";
	else if(balance.length>8)
		document.getElementById("error_balance").innerHTML = "输入的价格的长度不能超过8！";
	else if(!isDouble(balance))
		document.getElementById("error_balance").innerHTML = "输入的价格的格式不符:只能是数字或小数点且小数点只能有一个！";
	else
	{
		document.getElementById("error_balance").innerHTML = "";
		mort += 1;
	}

	if(num=="")
		document.getElementById("error_num").innerHTML = "输入的数量不能为空！";
	else if(num.length>4)
		document.getElementById("error_num").innerHTML = "输入的数量的长度不能超过4！";
	else if(!isInt(num))
		document.getElementById("error_num").innerHTML = "输入的价格的格式不符:只能是数字！";
	else
	{
		document.getElementById("error_num").innerHTML = "";
		mort += 1;
	}
	
	if(mort==4)
		Achieve_Goal_Change_Account(thecode);
}
function Achieve_Goal_Change_Account(thecode){
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
		    	alert("保存成功！");
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"change";
    server += ("&"+"select="+thecode);
    server += ("&"+"name="+document.getElementById("name").value);
    server += ("&"+"num="+document.getElementById("num").value);
    server += ("&"+"balance="+document.getElementById("balance").value);
    server += ("&"+"shop="+document.getElementById("shop").value);
    server += ("&"+"accountkind="+document.getElementById("accountkind").options[document.getElementById("accountkind").selectedIndex].text);
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
function Turn_To_Delete_Account(TheCode)
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
		    	MakePageTo_Refer_Account();
	    	}
	   	}
	};
    var url ="../servlet/ServletForAccount"; 
    var server= "server="+"delete";
    server += ("&"+"select="+TheCode);
    xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}
//汇总
function MakePageTo_Sum_Account(){
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
		    	Area += '		<h2>汇总</h2> ';
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
				    	Area += '	<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(209,216,206);">';
				        Area += '		<div class="MessageDIV3">';
				        Area += '			<br>';
				        Area += '			&nbsp;&nbsp;<b class="Main_B">编号：</b>';
				        Area += '			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				        Area += ('			<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
				        Area += '			<hr/>';
				        Area += '			<span class="TitleSpan"><b>分类名称：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>账单数：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Deal+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>总价格：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Cost+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
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
				    	Area += '	<div style="margin-top:5px;margin-bottom:5px;margin-left:10px;margin-right:10px;width:260px;height:260px;border:2px soild gray;border-radius:10px;background:rgb(209,216,206);">';
				        Area += '		<div class="MessageDIV3">';
				        Area += '			<br>';
				        Area += '			&nbsp;&nbsp;<b class="Main_B">编号：</b>';
				        Area += '			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				        Area += ('			<b style="font-size:150%;float:right;margin-right:20px;">'+InformationSet[i].Code+'</b>');
				        Area += '			<hr/>';
				        Area += '			<span class="TitleSpan"><b>分类名称：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Kindname+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>账单数：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Deal+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
				        Area += '			<span class="TitleSpan"><b>总价格：</b></span>';
				        Area += ('			<span style="color:rgb(107,103,85);float:right;margin-right:20px;">'+InformationSet[i].Cost+'</span>');
				        Area += '			<br>';
				        Area += '			<br>';
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
    var server= "server="+"account";
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(server);
}