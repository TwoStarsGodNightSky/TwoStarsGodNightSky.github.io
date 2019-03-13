<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport"content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>家庭记账本管理系统（普通用户版）</title>
		
		<script src="../../jsFiles/main/adapter.js"></script> 
		<script src="../../jsFiles/main/menu.js"></script> <!--控制js-->
		<script charset="gbk" src="../../jsFiles/main/basic.js"></script>
		<script>ChangeTheCodeAndTheName();</script>
		
		<!--rem适配js-->
		<script charset="gbk" src="../../jsFiles/member/referSelfInformation.js"></script>
		<script charset="gbk" src="../../jsFiles/member/changePassword.js"></script>
		<script charset="gbk" src="../../jsFiles/member/changeName.js"></script>
		<script charset="gbk" src="../../jsFiles/member/addAccount.js"></script>
		<script charset="gbk" src="../../jsFiles/member/referAccount.js"></script>
		
		<link rel="stylesheet" href="../../cssFiles/main/base.css"> <!--初始化文件-->
		<link rel="stylesheet" href="../../cssFiles/main/menu.css"> <!--主样式-->
		<link rel="stylesheet" href="../../cssFiles/main/parten.css"> <!--自定义样式-->
		
	</head>
	<body style="background:url(../../images/main/bg.jpg) no-repeat;">
		
		<div id="menu">
		    <!--隐藏菜单-->
		    <div id="ensconce">
		        <h2><img src="../../images/main/show.png" alt="">基本功能</h2>
		    </div>
		
		    <!--显示菜单-->
		    <div id="open">
		        <div class="navH">
		            基本功能
		            <span><img class="obscure" src="../../images/main/obscure.png" alt=""></span>
		        </div>
		        <div class="navBox">
		            <ul>
		                <li>
		                    <h2 class="obtain">个人信息处理<i></i></h2>
		                    <div class="secondary">
		                        <a onclick="TurnToReferSelfInformation()"><h3>查看个人信息</h3></a>
		                        <a onclick="TurnToChangeName()"><h3>修改名称</h3></a>
		                        <a onclick="TurnToChangePassword()"><h3>修改密码</h3></a>
		                        <a onclick="window.location.href = '../login/login.jsp';"><h3>退出登录</h3></a>
		                    </div>
		                </li>
		                <li>
		                    <h2 class="obtain">账本管理<i></i></h2>
		                    <div class="secondary">
		                   	 	<a onclick="TurnToAddAccount()"><h3>添加账本</h3></a>
		                        <a onclick="TurnToReferAccount()"><h3>个人账本查询</h3></a>
		                    </div>
		                </li>
		            </ul>
		        </div>
		    </div>
		</div>
		
		<div id='RightArea'>
			<br>
			<br>
			<br>
			<br>
			<center>
				<p class="welcomeB">欢迎使用家庭记账本管理系统！</p>
			</center>
		</div>		
	</body>
</html>