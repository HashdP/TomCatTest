package consolePractice;

class RegisterNote{
	private static RegisterNote registerNote = new RegisterNote();
	private RegisterNote() {}
	public static RegisterNote getInstance() {
		return registerNote;
	}
	
	public void draw() {
		System.out.println("シングルトンのテスト");
	}
}

public class DP_Practice_Singleton {
	public static void main(String[] args) {
		RegisterNote.getInstance().draw();
	}
}
