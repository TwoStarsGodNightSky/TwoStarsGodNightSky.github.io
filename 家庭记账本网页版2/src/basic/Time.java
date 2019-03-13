package basic;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Time {
	public Date date;
	public Time(){
		date = new Date();
	}
	public Time(String x){
		try {
			date = new SimpleDateFormat("hh:mm:ss").parse(x);
		} catch (ParseException e) {
			System.out.println("爷爷！您的程序出现 ParseException 错误啦！开心不？");
		}
	}
	public Time(java.sql.Date x){
		date = x;
	}
	public Time(java.util.Date x){
		date = new java.sql.Date(x.getTime());
	}
	public void Print(){
		SimpleDateFormat f= new SimpleDateFormat("hh:mm:ss");
		Date t = new Date(date.getTime());
		System.out.println(f.format(t));
	}
	public String toString(){
		return new SimpleDateFormat("hh:mm:ss").format(date);
	}
	public static void main(String[] args) {
		Time da = new Time();
		da.Print();
	}
}
