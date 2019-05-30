package consolePractice;

import java.util.Vector;

class Student{
	private String name;
	private int sex;
	
	public Student(String name, int sex) {
		this.name = name;
		this.sex = sex;
	}
	
	public String getName() {
		return name;
	}
	
	public int getSex() {
		return sex;
	}
}

interface Iterator{
	public boolean hasNext();
	public Object next();
}

interface Aggregate{
	public Iterator iterator();
}

class StudentList{
	protected Student[] students;
	private int last = 0;
	
	public StudentList() {}
	public StudentList(int studentCount) {
		this.students = new Student[studentCount];
	}
	
	public void add(Student student) {
		students[last++] = student;
	}
	
	public Student getStudentAt(int index) {
		return students[index];
	}
	
	public int getLastNum() {
		return last;
	}
}

class MyStudentList extends StudentList implements Aggregate{
	public MyStudentList() {
		super();
	}
	public MyStudentList(int studentCount) {
		super(studentCount);
	}
	public Iterator iterator() {
		return new MyStudentListIterator(this);
	}
}

class MyStudentListIterator implements Iterator{
	private MyStudentList myStudentList;
	private int index;
	public MyStudentListIterator(MyStudentList list) {
		this.myStudentList = list;
		this.index = 0;
	}
	public boolean hasNext() {
		if(myStudentList.getLastNum() > index) {
			return true;
		} else {
			return false;
		}
	}
	public Student next() {
		Student s = myStudentList.getStudentAt(index++);
		return s;
	}
}

abstract class Teacher{
	protected MyStudentList studentList;
	
	public abstract void createStudentList();
	public abstract void callStudents();
}

class MyTeacher extends Teacher{
	public void createStudentList() {
		studentList = new MyStudentList(5);
		studentList.add(new Student("赤井", 1));
		studentList.add(new Student("赤羽", 2));
		studentList.add(new Student("岡田", 2));
		studentList.add(new Student("西森", 1));
		studentList.add(new Student("中の森", 2));
	}
	
	public void callStudents() {
		Iterator itr = studentList.iterator();
		while(itr.hasNext()) {
			System.out.println(((Student)itr.next()).getName());
		}
	}
}

public class DP_Practice_Itarator {
	public static void main(String args[]) {
		Teacher you = new MyTeacher();
		you.createStudentList();
		you.callStudents();
	}
}
