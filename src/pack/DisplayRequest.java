package pack;

import java.io.*;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DisplayRequest
 */
@WebServlet("/DisplayRequest")
public class DisplayRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public DisplayRequest() {
        super();
        // TODO Auto-generated constructor stub
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("UTF8");
		response.setContentType("text/html; charset=UTF8");
		
		PrintWriter pw = response.getWriter();
		
		pw.println("姓　：　" + request.getParameter("sei") + "<br>");
		pw.println("名　：　" + request.getParameter("mei") + "<br>");
    	pw.println("性別　：　" + request.getParameter("sex") + "<br>");
    	pw.println("年齢　：　" + request.getParameter("age") + "<br>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
