package consolePractice;

/**
 * 製品の基底クラス
 * 
 * @author Koji
 */
abstract class Product{
	/**
	 * 基底メソッド
	 * 自由な関数を作成してよい
	 */
	public abstract void method();
}

/**
 *ファクトリー 
 * 
 * @author Koji
 */
abstract class Creator{
	protected abstract Product factoryMethod(String str);
	public final Product create(String str) {
		Product p = factoryMethod(str);
		return p;
	}
}

/**
 * 具体的な機能
 * 
 * @author Koji
 *
 */
class ConcreteProduct extends Product{
	private String str;
	
	public ConcreteProduct(String str) {
		this.str = str;
	}
	
	/**
	 * オーバーライド
	 */
	public void method() {
		System.out.println("Hello " + str + "!");
	}
}

/**
 * 具体的な機能拡張（製品の作成）
 * 
 * @author Koji
 */
class ConcreteCreator extends Creator {
	protected Product factoryMethod(String str) {
		return new ConcreteProduct(str);
	}
}


public class DP_Practice_AbstractFactory{
	
	public static void main(String[] args) {
		Creator creator = new ConcreteCreator();
		
		Product java = creator.create("Java");
		Product cpp = creator.create("C++");
		Product cs = creator.create("C#");
		
		java.method();
		cpp.method();
		cs.method();
	}
}