package expection;

public class DateException extends Exception{
	private static final long serialVersionUID = 1L;

	public DateException() {
		super("�����߼�����");
	}
	public void alarm(){
		System.out.println("үү�������2����31��֮�����");
	}
	public DateException(String message) {
		super(message);
	}
	
}
