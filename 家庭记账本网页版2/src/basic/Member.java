package basic;

public class Member {
	protected int code;
	protected String username;
	protected int isfrozen;
	protected String creatdate;
	protected String password;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getIsfrozen() {
		return isfrozen;
	}
	public void setIsfrozen(int isfrozen) {
		this.isfrozen = isfrozen;
	}
	public String getCreatdate() {
		return creatdate;
	}
	public void setCreatdate(String creatdate) {
		this.creatdate = creatdate;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Member(int code, String username, int isfrozen, String creatdate,
			String password) {
		super();
		this.code = code;
		this.username = username;
		this.isfrozen = isfrozen;
		this.creatdate = creatdate;
		this.password = password;
	}
	public Member(int code, String username , String creatdate,
			String password,int isfrozen) {
		super();
		this.code = code;
		this.username = username;
		this.isfrozen = isfrozen;
		this.creatdate = creatdate;
		this.password = password;
	}
	public void display(){
		System.out.println("--------------------");
		System.out.println(" code		:"+code);
		System.out.println(" username	:"+username);
		System.out.println(" isfrozen	:"+isfrozen);
		System.out.println(" creatdate	:"+creatdate);
		System.out.println(" password	:"+password);
	}
}
