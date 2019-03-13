package expection;

public class WeekException extends Exception{
	private static final long serialVersionUID = 1L;

	public WeekException() {
		super("星期逻辑错误");
	}
	public void alarm(){
		System.out.println("爷爷！你见过星期八之类的吗？");
	}
	public WeekException(String message) {
		super(message);
	}
	
}
