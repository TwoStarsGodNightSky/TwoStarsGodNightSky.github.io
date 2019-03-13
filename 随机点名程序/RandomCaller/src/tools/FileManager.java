package tools;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import basic.Group;

public class FileManager {
	public static File f = new File("inform/information.txt");
	public static List <Group> ReturnFamily(){
		Scanner sc = null;
		List <Group> gl = new ArrayList <Group>();
		try {
			sc = new Scanner(f);
		} catch (FileNotFoundException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		while(sc.hasNext())
		{
			int code = sc.nextInt();
			if(code==0)
				break;
			String items = sc.nextLine();
			Group g = new Group();
			g.id = code;
			g.name = items;
			gl.add(g);
		}
		sc.close();
		return gl;
	}
}
