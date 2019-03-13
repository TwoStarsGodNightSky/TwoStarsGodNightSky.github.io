package basic;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import tools.RunningChoose;
import view.Window;

public class Main {
	public static void main(String[] args) {
		final Window w = new Window();
		final RunningChoose rc = new RunningChoose(w);
		rc.start();
		w.istrue = true;
		w.jb.addActionListener
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						if(w.istrue)
						{
							rc.stop();
							w.istrue = false;
						}
						else
						{
							rc.play();
							w.istrue = true;
						}
					}
                }
        );
	}
}
