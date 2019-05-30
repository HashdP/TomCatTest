<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ShowDateJSP</title>
<link rel="stylesheet" href=".\Home.css">
</head>

<body onLoad="draw()">

	<div class = "canvas-wrapper">
	
	    <canvas id="bgLine"></canvas>
	
		<canvas id="testButton1" width="210" height="63"></canvas>
		<canvas id="testButton2" width="200" height="60"></canvas>
		<canvas id="time"></canvas>
		<canvas id="header"></canvas>
		<canvas id="menu"></canvas>
		
		<canvas id="flip", width="200" height="200"></canvas>
	</div>
	
	<script type="text/javascript" src="./JavaScriptTest.js"></script>
	 
</body>

</html>