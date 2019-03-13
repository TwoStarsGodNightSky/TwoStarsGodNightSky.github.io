<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd" >
<html>
<head>
	<title>记账本系统登录</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<!--  <meta charset="UTF-8">  
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link href="../login/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="../login/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="../login/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css">
	<link href="../login/css/templatemo_style.css" rel="stylesheet" type="text/css">	
</head>
<script src="../jsFiles/login.js" charset="gbk"></script>
<body class="templatemo-bg-gray">
	<br>
	<br>
	<br>
	<br>
	<br>
	<div class="container">
		<div class="col-md-12">
			<h1 class="margin-bottom-15">登录窗口</h1>
			<div class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30">	<!-- form -->			
		        <div class="form-group">
		          	<div class="col-xs-12">		            
		            	<div class="control-wrapper">
		            		<label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
		            		<input type="text" class="form-control" id="username" placeholder="用户名">
		            	</div>		            	            
		          	</div>              
		        </div>
		        <div class="form-group">
		          	<div class="col-md-12">
		          		<div class="control-wrapper">
		            		<label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
		            		<input type="password" class="form-control" id="password" placeholder="密码">
		           		</div>
		          	</div>
		        </div>
		        <div class="form-group">
		          	<div class="col-md-12">
	             		<div class="checkbox control-wrapper">
	                		<label>
	                  			<input id="isRemember_Login" type="checkbox" > 记住我
                			</label>
	              		</div>
		          	</div>
		        </div>
		        <div class="form-group">
		          	<div class="col-md-12">
			          	<div class="control-wrapper">
			          		<button class="btn btn-info" onclick="Login_To_Main_Page()">登录</button>
			          		<a href="jour.jsp" class="text-right pull-right">忘记密码?</a>
			          	</div>
		          	</div>
		        </div>
		      </div><!-- form -->
		      <div class="text-center">
		      	<a href="jour.jsp" class="templatemo-create-new">注册新用户<i class="fa fa-arrow-circle-o-right"></i></a>	
		      </div>
		</div>
	</div>
</body>
<script>
onLoadP();
</script>
</html>