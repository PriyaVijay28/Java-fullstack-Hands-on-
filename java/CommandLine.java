import java.util.Scanner;

public class CommandLine{
public static void main(String args[]){
System.out.println("WELCOME TO JAVA");
if(args.length==2){
int a = Integer.parseInt(args[0]);
int b = Integer.parseInt(args[1]);
System.out.println("Addition: "+(a+b));
}
else{
System.out.println("Pass 2 command line args");
}

}
}