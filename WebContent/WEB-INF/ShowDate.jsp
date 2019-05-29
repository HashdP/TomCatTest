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
		<canvas id="testButton1" width="210" height="63"></canvas>
		<canvas id="testButton2" width="200" height="60"></canvas>
		<canvas id="time"></canvas>
		<canvas id="header"></canvas>
		<canvas id="menu"></canvas>
		
		<canvas id="flip", width="200" height="200"></canvas>
		
		<pre id="sorceCode"><code>
package pack;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ShowDateServlet
 */
@WebServlet(name = "ShowDate", urlPatterns = {"/ShowDate"})
public class ShowDateServlet extends HttpServlet 
    implements javax.servlet.Servlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
	    throws ServletException, IOException
	{
		request.setAttribute("test", "Javaから渡された値です");
		
		String view = "/WEB-INF/ShowDate.jsp";
		RequestDispatcher dispatcher = request.getRequestDispatcher(view);
		
		dispatcher.forward(request, response);
	}
}
		</code></pre>>
		
	</div>
	
	<script type="text/javascript" src="./JavaScriptTest.js"></script>
	 
</body>

</html>