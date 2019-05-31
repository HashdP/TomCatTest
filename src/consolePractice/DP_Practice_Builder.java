package consolePractice;

interface Builder{
	public void addSolute(double soluteAmount);
	public void addSolvent(double solventAmount);
	public void abandonSolution(double solutionAmount);
	public Object getResult();
}

class Director{
	private Builder builder;
	public Director(Builder builder) {
		this.builder = builder;
	}
	public void constract() {
		builder.addSolvent(100);
		builder.addSolute(40);
		builder.abandonSolution(70);
		builder.addSolvent(100);
		builder.addSolute(15);
	}
}

class SaltWaterBuilder implements Builder{
	private SaltWater saltWater;
	public SaltWaterBuilder() {
		this.saltWater = new SaltWater(0,0);
	}
	public void addSolute(double saltAmount) {
		saltWater.salt += saltAmount;
	}
	public void addSolvent(double waterAmount) {
		saltWater.water += waterAmount;
	}
	public void abandonSolution(double saltWaterAmount) {
		double saltDelta = saltWaterAmount * 
				(saltWater.salt / (saltWater.salt + saltWater.water));
		double waterDelta = saltWaterAmount * 
				(saltWater.water / (saltWater.salt + saltWater.water));
		saltWater.salt -= saltDelta;
		saltWater.water -= waterDelta;
	}
	public Object getResult() {
		return this.saltWater;
	}
}

class SaltWater{
	public double salt;
	public double water;
	public SaltWater(double water, double salt) {
		this.salt = salt;
		this.water = water;
	}
}

public class DP_Practice_Builder {
	public static void main(String[] args) {
		Builder builder = new SaltWaterBuilder();
		Director dir = new Director(builder);
		dir.constract();
		SaltWater saltWater = (SaltWater)builder.getResult();
		
		System.out.println(saltWater.salt / saltWater.water);
	}
}
