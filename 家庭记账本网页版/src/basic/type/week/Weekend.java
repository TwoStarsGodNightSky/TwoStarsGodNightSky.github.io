package basic.type.week;

public class Weekend {
	protected Week week;
	public Week getWeek() {
		return week;
	}
	public int getWeekInt(){
		return change(week);
	}
	public static int change(Week w){
		switch(w)
		{
		case Monday:return 1;
		case Tuesday:return 2;
		case Wednesday:return 3;
		case Thursday:return 4;
		case Friday:return 5;
		case Saturday:return 6;
		case Sunday:return 7;
		default:return 0;
		}
	}
	public static Week change(int num){
		switch(num)
		{
		case 1:return Week.Monday;
		case 2:return Week.Tuesday;
		case 3:return Week.Wednesday;
		case 4:return Week.Thursday;
		case 5:return Week.Friday;
		case 6:return Week.Saturday;
		case 7:return Week.Sunday;
		//因为今天是周三，所以就把错误情况归为周三，就是这么随便
		default:return Week.Wednesday;
		}
	}
	public void setWeek(Week week) {
		this.week = week;
	}
	public void setWeek(int num){
		this.week = change(num);
	}
	
}
