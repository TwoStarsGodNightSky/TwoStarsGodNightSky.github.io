package basic;

public class Message_ForgotPassword {
	protected int code;
	protected String username;
	protected int usercode;
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
	public int getUsercode() {
		return usercode;
	}
	public void setUsercode(int usercode) {
		this.usercode = usercode;
	}
	public Message_ForgotPassword(int code, String username, int usercode) {
		super();
		this.code = code;
		this.username = username;
		this.usercode = usercode;
	}
}
