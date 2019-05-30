package pack;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class JavaConsoleTest {
	
	public static void main(String[] args) {
		
		System.out.println(System.getProperty("file.encoding"));
		
		System.out.println("[1] ０：アメリカ合衆国の首都はどこでしょう");
		System.out.println("[2] １：ニューヨーク");
		System.out.println("[3] ２：ワシントン");
		System.out.println("[4] ３：ロサンジェルス");
		System.out.print("[5] 答えを番号で入力し、開業を押してください。＝＞");
		
		InputStreamReader inputStreamReader = new InputStreamReader(System.in);
		BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
		
		int answer = 0;
		String message = "間違いです。";
		
		try {
			String buf = bufferedReader.readLine();
			answer = Integer.parseInt(buf);
		} catch(Exception exception) {
			answer = 0;
			message = "答えを番号で入力してください。";
		}
		
		if(answer == 2) {
			message = "正解です。";
		}
		System.out.println(message);
	}
	
}
