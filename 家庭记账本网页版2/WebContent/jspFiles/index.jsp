<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><!--   xmlns="http://www.w3.org/1999/xhtml"  -->
<head>
    <!--<meta charset="utf-8" />-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>记账本系统</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
    <!-- CUSTOM STYLES-->
    <link href="../assets/css/custom.css" rel="stylesheet" />
    <!-- PERSONAL FONTS-->
   	<link href='../cssFiles/basic.css' rel='stylesheet' type='text/css' />
    <!-- GOOGLE FONTS-->
   	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>
<script src="../jsFiles/AccountKind.js" charset="gbk"></script>
<script src="../jsFiles/Account.js" charset="gbk"></script>
<script src="../jsFiles/Member.js" charset="gbk"></script>
<script src="../jsFiles/Basic.js" charset="gbk"></script>
<script src="../jsFiles/Message.js" charset="gbk"></script>
<script src="../jsFiles/Message2.js" charset="gbk"></script>
<body>
    <div id="wrapper">
         <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="adjust-nav">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"><i class="fa fa-square-o "></i>&nbsp;管理员</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="login.jsp">退出登录</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- /. NAV TOP  -->
        <div class="navbar-default navbar-side"> <!-- nav role="navigation" -->
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li class="text-center user-image-back">
                        <img src="../assets/img/find_user.png" class="img-responsive" />
                     
                    </li>

                    <li>
                        <a href="#" onclick="MakePageTo_MainPage()"><i class="fa fa-desktop "></i>主页</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-sitemap "></i>账单管理<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                        	<li>
                                <a href="#" onclick="MakePageTo_Add_Account()">添加账单</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Refer_Account()">遍历所有账单信息</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Refer_Account_In_Member()">个人账单查询</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Sum_Account()">汇总</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-sitemap "></i>账单分类管理<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="#" onclick="MakePageTo_Add_AccountKind()">添加分类</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Refer_AccountKind()">分类查询</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-sitemap "></i>用户管理<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="#" onclick="MakePageTo_Add_Member()">注册新用户</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Refer_Member()">查询用户</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-sitemap "></i>用户消息管理<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="#" onclick="MakePageTo_Management_Add_Member()">用户注册管理</a>
                            </li>
                            <li>
                                <a href="#" onclick="MakePageTo_Management_Reset_Password()">密码重置管理</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"  onclick="MakePageTo_PayForMaker()"><i class="fa fa-qrcode"></i>打赏作者</a>
                    </li>
                    <li>
                        <a href="https://www.cnblogs.com/onepersonwholive/p/10439683.html"><i class="fa fa-bar-chart-o"></i>作者博客</a>
                    </li>
                    <li>
                        <a href="#" onclick="MakePageTo_NetLocation()"><i class="fa fa-table "></i>网站信息</a>
                    </li>
                    <li>
                        <a href="#" onclick="MakePageTo_Resend_Message_To_Maker()"><i class="fa fa-table"></i>意见反馈</a>
                    </li>              
                    <li>
                        <a href="#" onclick="MakePageTo_Setthings()"><i class="fa fa-edit "></i>设置</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                     	<h2>主页</h2>   
                    </div>
                </div>              
                <!-- /. ROW  -->
                <hr />
                <!-- /. ROW  -->  
                <br>
                <br>
                <div id="MessageArea">
    				&nbsp;&nbsp;&nbsp;&nbsp;欢迎您使用记账本程序！
    				<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;我们生活在商品的世界，而拥有一个风格简约、易操作的记账本程序无疑是您的不二选择！记录您生活中的账单，让您的生活充满计划！您的支持就是我们最大的动力！感谢您的使用！
    			</div> 
    		</div>
            <!-- /. PAGE INNER  -->
       	</div>
        <!-- /. PAGE WRAPPER  -->
    </div>
    <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="../assets/js/jquery-1.10.2.js"></script>
    <!-- BOOTSTRAP SCRIPTS -->
    <script src="../assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="../assets/js/jquery.metisMenu.js"></script>
    <!-- CUSTOM SCRIPTS -->
    <script src="../assets/js/custom.js"></script> 
    <script>
   	
    </script>
</body>
</html>
