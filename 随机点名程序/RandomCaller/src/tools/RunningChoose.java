package tools;

import java.util.List;
import java.util.Random;

import javax.swing.JButton;
import javax.swing.JTextField;

import view.Window;

import basic.Group;

public class RunningChoose implements Runnable{
	public JTextField jtf = null;
	public JButton jb = null;
	public boolean istrue = false;
	public List <Group> list = FileManager.ReturnFamily();
	//线程
	public Thread t = null;
	//处于运行
	private boolean isRunning = true;
	public void run() {
		// TODO 自动生成的方法存根
		try {
			if(isRunning)
			{
				String name = list.get(new Random(System.currentTimeMillis()).nextInt(list.size())).name;
				jtf.setText(name);
			}
			Thread.sleep(100);
			run();
		} catch (InterruptedException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	//停止
	public void stop(){
		isRunning = false;
	}
	public void play(){
		isRunning = true;
	}
	//设定运行
	public boolean isRunning() {
		return isRunning;
	}
	public void setRunning(boolean isRunning) {
		this.isRunning = isRunning;
	}
	//开始计时
	public void start(){
		if (t == null) 
		{
	         t = new Thread (this,"线程开始");
	         t.start ();
	    }
	}
	//构造方法
	public RunningChoose(Window w){
		jb = w.jb;
		jtf = w.jtf;	
	}
}