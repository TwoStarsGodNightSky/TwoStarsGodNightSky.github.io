package basic;

public class Message_AddMember {
	protected int code;
	protected String username;
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
	public Message_AddMember(int code, String username, String creatdate,
			String password) {
		super();
		this.code = code;
		this.username = username;
		this.creatdate = creatdate;
		this.password = password;
	}
	public Member printToMember(){
		return new Member(code,username,creatdate,password,0);
	}
	public Member printToMember(int x){
		return new Member(code,username,creatdate,password,x);
	}
}
