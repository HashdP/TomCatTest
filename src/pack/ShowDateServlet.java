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
		request.setAttribute("test", "Java‚©‚ç“n‚³‚ê‚½’l‚Å‚·");
		
		String view = "/WEB-INF/ShowDate.jsp";
		RequestDispatcher dispatcher = request.getRequestDispatcher(view);
		
		dispatcher.forward(request, response);
	}
}
