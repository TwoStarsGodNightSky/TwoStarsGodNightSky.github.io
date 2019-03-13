<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html  PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html dir="ltr" lang="en-US">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>用户登录</title>
	<link rel="stylesheet" href="../../cssFiles/login/style.css" type="text/css" />


	<!--- Javascript libraries (jQuery and Selectivizr) used for the custom checkbox --->

		<script type="text/javascript" charset="gbk" src="../../jsFiles/login/BeforeLogin.js"></script>
		<script type="text/javascript" charset="gbk" src="../../jsFiles/login/ToLogin.js"></script>
		<script type="text/javascript" src="../../jsFiles/login/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="../../jsFiles/login/selectivizr.js"></script>
		<script charset="gbk" src="../../jsFiles/main/basic.js"></script>
		<script>CheckOutBeforeLogin()</script>
	</head>

	<body>
		<div id="container">
			<form action="welcome.html">
				<div class="login">登录</div>
				<div class="username-text">用户名:</div>
				<div class="password-text">密码:</div>
				<div class="username-field">
					<input type="text" id="username" name="username" value="" />
				</div>
				<div class="password-field">
					<input type="password" id="password" name="password" value="" />
				</div>
				<input type="checkbox" name="remember-me" id="remember-me" /><label for="remember-me">记住我</label>
				<div class="forgot-usr-pwd">如果忘记密码可以通过管理员找回哦！</div>
				<input type="button" onclick="CheckAndLogin()" name="submit" value="GO" />
			</form>
		</div>
		<div id="footer">
			程序由Master工作室简易制作 <a href="http://www.cnblogs.com/onepersonwholive/" target="_blank" title="博客园">作者博客园</a>
		</div>
	</body>
</html>
