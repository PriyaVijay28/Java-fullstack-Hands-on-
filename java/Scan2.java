import java.util.Scanner;

public class Scan2{
public static void main(String args[]){
System.out.println("WELCOME TO JAVA");
int id=0;
String ename="";
float esal;
System.out.println("Enter Emp values: ");
Scanner sc=new Scanner(System.in);
id=sc.nextInt();
ename=sc.next();
esal=sc.nextFloat();

System.out.println("Emp ID: "+id);
System.out.println("Emp Name: "+ename);
System.out.println("Emp Salary: "+esal);
}
}