package basic;

import java.io.FileNotFoundException;

public class Main {
	public static void main(String[] args) {
		try {
			new WindowFor2048();
		} catch (FileNotFoundException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
}
