package expection;

public class WeekException extends Exception{
	private static final long serialVersionUID = 1L;

	public WeekException() {
		super("�����߼�����");
	}
	public void alarm(){
		System.out.println("үү����������ڰ�֮�����");
	}
	public WeekException(String message) {
		super(message);
	}
	
}
