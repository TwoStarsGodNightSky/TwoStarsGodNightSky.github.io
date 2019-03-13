package basic.people;

import java.util.Date;

import basic.type.date.DateTime;

public class Member {
	protected int code;
	protected String name;
	protected String password;
	protected String creatdate;
	protected int isFrozen;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCreatdate() {
		return creatdate;
	}
	public void setCreatdate(String creatdate) {
		this.creatdate = creatdate;
	}
	public void setCreatdate(Date creatdate) {
		this.creatdate = new DateTime(creatdate).toString();
	}
	public void setCreatdate(DateTime creatdate) {
		this.creatdate = creatdate.toString();
	}
	public int getIsFrozen() {
		return isFrozen;
	}
	public void setIsFrozen(int isFrozen) {
		this.isFrozen = isFrozen;
	}
	public Member(int code, String name, String password,String creatdate,int isFrozen) {
		super();
		this.code = code;
		this.password = password;
		this.name = name;
		this.creatdate = creatdate;
		this.isFrozen = isFrozen;
	}
	public Member(int code, String name, String password,DateTime creatdate,int isFrozen) {
		super();
		this.code = code;
		this.password = password;
		this.name = name;
		this.creatdate = creatdate.toString();
		this.isFrozen = isFrozen;
	}
	public Member(int code, String name,String password, Date creatdate,int isFrozen) {
		super();
		this.code = code;
		this.password = password;
		this.name = name;
		this.creatdate = new DateTime(creatdate).toString();
		this.isFrozen = isFrozen;
	}
	public void display(){
		System.out.println("---------------------------");
		System.out.println("code:\t"+code);
		System.out.println("name:\t"+name);
		System.out.println("password:\t"+password);
		System.out.println("creatdate:\t"+creatdate);
		System.out.println("isFrozen:\t"+isFrozen);
	}
}
