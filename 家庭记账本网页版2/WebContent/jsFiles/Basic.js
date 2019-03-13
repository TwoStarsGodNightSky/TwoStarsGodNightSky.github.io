//----------
//公共部分
//-
//-
//-
//-
//-
//-
//----------
function isInt(str){
	for (ilen = 0; ilen < str.length; ilen++) {
        if (!(str.charAt(ilen) >= '0' && str.charAt(ilen) <= '9')) {
            return false;
        }
    }
    return true;
}
function isDouble(str){
	var code = true;
	if(str.charAt(0)=='.')
		return false;
	for (ilen = 0; ilen < str.length; ilen++) {
		if(code)
		{
			if (!((str.charAt(ilen) >= '0' && str.charAt(ilen) <= '9')||(str.charAt(ilen) == '.'))) 
		    {
		    	return false;
		    }
			if(str.charAt(ilen) == '.')
				code = false;
		}
		else
		{
			if (!(str.charAt(ilen) >= '0' && str.charAt(ilen) <= '9')) 
		    {
		    	return false;
		    }
		}
    }
    return true;
}
//----------
//打赏作者
//-
//-
//-
//-
//-
//-
//----------
function TurnPictureTo_Pay(isZhiFuBao){
    if(isZhiFuBao)
    {
    	document.getElementById("pic").src = "../images/zhifubao.jpg";
    }
    else
    {
    	document.getElementById("pic").src = "../images/weixin.jpg";
    }
}
function MakePageTo_PayForMaker(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>打赏作者</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;推荐使用<span style="color:blue;">支付宝</span>,但也支持<span style="color:#3CB371;">微信支付</span>！';
	Area += '<br>';
	Area += '<br>';
	Area += '<b>&nbsp;&nbsp;&nbsp;请选择您的支付方式：</b>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:blue;"><input onclick="TurnPictureTo_Pay(true)" id="zhifubao" type="radio" name="paykind" checked/>&nbsp;支付宝</label>';
	Area += '&nbsp;&nbsp;<label style="color:#3CB371;"><input onclick="TurnPictureTo_Pay(false)" type="radio" id="weixin" name="paykind" />&nbsp;微信支付</label>';
	Area += '<br>';
	Area += '<br>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="pic" type="width:100%;height:100%;" src="../images/zhifubao.jpg"/>';
	
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//主页
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_MainPage(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>主页</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<div id="MessageArea">';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;欢迎您使用记账本程序！';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;我们生活在商品的世界，而拥有一个风格简约、易操作的记账本程序无疑是您的不二选择！记录您生活中的账单，让您的生活充满计划！您的支持就是我们最大的动力！感谢您的使用！';
	Area += '</div>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//网站信息
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_NetLocation(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>网站信息</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<div id="MessageArea">';
	Area += '	&nbsp;&nbsp;&nbsp;网站地址:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:8080/FamilyCashManagerComplete/jspFiles/index.jsp';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;网站修改事件:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-3-5 21:56';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;网站用户数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;网站版本:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.0.2.5';
	Area += '</div>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//设置
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Setthings(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>设置</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<span class="Tran_Under_Title">目前没有可以提供设置的选项哦！</span>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//意见反馈
//-
//-
//-
//-
//-
//-
//----------
function MakePageTo_Resend_Message_To_Maker(){
	var Area = '';
	Area += '<div class="row">';
	Area += '	<div class="col-md-12">';
	Area += '		<h2>意见反馈</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;感谢您对我们产品的极力支持，我们将会认真审视您的宝贵意见！';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;您的<span style="color:#3CB371;">反馈</span>:';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<textarea id="opinion" rows="9" cols="120" style="border:2px black soild;"></textarea>';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<button class="Message_Button" onclick="To_Review_And_Type_Submit()">提交</button>';
	document.getElementById("page-inner").innerHTML = Area;
}
function To_Review_And_Type_Submit(){
	var tip = document.getElementById("opinion").value;
	if(tip=="")
		alert("输入内容不能为空！");
	else if(tip.length<20||tip.length>500)
		alert("输入内容请保持在20~500范围内！");
	else
		alert("提交成功！感谢您的参与！");
}