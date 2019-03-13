package expection;

public class DateException extends Exception{
	private static final long serialVersionUID = 1L;

	public DateException() {
		super("日期逻辑错误");
	}
	public void alarm(){
		System.out.println("爷爷！你见过2月有31天之类的吗？");
	}
	public DateException(String message) {
		super(message);
	}
	
}
