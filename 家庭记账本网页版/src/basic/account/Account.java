package basic.account;

import java.util.Date;

import basic.type.date.DateTime;

public class Account {
	//���ױ��
	protected int code;
	//�������
	protected String items;
	//��������
	protected int num;
	//�۸�����ң�
	protected double balance;
	//����������
	protected String customname;
	//��������
	protected String date;
	//������Ϣ
	protected String inform;
	//����
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
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getInform() {
		return inform;
	}
	public void setInform(String inform) {
		this.inform = inform;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getCustomname() {
		return customname;
	}
	public void setCustomname(String customname) {
		this.customname = customname;
	}
	public Account(int code, String items, int num, double balance , String customname , String date, String inform) {
		super();
		this.code = code;
		this.items = items;
		this.num = num;
		this.balance = balance;
		this.customname = customname;
		this.date = date;
		this.inform = inform;
	}
	public Account(int code, String items, int num, double balance , String customname , Date date, String inform) {
		super();
		this.code = code;
		this.items = items;
		this.num = num;
		this.balance = balance;
		this.customname = customname;
		this.date = new DateTime(date).toString();
		this.inform = inform;
	}
	public Account(int code, String items, int num, double balance , String customname , DateTime date, String inform) {
		super();
		this.code = code;
		this.items = items;
		this.num = num;
		this.balance = balance;
		this.customname = customname;
		this.date = date.toString();
		this.inform = inform;
	}
	public Account(int code, String items, int num, double balance , String customname , String inform) {
		super();
		this.code = code;
		this.items = items;
		this.num = num;
		this.balance = balance;
		this.customname = customname;
		this.date = new DateTime().toString();
		this.inform = inform;
	}
	//չʾ
	public void display(){
		System.out.println("----------------------");
		System.out.println("code:\t"+code);
		System.out.println("items:\t"+items);
		System.out.println("num:\t"+num);
		System.out.println("balance:\t"+balance);
		System.out.println("customname:\t"+customname);
		System.out.println("date:\t"+date);
		System.out.println("inform:\t"+inform);
	}
}
