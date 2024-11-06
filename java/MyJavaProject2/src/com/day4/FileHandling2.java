package com.day4;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileHandling2 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileReader fin = new FileReader("C://BIWW//JFS-Hands-On//java/demo.txt");
        FileWriter fout = new FileWriter("C://BIWW//JFS-Hands-On//java/demoNew1.txt");
		int ch;
        while((ch=fin.read())!=-1){
        	//System.out.print((char)ch);
        	fout.write((char)ch);
        }
        fin.close();
        fout.close();

	}

}
