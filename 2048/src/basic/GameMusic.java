package basic;

import java.applet.Applet;
import java.applet.AudioClip;
import java.io.File;
import java.net.MalformedURLException;

public class GameMusic {
	//�ļ�
	private AudioClip ac ;
	//ѭ����������
	public void loop(){
		ac.loop();
	}
	//ֹͣ��������
	public void stop(){
		ac.stop();
	}
	//����һ������
	public void start(){
		ac.play();
	}
	//���췽��
	public GameMusic(){
		try {
			File f = new File("sounds/background.wav");
			ac = Applet.newAudioClip(f.toURI().toURL());
		} catch (MalformedURLException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	public GameMusic(GameMusic gm){
		ac = gm.ac;
	}
	public GameMusic(String s){
		try {
			File f = new File(s);
			ac = Applet.newAudioClip(f.toURI().toURL());
		} catch (MalformedURLException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	//������
	public static void main(String[] args) {
		
	}
}
