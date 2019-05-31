package consolePractice;

import java.util.*;

class Teacher2{
	public Paper[] createManyCrystals() {
		Paper prototype = new Paper("雪の結晶");
		drawCrystal(prototype);
		cutAccordanceWithLine(prototype);
		
		Paper[] papers = new Paper[100];
		for(int  n = 0; n < papers.length; ++n) {
			papers[n] = (Paper)prototype.createClone();
		}
		return papers;
	}
	private void drawCrystal(Paper paper) {
		
	}
	private void cutAccordanceWithLine(Paper paper) {
		
	}
}

interface Cloneable{
	public Cloneable createClone();
}

class Paper implements Cloneable{
	private String name;
	public Paper() {}
	public Paper(String name) {
		this.name = name;
	}
	public Cloneable createClone() {
		Paper newPaper = new Paper();
		newPaper.name = this.name;
		return newPaper;
	}
}

class PrototypeKeeper{
	private Map<String, Cloneable> map;
	public PrototypeKeeper() {
		this.map = new HashMap<String, Cloneable>();
	}
	public void addCloneable(String key, Cloneable prototype) {
		map.put(key,  prototype);
	}
	public Cloneable getClone(String key) {
		Cloneable prototype = map.get(key);
		return prototype.createClone();
	}
}

public class DP_Practice_Prototype {
	public static void main(String[] args) {
		
	}
}
