package com.day4;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileHandling {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileInputStream fin = new FileInputStream("C://BIWW//JFS-Hands-On//java/demo.txt");
        FileOutputStream fout = new FileOutputStream("C://BIWW//JFS-Hands-On//java/demoNew.txt");
		int ch;
        while((ch=fin.read())!=-1){
        	//System.out.print((char)ch);
        	fout.write((char)ch);
        }
        fin.close();
        fout.close();
	}

}
