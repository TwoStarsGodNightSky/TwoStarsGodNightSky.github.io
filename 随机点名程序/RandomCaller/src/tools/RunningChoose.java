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
	//�߳�
	public Thread t = null;
	//��������
	private boolean isRunning = true;
	public void run() {
		// TODO �Զ����ɵķ������
		try {
			if(isRunning)
			{
				String name = list.get(new Random(System.currentTimeMillis()).nextInt(list.size())).name;
				jtf.setText(name);
			}
			Thread.sleep(100);
			run();
		} catch (InterruptedException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	//ֹͣ
	public void stop(){
		isRunning = false;
	}
	public void play(){
		isRunning = true;
	}
	//�趨����
	public boolean isRunning() {
		return isRunning;
	}
	public void setRunning(boolean isRunning) {
		this.isRunning = isRunning;
	}
	//��ʼ��ʱ
	public void start(){
		if (t == null) 
		{
	         t = new Thread (this,"�߳̿�ʼ");
	         t.start ();
	    }
	}
	//���췽��
	public RunningChoose(Window w){
		jb = w.jb;
		jtf = w.jtf;	
	}
}