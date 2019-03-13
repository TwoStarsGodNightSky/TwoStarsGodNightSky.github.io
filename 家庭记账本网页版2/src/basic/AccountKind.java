package basic;

public class AccountKind {
	protected int code;
	protected String kindname;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getKindname() {
		return kindname;
	}
	public void setKindname(String kindname) {
		this.kindname = kindname;
	}
	public AccountKind(int code, String kindname) {
		super();
		this.code = code;
		this.kindname = kindname;
	}
	public void display(){
		System.out.println("--------------------");
		System.out.println(" code		:"+code);
		System.out.println(" kindname	:"+kindname);
	}
}
