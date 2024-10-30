import java.util.Scanner;

public class Scan1{
public static void main(String args[]){
System.out.println("WELCOME TO JAVA");
int a=0;
int b=0;
System.out.println("Enter two numbers: ");
Scanner sc=new Scanner(System.in);
a=sc.nextInt();
b=sc.nextInt();

System.out.println("Addition: "+(a+b));
}
}