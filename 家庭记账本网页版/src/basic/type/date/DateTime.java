package basic.type.date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTime {
	public Date date;
	public DateTime(){
		date = new Date();
	}
	public DateTime(String x){
		try {
			date = new SimpleDateFormat("yyyy-MM-dd").parse(x);
		} catch (ParseException e) {
			System.out.println("爷爷！您的程序出现 ParseException 错误啦！开心不？");
		}
	}
	public DateTime(java.sql.Date x){
		date = x;
	}
	public DateTime(java.util.Date x){
		date = new java.sql.Date(x.getTime());
	}
	public void Print(){
		SimpleDateFormat f= new SimpleDateFormat("yyyy-MM-dd");
		Date t = new Date(date.getTime());
		System.out.println(f.format(t));
	}
	public String toString(){
		return new SimpleDateFormat("yyyy-MM-dd").format(date);
	}
	public static void main(String[] args) {
		DateTime da = new DateTime();
		da.Print();
	}
}
