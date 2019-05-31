package consolePractice;

class Potato implements Cuttable{
}

abstract class CutPrint2 {
	protected abstract void draw( Cuttable hanzai );
	protected abstract void cut( Cuttable hanzai );
	protected abstract void print( Cuttable hanzai );
	protected Cuttable createCuttable() {
		return new Wood();
	}
	
	public void createCutPrint(){
		Cuttable hanzai = createCuttable();
		draw( hanzai );
		cut( hanzai );
		print( hanzai );
	}
}

class ImagawasCutPrint extends CutPrint2{
	protected void draw(Cuttable hanzai) {
		System.out.println("漫画の絵を描く");
	}
	protected void cut(Cuttable hanzai) {
		System.out.println("彫刻刀を利用して器用に彫る");
	}
	protected void print(Cuttable hanzai) {
		System.out.println("インクとして、自分の血を使いプリントする");
	}
	protected Cuttable createCuttable() {
		return new Potato();
	}
}

public class DP_Practice_Factory {
	public static void main(String[] args) {
		CutPrint2 imagawa = new ImagawasCutPrint();
		imagawa.createCutPrint();
	}
}
