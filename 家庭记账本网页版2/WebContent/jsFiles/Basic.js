//----------
//��������
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
//��������
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
	Area += '		<h2>��������</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;�Ƽ�ʹ��<span style="color:blue;">֧����</span>,��Ҳ֧��<span style="color:#3CB371;">΢��֧��</span>��';
	Area += '<br>';
	Area += '<br>';
	Area += '<b>&nbsp;&nbsp;&nbsp;��ѡ������֧����ʽ��</b>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="color:blue;"><input onclick="TurnPictureTo_Pay(true)" id="zhifubao" type="radio" name="paykind" checked/>&nbsp;֧����</label>';
	Area += '&nbsp;&nbsp;<label style="color:#3CB371;"><input onclick="TurnPictureTo_Pay(false)" type="radio" id="weixin" name="paykind" />&nbsp;΢��֧��</label>';
	Area += '<br>';
	Area += '<br>';
	Area += '<br>';
	Area += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="pic" type="width:100%;height:100%;" src="../images/zhifubao.jpg"/>';
	
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//��ҳ
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
	Area += '		<h2>��ҳ</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<br>';
	Area += '<div id="MessageArea">';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;��ӭ��ʹ�ü��˱�����';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;������������Ʒ�����磬��ӵ��һ������Լ���ײ����ļ��˱��������������Ĳ���ѡ�񣡼�¼�������е��˵�����������������ƻ�������֧�־����������Ķ�������л����ʹ�ã�';
	Area += '</div>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//��վ��Ϣ
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
	Area += '		<h2>��վ��Ϣ</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<div id="MessageArea">';
	Area += '	&nbsp;&nbsp;&nbsp;��վ��ַ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:8080/FamilyCashManagerComplete/jspFiles/index.jsp';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;��վ�޸��¼�:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-3-5 21:56';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;��վ�û���:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3';
	Area += '	<br>';
	Area += '	&nbsp;&nbsp;&nbsp;��վ�汾:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.0.2.5';
	Area += '</div>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//����
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
	Area += '		<h2>����</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '<span class="Tran_Under_Title">Ŀǰû�п����ṩ���õ�ѡ��Ŷ��</span>';
	document.getElementById("page-inner").innerHTML = Area;
}
//----------
//�������
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
	Area += '		<h2>�������</h2> ';
	Area += '	</div>';
	Area += '</div>';
	Area += '<hr/>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;��л�������ǲ�Ʒ�ļ���֧�֣����ǽ��������������ı��������';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;����<span style="color:#3CB371;">����</span>:';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<textarea id="opinion" rows="9" cols="120" style="border:2px black soild;"></textarea>';
	Area += '<br>';
	Area += '<br>';
	Area += '	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	Area += '<button class="Message_Button" onclick="To_Review_And_Type_Submit()">�ύ</button>';
	document.getElementById("page-inner").innerHTML = Area;
}
function To_Review_And_Type_Submit(){
	var tip = document.getElementById("opinion").value;
	if(tip=="")
		alert("�������ݲ���Ϊ�գ�");
	else if(tip.length<20||tip.length>500)
		alert("���������뱣����20~500��Χ�ڣ�");
	else
		alert("�ύ�ɹ�����л���Ĳ��룡");
}