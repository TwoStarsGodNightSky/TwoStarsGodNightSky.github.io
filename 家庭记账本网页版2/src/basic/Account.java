package basic;

public class Account {
	protected int code;
	protected String items;
	protected String creatdate;
	protected double balance;
	protected int num;
	protected AccountKind kind;
	protected String customname;
	protected String shop;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getItems() {
		return items;
	}
	public void setItems(String items) {
		this.items = items;
	}
	public String getCreatdate() {
		return creatdate;
	}
	public void setCreatdate(String creatdate) {
		this.creatdate = creatdate;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public AccountKind getKind() {
		return kind;
	}
	public void setKind(AccountKind kind) {
		this.kind = kind;
	}
	public String getCustomname() {
		return customname;
	}
	public void setCustomname(String customname) {
		this.customname = customname;
	}
	public String getShop() {
		return shop;
	}
	public void setShop(String shop) {
		this.shop = shop;
	}
	
	public Account(int code, String items, String creatdate, double balance,
			int num, AccountKind kind, String customname, String shop) {
		super();
		this.code = code;
		this.items = items;
		this.creatdate = creatdate;
		this.balance = balance;
		this.num = num;
		this.kind = kind;
		this.customname = customname;
		this.shop = shop;
	}
	public void display(){
		System.out.println("--------------");
		System.out.println(" code		:"+code);
		System.out.println(" items		:"+items);
		System.out.println(" creatdate	:"+creatdate);
		System.out.println(" balance	:"+balance);
		System.out.println(" num		:"+num);
		System.out.println(" kind		:"+kind.getKindname());
		System.out.println(" customname	:"+customname);
		System.out.println(" shop		:"+shop);
	}
}
