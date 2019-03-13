package basic;

import java.applet.Applet;
import java.applet.AudioClip;
import java.io.File;
import java.net.MalformedURLException;

public class GameMusic {
	//文件
	private AudioClip ac ;
	//循环播放音乐
	public void loop(){
		ac.loop();
	}
	//停止播放音乐
	public void stop(){
		ac.stop();
	}
	//播放一次音乐
	public void start(){
		ac.play();
	}
	//构造方法
	public GameMusic(){
		try {
			File f = new File("sounds/background.wav");
			ac = Applet.newAudioClip(f.toURI().toURL());
		} catch (MalformedURLException e) {
			// TODO 自动生成的 catch 块
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
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}
	//主方法
	public static void main(String[] args) {
		
	}
}
