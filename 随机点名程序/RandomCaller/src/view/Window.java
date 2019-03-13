package view;

import java.awt.Container;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

@SuppressWarnings("serial")
public class Window extends JFrame{
	public boolean istrue;
	public JTextField jtf = null;
	public JButton jb = null;
	public Window(){
		GridBagLayout gbl = new GridBagLayout();
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.fill=GridBagConstraints.HORIZONTAL;
		Container c = getContentPane();
		c.setLayout(gbl);
		
		jtf = new JTextField();
		
		jtf.setFont(new Font("Dialog",2,25));
		
		jtf.setEditable(false);
		gbc.gridx = 0;
		gbc.gridy = 0;
		gbc.gridwidth = 1;
		gbc.gridheight = 1;
		gbl.setConstraints(jtf,gbc);
		c.add(jtf);
		
		JLabel jl = new JLabel("  ");
		gbc.gridx = 0;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 1;
		gbl.setConstraints(jl,gbc);
		c.add(jl);
		
		jb = new JButton("开始&暂停");
		jb.setSize(30,20);
		gbc.gridx = 0;
		gbc.gridy = 2;
		gbc.gridwidth = 1;
		gbc.gridheight = 1;
		gbl.setConstraints(jb,gbc);
		//为转换按钮添加监听事件
		c.add(jb);
		
		super.setLocation(100,100);
		super.setVisible(true);
		super.setTitle("随机点名程序");
		super.setSize(320,250);
		super.setResizable(false);
		super.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		super.setIconImage(new ImageIcon("inform/game.gif").getImage());
	}
}
