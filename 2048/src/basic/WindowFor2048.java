//--//��
package basic;
//--//
//--//================================================<������>===============================================//
//--//--------------------------------------------[��]
import java.awt.Color;
import java.awt.Container;
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.Random;
import java.util.Scanner;

import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.JToolTip;
import javax.swing.KeyStroke;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;
//--//--------------------------------------------[�Զ�������]
//--//����
public class WindowFor2048 {
	//================================================<������>===============================================//
	//**********
	//* �������� *
	//**********
	//--------------------------------------------[����]
	private String Today = "2018-10-08";
	//--------------------------------------------[����]
	private int steps = 0;
	//--------------------------------------------[��Ϸģʽ]
	private int modern = 1;
	//--------------------------------------------[��¼�ļ�����]
	protected boolean ifyes = false;
	protected boolean ifyes2 = false;
	//--------------------------------------------[��ҪС���ݡ�����������]
	protected int i;
	protected int j;
	protected ActiveNum ff = new ActiveNum(4);
	//--------------------------------------------[��ɫ]
	protected Color color0 = new Color(255,255,255);
	protected Color color2 = new Color(255,255,0);
	protected Color color4 = new Color(0,255,255);
	protected Color color8 = new Color(255,0,255);
	protected Color color16 = new Color(0,255,0);
	protected Color color32 = new Color(0,0,255);
	protected Color color64 = new Color(255,0,0);
	protected Color color128 = new Color(122,122,122);
	protected Color color256 = new Color(122,255,122);
	protected Color color512 = new Color(255,122,122);
	protected Color color1024 = new Color(122,122,255);
	protected Color color2048 = new Color(122,0,122);
	protected Color color4096 = new Color(122,122,0);
	protected Color color8192 = new Color(0,122,122);
	protected Color color16384 = new Color(0,255,122);
	protected Color color32768 = new Color(122,0,255);
	protected Color color65536 = new Color(200,50,100);
	protected Color color1 = new Color(255,122,0);
	protected Color color3 = new Color(0,100,200);
	protected Color color5 = Color.pink;
	//============================================
	//*********
	//*  ����    *
	//*********
	//--------------------------------------------[�߿򴰿�]
	protected JFrame win = new JFrame("2048");
	//--------------------------------------------[���洰��]
	protected JFrame savewin = new JFrame("���Ϊ");
	//--------------------------------------------[�򿪴���]
	protected JFrame openwin = new JFrame("��");
	//--------------------------------------------[�߷ְ񴰿�]
	protected JFrame scorewin = new JFrame("�߷ְ�");
	//--------------------------------------------[�������ô���]
	protected JFrame basicwin = new JFrame("��������     ");
	//--------------------------------------------[��������]
	protected JFrame versionwin = new JFrame("��Ϸ�汾");
	//--------------------------------------------[��������]
	protected JFrame helpwin = new JFrame("����");
	//--------------------------------------------[��������]
	protected GameMusic gm = new GameMusic("sounds/background.wav");
	//--------------------------------------------[����ͼƬ]
	protected ImageIcon backimage = new ImageIcon("image/back.jpg");
	//--------------------------------------------[����ͼ��]
	protected ImageIcon iconfor2048 = new ImageIcon("image/2048.png");
	//============================================
	//**********
	//* �˵����� *
	//**********
	//--------------------------------------------[�˵���]
	protected JMenuBar mu = new JMenuBar();
	//--------------------------------------------[�˵�&&�˵���]
	//�˵�
	protected JMenu jm1 = new JMenu("�ļ�");
	protected JMenu jm2 = new JMenu("����");
	protected JMenu jm3 = new JMenu("����");
	protected JMenu jmi7 = new JMenu("���Ի�����  ");
	protected JMenu jmi8 = new JMenu("��������     ");
	protected JMenu jmi14 = new JMenu ("��������   ");
	protected JMenu jmi28 = new JMenu ("����          ");
	protected JMenu jmi29 = new JMenu ("�ּ���ɫ   ");
	protected JMenu jmi50 = new JMenu ("��������");
	//�˵���
	protected JMenuItem jmi0 = new JMenuItem("��ʼ�¾� ");
	protected JMenuItem jmi1 = new JMenuItem("��        ");
	protected JMenuItem jmi2 = new JMenuItem("����        ");
	protected JMenuItem jmi3 = new JMenuItem("���Ϊ     ");
	protected JMenuItem jmi4 = new JMenuItem("�߷ְ�     ");
	protected JMenuItem jmi5 = new JMenuItem("�˳�        ");
	protected JMenuItem jmi6 = new JMenuItem("��������     ");
	protected JMenuItem jmi9 = new JMenuItem("��Ϸ�汾     ");
	protected JMenuItem jmi11 = new JMenuItem("����     ");
	protected JMenuItem jmi12 = new JMenuItem("����     ");
	protected JMenuItem jmi13 = new JMenuItem("Ӣ��     ");
	protected JMenuItem jmi15 = new JMenuItem("���       ");
	protected JMenuItem jmi16 = new JMenuItem("�羰       ");
	protected JMenuItem jmi17 = new JMenuItem("����       ");
	protected JMenuItem jmi18 = new JMenuItem("��ɫ��Լ");
	protected JMenuItem jmi19 = new JMenuItem("ǳ����Լ");
	protected JMenuItem jmi20 = new JMenuItem("��ɫ��");
	protected JMenuItem jmi21 = new JMenuItem("��ɫ����");
	protected JMenuItem jmi22 = new JMenuItem("�̺�����");
	protected JMenuItem jmi23 = new JMenuItem("��ɫ����");
	protected JMenuItem jmi24 = new JMenuItem("��ɫ�ſ�");
	protected JMenuItem jmi25 = new JMenuItem("��ɫ��Լ");
	protected JMenuItem jmi26 = new JMenuItem("��ɫ");
	protected JMenuItem jmi27 = new JMenuItem("����2");
	protected JMenuItem jmi30 = new JMenuItem("����       ");
	protected JMenuItem jmi31 = new JMenuItem("����       ");
	protected JMenuItem jmi32 = new JMenuItem("����       ");
	protected JMenuItem jmi33 = new JMenuItem("����       ");
	protected JMenuItem jmi34 = new JMenuItem("����       ");
	protected JMenuItem jmi35 = new JMenuItem("��������");
	protected JMenuItem jmi36 = new JMenuItem("���Ĳ���");
	protected JMenuItem jmi37 = new JMenuItem("����       ");
	protected JMenuItem jmi38 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi39 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi40 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi41 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi42 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi43 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi44 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi45 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi46 = new JMenuItem("�Ϻ�ɫ    ");
	protected JMenuItem jmi47 = new JMenuItem("��ɫ       ");
	protected JMenuItem jmi48 = new JMenuItem("����");
	protected JMenuItem jmi49 = new JMenuItem("�ر�");
	//============================================
	//*******
	//* ��ť *
	//*******
	//--------------------------------------------[���ܰ�ť]
	protected JButton bsa1 = new JButton("ȷ��");
	protected JButton bsa2 = new JButton("ȡ��");
	protected JButton bsa3 = new JButton("ȷ��");
	protected JButton bsa4 = new JButton("ȡ��");
	protected JButton bsa5 = new JButton("ȷ��");
	protected JButton bsa6 = new JButton("ȷ��");
	protected JButton bsa7 = new JButton("ȷ��");
	protected JButton bsa8 = new JButton("ȷ��");
	//--------------------------------------------[16����ʾ��ť]
	protected JButton b11 = new JButton(" ");
	protected JButton b12 = new JButton(" ");
	protected JButton b13 = new JButton(" ");
	protected JButton b14 = new JButton(" ");
	protected JButton b21 = new JButton(" ");
	protected JButton b22 = new JButton(" ");
	protected JButton b23 = new JButton(" ");
	protected JButton b24 = new JButton(" ");
	protected JButton b31 = new JButton(" ");
	protected JButton b32 = new JButton(" ");
	protected JButton b33 = new JButton(" ");
	protected JButton b34 = new JButton(" ");
	protected JButton b41 = new JButton(" ");
	protected JButton b42 = new JButton(" ");
	protected JButton b43 = new JButton(" ");
	protected JButton b44 = new JButton(" ");
	//--------------------------------------------[��ѡ��ť]
	protected JRadioButton rb1 = new JRadioButton("TXT");
	protected JRadioButton rb2 = new JRadioButton("XLS");
	protected JRadioButton rb3 = new JRadioButton("TXT");
	protected JRadioButton rb4 = new JRadioButton("XLS");
	protected JRadioButton rb5 = new JRadioButton("����ģʽ");
	protected JRadioButton rb6 = new JRadioButton("һ��ģʽ");
	protected JRadioButton rb7 = new JRadioButton("ս��ģʽ");
	//============================================
	//*********
	//* �ı��� *
	//*********
	//--------------------------------------------[��ǩ]
	protected JLabel jl1 = new JLabel("������");
	protected JLabel jl2 = new JLabel("  ");
	protected JLabel jl3 = new JLabel("  ");
	protected JLabel jl4 = new JLabel("  ");
	protected JLabel jl5 = new JLabel("  ");
	protected JLabel jl6 = new JLabel("  ");
	protected JLabel jl7 = new JLabel("�ļ����ͣ�     ");
	protected JLabel jl8 = new JLabel("  �ļ�����  ");
	protected JLabel jl9 = new JLabel("  �ļ�����  ");
	protected JLabel jl10 = new JLabel("  ���������   ");
	protected JLabel jl11 = new JLabel("  ��Ϸģʽ��   ");
	protected JLabel jlpicno = new JLabel("                                            ");
	protected JLabel jlpicno1 = new JLabel("                                            ");
	protected JLabel jlpicno2 = new JLabel("                                            ");
	protected JLabel jl12 = new JLabel("�汾��v 1.1.5  �������� ������ȫ��               ");
	protected JLabel jl13 = new JLabel("�������ڣ�2018.10.14     	           ");
	protected JLabel jl14 = new JLabel("���ߣ�Master               	       ");
	protected JLabel jl15 = new JLabel("����˵����                                         	   ");
	protected JLabel jl16 = new JLabel("	1��ϵͳ�Ż�����				   ");
	protected JLabel jl17 = new JLabel("	2��������������ù���	     	   ");
	protected JLabel jl18 = new JLabel("�������Ҽ����ƣ�");
	protected JLabel jl19 = new JLabel("��ͬ��ż������һ��");
	protected JLabel jl20 = new JLabel("����Ӻϲ���Ϊ���ǵĺͣ�");
	protected JLabel jl21 = new JLabel("�����ó������г���2048�ɣ�");
	//--------------------------------------------[�ı���]
	protected JTextField jt1 = new JTextField(5);
	protected JTextField jt2 = new JTextField(10);
	protected JTextField jt3 = new JTextField(15);
	protected JTextField jt4 = new JTextField(25);
	//--------------------------------------------[�б��]
	protected Object[] columnNames = {"����","�������","����","����"};
	protected Object[][] rowData = new Object[3][4];
	protected JTable jlist = new JTable(rowData,columnNames);
	protected JToolTip tt1 = new JToolTip();
	//================================================<������>===============================================//
	//*****************
	//* �������ø��·��� *
	//*****************
	//--------------------------------------------[��������]
	private void ResetDate(){
		int y,m,d;    
		Calendar cal=Calendar.getInstance();    
		y=cal.get(Calendar.YEAR);    
		m=cal.get(Calendar.MONTH);    
		d=cal.get(Calendar.DATE);
		String ms;
		m++;
		if(m<10)
			ms = (String)("0"+m);
		else
			ms = (String)(""+m);
		String ds;
		if(d<10)
			ds = (String)("0"+d);
		else
			ds = (String)(""+d);
		Today = (String)(y+"-"+ms+"-"+ds);
	}
	//--------------------------------------------[���á������������]
	protected void setName(){
		try {
			PrintWriter pw2 = new PrintWriter(new FileWriter("save/Name.txt"));
			pw2.print(jt4.getText());
			pw2.close();
		} catch (IOException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	protected void getName(){
		try {
			Scanner sc = new Scanner (new FileReader("save/Name.txt"));
			jt4.setText(sc.next());
		} catch (FileNotFoundException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	//--------------------------------------------[��������]
	public void ChangeLanguage(boolean language){
		if(language)
		{
			//����		
			savewin.setTitle("���Ϊ");
			openwin.setTitle("��");
			scorewin.setTitle("�߷ְ�");
			basicwin.setTitle("��������     ");
			versionwin.setTitle("��Ϸ�汾");
			helpwin.setTitle("����");
			//��ť
			bsa1.setText("ȷ��");
			bsa2.setText("ȡ��");
			bsa3.setText("ȷ��");
			bsa4.setText("ȡ��");
			bsa5.setText("ȷ��");
			bsa6.setText("ȷ��");
			bsa7.setText("ȷ��");
			bsa8.setText("ȷ��");
			//�˵�
			jm1.setText("�ļ�");
			jm2.setText("����");
			jm3.setText("����");
			//�˵���
			jmi0.setText("��ʼ�¾� ");
			jmi1.setText("��        ");
			jmi2.setText("����        ");
			jmi3.setText("���Ϊ     ");
			jmi4.setText("�߷ְ�     ");
			jmi5.setText("�˳�        ");
			jmi6.setText("��������     ");
			jmi7.setText("���Ի�����  ");
			jmi8.setText("��������     ");
			jmi9.setText("��Ϸ�汾     ");
			jmi11.setText("����     ");
			jmi12.setText("����     ");
			jmi13.setText("Ӣ��     ");
			jmi14.setText("��������   ");
			jmi15.setText("���       ");
			jmi16.setText("�羰       ");
			jmi17.setText("����       ");
			jmi18.setText("��ɫ��Լ");
			jmi19.setText("ǳ����Լ");
			jmi20.setText("��ɫ��");
			jmi21.setText("��ɫ����");
			jmi22.setText("�̺�����");
			jmi23.setText("��ɫ����");
			jmi24.setText("��ɫ�ſ�");
			jmi25.setText("��ɫ��Լ");
			jmi26.setText("��ɫ");
			jmi27.setText("����2");
			jmi28.setText("����          ");
			jmi29.setText("�ּ���ɫ   ");
			jmi37.setText("����       ");
			jmi30.setText("����       ");
			jmi31.setText("����       ");
			jmi32.setText("����       ");
			jmi33.setText("����       ");
			jmi34.setText("����       ");
			jmi35.setText("��������");
			jmi36.setText("���Ĳ���");
			jmi38.setText("��ɫ       ");
			jmi39.setText("��ɫ       ");
			jmi40.setText("��ɫ       ");
			jmi41.setText("��ɫ       ");
			jmi42.setText("��ɫ       ");
			jmi43.setText("��ɫ       ");
			jmi44.setText("��ɫ       ");
			jmi45.setText("��ɫ       ");
			jmi46.setText("�Ϻ�ɫ    ");
			jmi47.setText("��ɫ       ");
			jmi48.setText("����");
			jmi49.setText("�ر�");
			jmi50.setText("��������");
			//��ʶ��
			jl1.setText("������");
			jl7.setText("�ļ����ͣ�     ");
			jl8.setText("  �ļ�����  ");
			jl9.setText("  �ļ�����  ");
			jl10.setText("  ���������   ");
			jl11.setText("  ��Ϸģʽ��   ");
			jl12.setText("�汾��v 1.1.4                   	   ");
			jl13.setText("�������ڣ�2018.10.10             	   ");
			jl14.setText("���ߣ�Master                    	   ");
			jl15.setText("����˵����                                               	   ");
			jl16.setText("	1��ϵͳ�Ż�����					   ");
			jl17.setText("	2��������������ù���				   ");
			jl18.setText("�������Ҽ����ƣ�");
			jl19.setText("��ͬ��ż������һ��");
			jl20.setText("����Ӻϲ���Ϊ���ǵĺͣ�");
			jl21.setText("�����ó������г���2048�ɣ�");
			//�б�
			columnNames [0] = "����";
			columnNames [1] = "�������";
			columnNames [2] = "����";
			columnNames [3] = "����";
			//��ѡ��ť
			rb5.setText("����ģʽ");
			rb6.setText("һ��ģʽ");
			rb7.setText("ս��ģʽ");
		}
		else
		{
			//����
			savewin.setTitle("Save as...");
			openwin.setTitle("Open");
			scorewin.setTitle("High score");
			basicwin.setTitle("Basic Setthings");
			versionwin.setTitle("Version");
			helpwin.setTitle("Help");
			//��ť
			bsa1.setText("  OK  ");
			bsa2.setText("Cancel");
			bsa3.setText("  OK  ");
			bsa4.setText("Cancel");
			bsa5.setText("  OK  ");
			bsa6.setText("  OK  ");
			bsa7.setText("  OK  ");
			bsa8.setText("  OK  ");
			//�˵�
			jm1.setText("File");
			jm2.setText("Settings");
			jm3.setText("Others");
			//�˵���
			jmi0.setText("New Game    ");
			jmi1.setText("Open        ");
			jmi2.setText("Save        ");
			jmi3.setText("Save as     ");
			jmi4.setText("High score  ");
			jmi5.setText("Exit        ");
			jmi6.setText("Basic       ");
			jmi7.setText("Personality ");
			jmi8.setText("Languages   ");
			jmi9.setText("Version  ");
			jmi11.setText("Help      ");
			jmi12.setText("Chinese");
			jmi13.setText("English");
			jmi14.setText("Background ");
			jmi15.setText("Sky        ");
			jmi16.setText("Environment");
			jmi17.setText("Texture    ");
			jmi18.setText("Pink       ");
			jmi19.setText("Shallowblue");
			jmi20.setText("Brown Bear ");
			jmi21.setText("Kingdom    ");
			jmi22.setText("Sea And Sky");
			jmi23.setText("Green      ");
			jmi24.setText("Black      ");
			jmi25.setText("Yellow     ");
			jmi26.setText("Moon Color ");
			jmi27.setText("Texture 2  ");
			jmi28.setText("Character     ");
			jmi29.setText("Chara Color   ");
			jmi37.setText("Revoke   ");
			jmi30.setText("Dialog ");
			jmi31.setText("Official script");
			jmi32.setText("Song Dynasty   ");
			jmi33.setText("Blackbody      ");
			jmi34.setText("Regular script ");
			jmi35.setText("fzshuti        ");
			jmi36.setText("STCaiyun       ");
			jmi38.setText("Black       ");
			jmi39.setText("White       ");
			jmi40.setText("Red         ");
			jmi41.setText("Orange      ");
			jmi42.setText("Yellow      ");
			jmi43.setText("Green       ");
			jmi44.setText("Blue        ");
			jmi45.setText("Cyan        ");
			jmi46.setText("Magenta     ");
			jmi47.setText("Pink        ");
			jmi48.setText("Open");
			jmi49.setText("Close");
			jmi50.setText("BGM");
			//��ʶ��
			jl1.setText("Score��");
			jl7.setText("Files kind��     ");
			jl8.setText("File Name��     ");
			jl9.setText("File Name��     ");
			jl10.setText("Player Name:");
			jl11.setText("  Game Mode:");
			jl12.setText("Version ��v 1.1.4                                 ");
			jl13.setText("Renew Date��2018.10.10                            ");
			jl14.setText("Maker��Master                                     ");
			jl15.setText("Renew Information��                                                              ");
			jl16.setText("	1��ϵͳ�Ż�����					   ");
			jl17.setText("	2��������������ù���				   ");
			jl16.setText("	1��There is something renew to the system       ");
			jl17.setText("	2��Add ��BGM�� section in the ��Help�� Window       ");
			jl18.setText("Up,Down,Right,Left��");
			jl19.setText("When the same number come together,");
			jl20.setText("there will be one number which is their addtion,");
			jl21.setText("Would you want to make 2048?Let's have a try!");
			//�б�
			columnNames [0] = "Number";
			columnNames [1] = "Player Name";
			columnNames [2] = "Score";
			columnNames [3] = "Date";
			//��ѡ��ť
			rb5.setText("Basic  Modern");
			rb6.setText("Mental Modern");
			rb7.setText("Waring Modern");
		}
	}
	//--------------------------------------------[��������]
	public void SetFont(int w){
		String wtf = null;
		if(w==0)
			wtf = "Dialog";
		else if(w==1)
			wtf = "����";
		else if(w==2)
			wtf = "����";
		else if(w==3)
			wtf = "����";
		else if(w==4)
			wtf = "����";
		else if(w==5)
			wtf = "��������";
		else if(w==6)
			wtf = "���Ĳ���";
		
		rb1.setFont(new java.awt.Font(wtf,2,20));
		rb2.setFont(new java.awt.Font(wtf,2,20));
		rb3.setFont(new java.awt.Font(wtf,2,20));
		rb4.setFont(new java.awt.Font(wtf,2,20));
		rb5.setFont(new java.awt.Font(wtf,2,20));
		rb6.setFont(new java.awt.Font(wtf,2,20));
		rb7.setFont(new java.awt.Font(wtf,2,20));
		
		jm1.setFont(new java.awt.Font(wtf,2,20));
		jm2.setFont(new java.awt.Font(wtf,2,20));
		jm3.setFont(new java.awt.Font(wtf,2,20));
		
		jmi0.setFont(new java.awt.Font(wtf,2,20));
		jmi1.setFont(new java.awt.Font(wtf,2,20));
		jmi2.setFont(new java.awt.Font(wtf,2,20));
		jmi3.setFont(new java.awt.Font(wtf,2,20));
		jmi4.setFont(new java.awt.Font(wtf,2,20));
		jmi5.setFont(new java.awt.Font(wtf,2,20));
		jmi6.setFont(new java.awt.Font(wtf,2,20));
		jmi7.setFont(new java.awt.Font(wtf,2,20));
		jmi8.setFont(new java.awt.Font(wtf,2,20));
		jmi9.setFont(new java.awt.Font(wtf,2,20));
		jmi11.setFont(new java.awt.Font(wtf,2,20));
		jmi12.setFont(new java.awt.Font(wtf,2,20));
		jmi13.setFont(new java.awt.Font(wtf,2,20));
		jmi14.setFont(new java.awt.Font(wtf,2,20));
		jmi15.setFont(new java.awt.Font(wtf,2,20));
		jmi16.setFont(new java.awt.Font(wtf,2,20));
		jmi17.setFont(new java.awt.Font(wtf,2,20));
		jmi18.setFont(new java.awt.Font(wtf,2,20));
		jmi19.setFont(new java.awt.Font(wtf,2,20));
		jmi20.setFont(new java.awt.Font(wtf,2,20));
		jmi21.setFont(new java.awt.Font(wtf,2,20));
		jmi22.setFont(new java.awt.Font(wtf,2,20));
		jmi23.setFont(new java.awt.Font(wtf,2,20));
		jmi24.setFont(new java.awt.Font(wtf,2,20));
		jmi25.setFont(new java.awt.Font(wtf,2,20));
		jmi26.setFont(new java.awt.Font(wtf,2,20));
		jmi27.setFont(new java.awt.Font(wtf,2,20));
		jmi28.setFont(new java.awt.Font(wtf,2,20));
		jmi29.setFont(new java.awt.Font(wtf,2,20));
		jmi37.setFont(new java.awt.Font(wtf,2,20));
		jmi38.setFont(new java.awt.Font(wtf,2,20));
		jmi39.setFont(new java.awt.Font(wtf,2,20));
		jmi40.setFont(new java.awt.Font(wtf,2,20));
		jmi41.setFont(new java.awt.Font(wtf,2,20));
		jmi42.setFont(new java.awt.Font(wtf,2,20));
		jmi43.setFont(new java.awt.Font(wtf,2,20));
		jmi44.setFont(new java.awt.Font(wtf,2,20));
		jmi45.setFont(new java.awt.Font(wtf,2,20));
		jmi46.setFont(new java.awt.Font(wtf,2,20));
		jmi47.setFont(new java.awt.Font(wtf,2,20));
		jmi48.setFont(new java.awt.Font(wtf,2,20));
		jmi49.setFont(new java.awt.Font(wtf,2,20));
		jmi50.setFont(new java.awt.Font(wtf,2,20));
		
		jl7.setFont(new java.awt.Font(wtf,2,20));
		jl8.setFont(new java.awt.Font(wtf,2,20));
		jl9.setFont(new java.awt.Font(wtf,2,20));
		jl10.setFont(new java.awt.Font(wtf,2,20));
		jl11.setFont(new java.awt.Font(wtf,2,20));
		jl12.setFont(new java.awt.Font(wtf,2,20));
		jl13.setFont(new java.awt.Font(wtf,2,20));
		jl14.setFont(new java.awt.Font(wtf,2,20));
		jl15.setFont(new java.awt.Font(wtf,2,20));
		jl16.setFont(new java.awt.Font(wtf,2,20));
		jl17.setFont(new java.awt.Font(wtf,2,20));
		jl18.setFont(new java.awt.Font(wtf,2,20));
		jl19.setFont(new java.awt.Font(wtf,2,20));
		jl20.setFont(new java.awt.Font(wtf,2,20));
		jl21.setFont(new java.awt.Font(wtf,2,20));
		jlpicno.setFont(new java.awt.Font(wtf,2,20));
		jlpicno1.setFont(new java.awt.Font(wtf,2,20));
		jlpicno2.setFont(new java.awt.Font(wtf,2,20));
		
		jt1.setFont(new java.awt.Font(wtf,5,30));
		jt2.setFont(new java.awt.Font(wtf,2,20));
		jt3.setFont(new java.awt.Font(wtf,2,20));
		jt4.setFont(new java.awt.Font(wtf,5,20));
		
		bsa1.setFont(new java.awt.Font(wtf,2,20));
		bsa2.setFont(new java.awt.Font(wtf,2,20));
		bsa3.setFont(new java.awt.Font(wtf,2,20));
		bsa4.setFont(new java.awt.Font(wtf,2,20));
		bsa5.setFont(new java.awt.Font(wtf,2,20));
		bsa6.setFont(new java.awt.Font(wtf,2,20));
		bsa7.setFont(new java.awt.Font(wtf,2,20));
		bsa8.setFont(new java.awt.Font(wtf,2,20));
		
		jlist.setFont(new java.awt.Font(wtf,2,20));
		
		jl1.setFont(new java.awt.Font(wtf,1,30));
		jl2.setFont(new java.awt.Font(wtf,5,30));
		jl3.setFont(new java.awt.Font(wtf,5,30));
		jl4.setFont(new java.awt.Font(wtf,5,30));
		jl5.setFont(new java.awt.Font(wtf,5,30));
		b11.setFont(new java.awt.Font(wtf,5,30));
		b12.setFont(new java.awt.Font(wtf,5,30));
		b13.setFont(new java.awt.Font(wtf,5,30));
		b14.setFont(new java.awt.Font(wtf,5,30));
		b21.setFont(new java.awt.Font(wtf,5,30));
		b22.setFont(new java.awt.Font(wtf,5,30));
		b23.setFont(new java.awt.Font(wtf,5,30));
		b24.setFont(new java.awt.Font(wtf,5,30));
		b31.setFont(new java.awt.Font(wtf,5,30));
		b32.setFont(new java.awt.Font(wtf,5,30));
		b33.setFont(new java.awt.Font(wtf,5,30));
		b34.setFont(new java.awt.Font(wtf,5,30));
		b41.setFont(new java.awt.Font(wtf,5,30));
		b42.setFont(new java.awt.Font(wtf,5,30));
		b43.setFont(new java.awt.Font(wtf,5,30));
		b44.setFont(new java.awt.Font(wtf,5,30));
	}
	//--------------------------------------------[������ɫ]
	protected void SetColor(int zz){
		Color wtf = null;
		switch(zz)
		{
		case 0:wtf=Color.BLACK;break;
		case 1:wtf=Color.white;break;
		case 2:wtf=Color.red;break;
		case 3:wtf=Color.orange;break;
		case 4:wtf=Color.yellow;break;
		case 5:wtf=Color.green;break;
		case 6:wtf=Color.blue;break;
		case 7:wtf=Color.cyan;break;
		case 8:wtf=Color.magenta;break;
		case 9:wtf=Color.pink;break;
		default:break;
		}
		Color hls = null;
		if(zz==0||zz==2||zz==3||zz==6||zz==8)
			hls = color256;
		else
			hls = Color.BLACK;
		rb1.setForeground(wtf);
		rb2.setForeground(wtf);
		rb3.setForeground(wtf);
		rb4.setForeground(wtf);
		rb5.setForeground(wtf);
		rb6.setForeground(wtf);
		rb7.setForeground(wtf);
		
		savewin.setForeground(wtf);
		openwin.setForeground(wtf);
		scorewin.setForeground(wtf);
		basicwin.setForeground(wtf);
		
		mu.setBackground(hls);
		
		bsa1.setForeground(wtf);
		bsa2.setForeground(wtf);
		bsa3.setForeground(wtf);
		bsa4.setForeground(wtf);
		bsa5.setForeground(wtf);
		bsa6.setForeground(wtf);
		bsa7.setForeground(wtf);
		bsa8.setForeground(wtf);
		
		jm1.setForeground(wtf);
		jm2.setForeground(wtf);
		jm3.setForeground(wtf);
		
		jmi0.setForeground(wtf);
		jmi1.setForeground(wtf);
		jmi2.setForeground(wtf);
		jmi3.setForeground(wtf);
		jmi4.setForeground(wtf);
		jmi5.setForeground(wtf);
		jmi6.setForeground(wtf);
		jmi7.setForeground(wtf);
		jmi8.setForeground(wtf);
		jmi9.setForeground(wtf);
		jmi11.setForeground(wtf);
		jmi12.setForeground(wtf);
		jmi13.setForeground(wtf);
		jmi14.setForeground(wtf);
		jmi15.setForeground(wtf);
		jmi16.setForeground(wtf);
		jmi17.setForeground(wtf);
		jmi18.setForeground(wtf);
		jmi19.setForeground(wtf);
		jmi20.setForeground(wtf);
		jmi21.setForeground(wtf);
		jmi22.setForeground(wtf);
		jmi23.setForeground(wtf);
		jmi24.setForeground(wtf);
		jmi25.setForeground(wtf);
		jmi26.setForeground(wtf);
		jmi27.setForeground(wtf);
		jmi28.setForeground(wtf);
		jmi29.setForeground(wtf);
		jmi37.setForeground(wtf);
		jmi30.setForeground(wtf);
		jmi31.setForeground(wtf);
		jmi32.setForeground(wtf);
		jmi33.setForeground(wtf);
		jmi34.setForeground(wtf);
		jmi35.setForeground(wtf);
		jmi36.setForeground(wtf);
		jmi48.setForeground(wtf);
		jmi49.setForeground(wtf);
		jmi50.setForeground(wtf);
		
		jl1.setForeground(wtf);
		jl7.setForeground(wtf);
		jl8.setForeground(wtf);
		jl9.setForeground(wtf);
		jl10.setForeground(wtf);
		jl11.setForeground(wtf);
		jl12.setForeground(wtf);
		jl18.setForeground(wtf);
		
	}
	protected void BuildColor(JButton xyz){
		int answer = 0;
		if(xyz.getText().compareTo(" ")!=0)
			answer = Integer.parseInt(xyz.getText());
		else
			answer = 0;
		if(answer==0)
			xyz.setBackground(color0);
		else if(answer==2)
			xyz.setBackground(color2);
		else if(answer==4)
			xyz.setBackground(color4);
		else if(answer==8)
			xyz.setBackground(color8);
		else if(answer==16)
			xyz.setBackground(color16);
		else if(answer==32)
			xyz.setBackground(color32);
		else if(answer==64)
			xyz.setBackground(color64);
		else if(answer==128)
			xyz.setBackground(color128);
		else if(answer==256)
			xyz.setBackground(color256);
		else if(answer==512)
			xyz.setBackground(color512);
		else if(answer==1024)
			xyz.setBackground(color1024);
		else if(answer==2048)
			xyz.setBackground(color2048);
		else if(answer==4096)
			xyz.setBackground(color4096);
		else if(answer==8192)
			xyz.setBackground(color8192);
		else if(answer==16384)
			xyz.setBackground(color16384);
		else if(answer==32768)
			xyz.setBackground(color32768);
		else if(answer==65536)
			xyz.setBackground(color65536);
		else if(answer%2==1)
			xyz.setBackground(color1);
		else
			xyz.setBackground(color3);
	}
	protected void BuildColor(){
		SetActiveNum(ff);
		BuildColor(b11);
		BuildColor(b12);
		BuildColor(b13);
		BuildColor(b14);
		BuildColor(b21);
		BuildColor(b22);
		BuildColor(b23);
		BuildColor(b24);
		BuildColor(b31);
		BuildColor(b32);
		BuildColor(b33);
		BuildColor(b34);
		BuildColor(b41);
		BuildColor(b42);
		BuildColor(b43);
		BuildColor(b44);
	}
	//--------------------------------------------[���¸߷ְ��ļ�]
	public void RenewHighScore(){
		Workbook readwb = null;
		try {
			readwb = Workbook.getWorkbook(new FileInputStream("save/HighScore.xls"));
			Sheet readsheet = readwb.getSheet(0);
			for (int i = 1; i < 4; i++)   
	        {   
	            for (int j = 0; j < 4; j++)   
	            {   
	                Cell cell = readsheet.getCell(j, i);
	                rowData[i-1][j] = cell.getContents();
	            }
	        }
		} catch (BiffException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		} catch (IOException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
	public void RenewHighScores(){
		String [][]poi ={{String.valueOf(rowData[0][0]),String.valueOf(rowData[0][1]),String.valueOf(rowData[0][2]),String.valueOf(rowData[0][3])}
					  ,{String.valueOf(rowData[1][0]),String.valueOf(rowData[1][1]),String.valueOf(rowData[1][2]),String.valueOf(rowData[1][3])}
					  ,{String.valueOf(rowData[2][0]),String.valueOf(rowData[2][1]),String.valueOf(rowData[2][2]),String.valueOf(rowData[2][3])}
		};
		if(Integer.parseInt(jt1.getText())>Integer.parseInt(poi[0][2]))
		{
			rowData[2][1] = String.valueOf(rowData[1][1]);
			rowData[2][2] = String.valueOf(rowData[1][2]);
			rowData[2][3] = String.valueOf(rowData[1][3]);
			rowData[1][1] = String.valueOf(rowData[0][1]);
			rowData[1][2] = String.valueOf(rowData[0][2]);
			rowData[1][3] = String.valueOf(rowData[0][3]);
			rowData[0][1] = jt4.getText();
			rowData[0][2] = jt1.getText();
			rowData[0][3] = Today;
		}
		else
		{
			if(Integer.parseInt(jt1.getText())>Integer.parseInt(poi[1][2]))
			{
				rowData[2][1] = String.valueOf(rowData[1][1]);
				rowData[2][2] = String.valueOf(rowData[1][2]);
				rowData[2][3] = String.valueOf(rowData[1][3]);
				rowData[1][1] = jt4.getText();
				rowData[1][2] = jt1.getText();
				rowData[1][3] = Today;
			}
			else 
			{
				if(Integer.parseInt(jt1.getText())>Integer.parseInt(poi[2][2]))
				{
					rowData[2][1] = jt4.getText();
					rowData[2][2] = jt1.getText();
					rowData[2][3] = Today;
				}
			}
		}
		WritableWorkbook workbook = null;
		try {
			workbook = Workbook.createWorkbook(new File("save/HighScore.xls"));
			WritableSheet sheet = workbook.createSheet("Test"+Integer.toString(0),0);
			for(int t3=0;t3<4;++t3)
			{
				Label lab = new Label(t3,0,String.valueOf(columnNames[t3]));
				//System.out.println(String.valueOf(columnNames[t3]));
				try {
					sheet.addCell(lab);
				} catch (RowsExceededException e) {
					// TODO �Զ����ɵ� catch ��
					e.printStackTrace();
				} catch (WriteException e) {
					// TODO �Զ����ɵ� catch ��
					e.printStackTrace();
				}
			}
			for(int i=1;i<4;i++)
				for(int j=0;j<4;j++)
				{
					Label lab = new Label(j,i,String.valueOf(rowData[i-1][j]));
					//System.out.println(String.valueOf(rowData[i-1][j]));
					try {
						sheet.addCell(lab);
					} catch (RowsExceededException e) {
						// TODO �Զ����ɵ� catch ��
						e.printStackTrace();
					} catch (WriteException e) {
						// TODO �Զ����ɵ� catch ��
						e.printStackTrace();
					}
				}
			workbook.write();
			try {
				workbook.close();
			} catch (WriteException e) {
				// TODO �Զ����ɵ� catch ��
				e.printStackTrace();
			}
		} catch (IOException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}		
	}
	//============================================
	//*****************
	//* �����Լ���÷��� *
	//*****************
	//--------------------------------------------[������]
	public void MakeListen(){
		//�¾�
		jmi0.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						for(int t1=0;t1<4;++t1)
							for(int t2=0;t2<4;++t2)
								ff.Set(t1, t2, 0);
						if(modern==1)
							ff.RandomAddData(2);
						steps = 0;
						BuildColor();
						jt1.setText("0");
					}
                }
        );
		//��
		jmi1.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
                	public void actionPerformed(ActionEvent e) {
                		openwin.setVisible(true);
                	}
                }
		);
		//����
		jmi2.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						PrintWriter pw;
						try {
							steps = 0;
							pw = new PrintWriter(new FileWriter("save/ScoreOnThis.txt"));
							pw.print(jt1.getText());
							pw.close();
						} catch (IOException e2) {
							// TODO �Զ����ɵ� catch ��
							e2.printStackTrace();
						}
						try {
							ff.PrintIntoFile("save/NowLoad.txt");
						} catch (IOException e1) {
							// TODO �Զ����ɵ� catch ��
							e1.printStackTrace();
						}
					}
                }
        );
		//���Ϊ
		jmi3.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						savewin.setVisible(true);
					}
                }
        );
		//�߷ְ�
		jmi4.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
                	public void actionPerformed(ActionEvent e) {
                		scorewin.setVisible(true);
                		RenewHighScores();
                		RenewHighScore();
                	}
                }
		);
		//����
		jmi37.addActionListener(			
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                	if(steps==0)
	                		return;
	                	try {
							ff.BuildFromExcel("save/jouney/steps"+Integer.toString(steps)+".xls",0);
						} catch (BiffException e) {
							// TODO �Զ����ɵ� catch ��
							e.printStackTrace();
						} catch (IOException e) {
							// TODO �Զ����ɵ� catch ��
							e.printStackTrace();
						}
						if(Integer.parseInt(jt1.getText())>0)
							jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )-ff.AddToSum()/ff.Isnot0()-1));
						if(Integer.parseInt(jt1.getText())<0)
							jt1.setText("0");
						--steps;
	                	//��ȡ��һ������
	                	BuildColor();
	                }
	            }
	    );
		//��������
		jmi6.addActionListener(			
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                	basicwin.setVisible(true);
	                }
	            }
	    );
		//��Ϸ�汾
		jmi9.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    versionwin.setVisible(true);
	                }
	            }
	    );
		jmi11.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    helpwin.setVisible(true);
	                }
	            }
	    );
		//��ѡ
		rb1.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                    ifyes = true;
	                }
	            }
	    );
		rb2.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                    ifyes = false;
	                }
	            }
	    );
		rb3.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                    ifyes2 = true;
	                }
	            }
	    );
		rb4.addActionListener(//
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                    ifyes2 = false;
	                }
	            }
	    );
		rb5.addActionListener(
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                    modern = 1;
	                }
	            }
	    );
		rb6.addActionListener
		(
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                	modern = 2;
	                }
	            }
	    );
		rb7.addActionListener
		(
	            new ActionListener() {
	                public void actionPerformed(ActionEvent arg0) {
	                    // TODO �Զ����ɵķ������
	                	modern = 3;
	                }
	            }
	    );
		//��ť����
		bsa1.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						boolean givethis = false;
						String str = null,str2= null;
						if(ifyes)
							str = ".txt";
						else
							str = ".xls";
						str2 = jt2.getText();
						if(!str2.isEmpty()&&!str2.contains("/")&&!str2.contains(".")&&!str2.contains("*")&&!str2.contains(":")&&!str2.contains("?")&&!str2.contains("!")&&!str2.contains("\\"))
						{
							File file = new File("save/"+str2+str);
							if(!file.exists())
								try {
									file.createNewFile();
								} catch (IOException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
							if(ifyes)
							{
								try {
									ff.PrintIntoFile("save/"+str2+str);
								} catch (IOException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
							}
							else
							{
								try {
									ff.PrintIntoExcel("save/"+str2+str,0);
								} catch (RowsExceededException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								} catch (WriteException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								} catch (IOException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
							}
							File file2 = new File("save/"+str2+"OfScore.txt");
							if(!file2.exists())
								try {
									file.createNewFile();
								} catch (IOException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
							try {
								PrintWriter pws = new PrintWriter(file2);
								pws.print(jt1.getText());
								pws.close();
							} catch (FileNotFoundException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							}
						}
						else
							System.out.println("��ʽ����");
						jt2.setText(" ");
						savewin.setVisible(givethis);
					}
                }
        );
		bsa2.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						savewin.setVisible(false);
						rb1.setSelected(false);
						rb2.setSelected(false);
						jt2.setText(" ");
					}
                }
        );
		bsa3.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						String hou = ifyes2?".txt":".xls";
						File fi = new File("save/"+jt3.getText()+hou);
						File fis = new File("save/"+jt3.getText()+"OfScore.txt");
						if(fi.exists()&&fis.exists())
						{
							openwin.setVisible(false);
							if(ifyes2)
							{
								try {
									ff.BuildFromFile(fi);
								} catch (FileNotFoundException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
								
							}
							else
							{
								try {
									ff.BuildFromExcel(fi,0);
								} catch (BiffException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								} catch (IOException e1) {
									// TODO �Զ����ɵ� catch ��
									e1.printStackTrace();
								}
							}
							BuildColor();
							Scanner sc;
							try {
								sc = new Scanner(fis);
								jt1.setText(sc.next());
							} catch (FileNotFoundException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							}
						}
						else
						{
							openwin.setVisible(true);
							rb3.setSelected(false);
							rb4.setSelected(false);
						}
						jt3.setText(" ");
					}
                }
        );
		bsa4.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						openwin.setVisible(false);
						rb3.setSelected(false);
						rb4.setSelected(false);
						jt3.setText(" ");
					}
                }
        );
		bsa5.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						scorewin.setVisible(false);
					}
                }
        );
		bsa6.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						setName();
						basicwin.setVisible(false);
					}
                }
        );
		bsa7.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						setName();
						versionwin.setVisible(false);
					}
                }
        );
		bsa8.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						setName();
						helpwin.setVisible(false);
					}
                }
        );
		//�л�����
		jmi12.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						ChangeLanguage(true);
					}
                }
        );
		jmi13.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						ChangeLanguage(false);
					}
                }
        );
		//�˳�
		jmi5.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						System.exit(0);
					}
                }
        );
		//��������ͼ
		jmi15.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi16.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back2.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi17.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back3.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi18.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back4.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi19.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back5.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi20.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back6.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi21.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back7.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi22.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back8.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi23.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back9.jpeg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi24.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back10.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi25.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back11.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi26.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back12.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		jmi27.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						Image img = Toolkit.getDefaultToolkit ().getImage ("image/back13.jpg");
						backimage.setImage(img);
						win.repaint();
					}
                }
        );
		//
		jmi30.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(0);
					}
                }
        );
		jmi31.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(1);
					}
                }
        );
		jmi32.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(2);
					}
                }
        );
		jmi33.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(3);
					}
                }
        );
		jmi34.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(4);
					}
                }
        );
		jmi35.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(5);
					}
                }
        );
		jmi36.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetFont(6);
					}
                }
        );
		jmi48.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						gm.loop();
						jmi48.setEnabled(false);
						jmi49.setEnabled(true);
					}
                }
        );
		jmi49.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						gm.stop();
						jmi48.setEnabled(true);
						jmi49.setEnabled(false);
					}
                }
        );
		//�������Ҽ��Ĳ���
		win.addKeyListener(
				new KeyListener()
				{
					@Override
					public void keyTyped(KeyEvent e) {
						ff = GetActiveNum();
					}
					@Override
					public void keyPressed(KeyEvent e) {
						i = e.getKeyCode();
						ff = GetActiveNum();
						File ftest = new File("save/jouney/steps"+Integer.toString(steps)+".xls");
						if(!ftest.exists())
						{
							try {
								ftest.createNewFile();
							} catch (IOException e2) {
								// TODO �Զ����ɵ� catch ��
								e2.printStackTrace();
							}
						}
						if(modern==1)
						{
							try {
								ff.PrintIntoExcel("save/jouney/steps"+Integer.toString(steps)+".xls",0);
							} catch (RowsExceededException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (WriteException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (IOException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							}
							if(i==KeyEvent.VK_DOWN)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.DOWN,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.DOWN,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_UP)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.UP,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.UP,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_LEFT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.LEFT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.LEFT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_RIGHT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.RIGHT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.RIGHT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									ff.RandomAddData(2);
								}
							}
						}
						else if(modern==2)
						{
							Random ra = new Random();
							int picnick = ra.nextInt(5);
							try {
								ff.PrintIntoExcel("save/jouney/steps"+Integer.toString(steps)+".xls",0);
							} catch (RowsExceededException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (WriteException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (IOException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							}
							if(i==KeyEvent.VK_DOWN)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.DOWN,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.DOWN,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_UP)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.UP,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.UP,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_LEFT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.LEFT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.LEFT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_RIGHT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.RIGHT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.RIGHT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/ff.Isnot0()+1));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
						}
						else if(modern==3)
						{
							Random ra = new Random();
							int picnick = ra.nextInt(3);
							try {
								ff.PrintIntoExcel("save/jouney/steps"+Integer.toString(steps)+".xls",0);
							} catch (RowsExceededException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (WriteException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							} catch (IOException e1) {
								// TODO �Զ����ɵ� catch ��
								e1.printStackTrace();
							}
							if(i==KeyEvent.VK_DOWN)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.DOWN,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.DOWN,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/(ff.Isnot0()+1)));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_UP)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.UP,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.UP,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/(ff.Isnot0()+1)));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_LEFT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.LEFT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.LEFT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/(ff.Isnot0()+1)));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
							else if(i==KeyEvent.VK_RIGHT)
							{
								ff = GetActiveNum();
								if(ff.ifhavemove(Direction.RIGHT,MoveStyle.MoveAndAdd))
								{
									ff.Remove(Direction.RIGHT,MoveStyle.MoveAndAdd);
									jt1.setText(Integer.toString(Integer.parseInt( jt1.getText() )+ff.AddToSum()/(ff.Isnot0()+1)));
									if(picnick==0)
										ff.RandomAddData(4);
									else
										ff.RandomAddData(2);
								}
							}
						}
						if(modern==1||modern==2||modern==3)
							++steps;
						BuildColor();
					}
					@Override
					public void keyReleased(KeyEvent e) {
						j = e.getKeyCode();
						if (j == KeyEvent.VK_LEFT || j == KeyEvent.VK_RIGHT || j == KeyEvent.VK_UP || j == KeyEvent.VK_DOWN) {  
				            i = -1;
				        }
					}
				}
		);
		//������ɫ����
		jmi38.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(0);
					}
                }
        );
		jmi39.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(1);
					}
                }
        );
		jmi40.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(2);
					}
                }
        );
		jmi41.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(3);
					}
                }
        );
		jmi42.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(4);
					}
                }
        );
		jmi43.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(5);
					}
                }
        );
		jmi44.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(6);
					}
                }
        );
		jmi45.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(7);
					}
                }
        );
		jmi46.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(8);
					}
                }
        );
		jmi47.addActionListener//Ϊת����ť��Ӽ����¼�
		(
                new ActionListener()
                {
					public void actionPerformed(ActionEvent e) {
						SetColor(9);
					}
                }
        );
	}
	//--------------------------------------------[���캯��]
	public WindowFor2048() throws FileNotFoundException{
		mu.setBackground(color0);
		ResetDate();
		getName();
		SetFont(2);
		//
		bsa1.setToolTipText("");
		win.setLocation(300,200);
		win.setIconImage(iconfor2048.getImage());
		win.setVisible(true);
		win.setSize(400,700);
		win.setResizable(false);
		win.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		win.setJMenuBar(mu);
		//-----------------
		((JPanel)win.getContentPane()).setOpaque(false);
        JLabel background = new JLabel(backimage);
        win.getLayeredPane().add(background, new Integer(Integer.MIN_VALUE));
    	background.setBounds(0,0,backimage.getIconWidth(),backimage.getIconHeight());	
		//-----------------
		jmi38.setForeground(Color.BLACK);
		jmi39.setForeground(Color.white);
		jmi40.setForeground(Color.red);
		jmi41.setForeground(Color.orange);
		jmi42.setForeground(Color.yellow);
		jmi43.setForeground(Color.green);
		jmi44.setForeground(Color.blue);
		jmi45.setForeground(Color.cyan);
		jmi46.setForeground(Color.magenta);
		jmi47.setForeground(Color.pink);
		jmi29.add(jmi38);
		jmi29.add(jmi39);
		jmi29.add(jmi40);
		jmi29.add(jmi41);
		jmi29.add(jmi42);
		jmi29.add(jmi43);
		jmi29.add(jmi44);
		jmi29.add(jmi45);
		jmi29.add(jmi46);
		jmi29.add(jmi47);
		jmi30.setFont(new java.awt.Font("Dialog",2,20));
		jmi31.setFont(new java.awt.Font("����",2,20));
		jmi32.setFont(new java.awt.Font("����",2,20));
		jmi33.setFont(new java.awt.Font("����",2,20));
		jmi34.setFont(new java.awt.Font("����",2,20));
		jmi35.setFont(new java.awt.Font("��������",2,20));
		jmi36.setFont(new java.awt.Font("���Ĳ���",2,20));
		jmi50.add(jmi48);
		jmi50.add(jmi49);
		//-----------------
    	savewin.setLocation(350,250);
    	savewin.setVisible(false);
    	savewin.setSize(400,180);
		savewin.setResizable(false);
		Container c2 = savewin.getContentPane();
		c2.setLayout(new FlowLayout());
		c2.add(jl7);
		ButtonGroup gb2 = new ButtonGroup();
		gb2.add(rb1);
		gb2.add(rb2);
		c2.add(rb1);
		c2.add(rb2);
		c2.add(jl8);
		c2.add(jt2);
		c2.add(bsa1);
		c2.add(bsa2);
		//----------------------------------------[�򿪴���]
		openwin.setLocation(350,250);
		openwin.setVisible(false);
		openwin.setSize(450,150);
		openwin.setResizable(false);
		Container c3 = openwin.getContentPane();
		c3.setLayout(new FlowLayout());
		ButtonGroup gb3 = new ButtonGroup();
		gb3.add(rb3);
		gb3.add(rb4);
		c3.add(jl9);
		c3.add(jt3);
		c3.add(rb3);
		c3.add(rb4);
		c3.add(bsa3);
		c3.add(bsa4);
		//----------------------------------------[�߷ְ񴰿�]
		scorewin.setLocation(350,250);
		scorewin.setVisible(false);
		scorewin.setSize(520,145);
		scorewin.setResizable(false);
		Container c4 = scorewin.getContentPane();
		c4.setLayout(new BorderLayout());
		jlist.setEnabled(false);
		c4.add(jlist, BorderLayout.CENTER);
		c4.add(bsa5, BorderLayout.SOUTH);
		c4.add(jlist.getTableHeader(), BorderLayout.NORTH);
		//----------------------------------------[�������ô���]
		basicwin.setLocation(350,250);
		basicwin.setVisible(false);
		basicwin.setSize(450,300);
		basicwin.setResizable(false);
		Container c5 = basicwin.getContentPane();
		c5.setLayout(new FlowLayout());
		c5.add(jl10);
		c5.add(jt4);
		c5.add(jlpicno);
		c5.add(jl11);
		ButtonGroup gb4 = new ButtonGroup();
		gb4.add(rb5);
		gb4.add(rb6);
		gb4.add(rb7);
		c5.add(jlpicno1);
		c5.add(rb5);
		c5.add(rb6);
		c5.add(rb7);
		c5.add(jlpicno2);
		c5.add(bsa6);
		//
		jmi48.setEnabled(false);
		jmi49.setEnabled(true);
		//----------------------------------------[��Ϸ�汾����]
		versionwin.setLocation(350,250);
		versionwin.setVisible(false);
		versionwin.setSize(450,300);
		versionwin.setResizable(false);
		Container c6 = versionwin.getContentPane();
		GridBagLayout gbls = new GridBagLayout();
		c6.setLayout(gbls);
		GridBagConstraints gbcs = new GridBagConstraints();
		gbcs.fill=GridBagConstraints.HORIZONTAL;
		gbcs.gridx = 0;
		gbcs.gridy = 1;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl12,gbcs);
		gbcs.gridx = 0;
		gbcs.gridy = 2;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl13,gbcs);
		gbcs.gridx = 0;
		gbcs.gridy = 3;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl14,gbcs);
		gbcs.gridx = 0;
		gbcs.gridy = 4;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl15,gbcs);
		gbcs.gridx = 0;
		gbcs.gridy = 5;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl16,gbcs);
		gbcs.gridx = 0;
		gbcs.gridy = 6;
		gbcs.gridwidth = 9;
		gbcs.gridheight = 1;
		gbls.setConstraints(jl17,gbcs);
		gbcs.gridx = 3;
		gbcs.gridy = 8;
		gbcs.gridwidth = 6;
		gbcs.gridheight = 1;
		gbls.setConstraints(bsa7,gbcs);
		c6.add(jl12);
		c6.add(jl13);
		c6.add(jl14);
		c6.add(jl15);
		c6.add(jl16);
		c6.add(jl17);
		c6.add(bsa7);
		//----------------------------------------[��Ϸ��������]
		helpwin.setLocation(350,250);
		helpwin.setVisible(false);
		helpwin.setSize(550,250);
		helpwin.setResizable(false);
		Container c7 = helpwin.getContentPane();
		GridBagLayout gbl7 = new GridBagLayout();
		c7.setLayout(gbl7);
		GridBagConstraints gbc7 = new GridBagConstraints();
		gbc7.fill=GridBagConstraints.HORIZONTAL;
		c7.setLayout(gbl7);
		gbc7.gridx = 0;
		gbc7.gridy = 1;
		gbc7.gridwidth = 15;
		gbc7.gridheight = 1;
		gbl7.setConstraints(jl18,gbc7);
		gbc7.gridx = 0;
		gbc7.gridy = 2;
		gbc7.gridwidth = 15;
		gbc7.gridheight = 1;
		gbl7.setConstraints(jl19,gbc7);
		gbc7.gridx = 0;
		gbc7.gridy = 3;
		gbc7.gridwidth = 15;
		gbc7.gridheight = 1;
		gbl7.setConstraints(jl20,gbc7);
		gbc7.gridx = 0;
		gbc7.gridy = 4;
		gbc7.gridwidth = 15;
		gbc7.gridheight = 1;
		gbl7.setConstraints(jl21,gbc7);
		gbc7.gridx = 4;
		gbc7.gridy = 6;
		gbc7.gridwidth = 15;
		gbc7.gridheight = 1;
		gbl7.setConstraints(bsa8,gbc7);
		c7.add(jl18);
		c7.add(jl19);
		c7.add(jl20);
		c7.add(jl21);
		c7.add(bsa8);
		//----------------------------------------[�˵�����]
		mu.add(jm1);
		mu.add(jm2);
		mu.add(jm3);
		jm1.addSeparator();
		jm2.addSeparator();
		jm3.addSeparator();
		jm1.add(jmi0);
		jm1.add(jmi1);
		jm1.add(jmi2);
		jm1.add(jmi3);
		jm1.add(jmi37);
		jm1.add(jmi4);
		jm1.add(jmi5);
		jm2.add(jmi6);
		jm2.add(jmi7);
		jm2.add(jmi8);
		jm2.add(jmi50);
		jm3.add(jmi9);
		jm3.add(jmi11);
		jmi8.add(jmi12);
		jmi8.add(jmi13);
		jmi7.add(jmi14);
		jmi7.add(jmi28);
		jmi7.add(jmi29);
		jmi14.add(jmi15);
		jmi14.add(jmi16);
		jmi14.add(jmi17);
		jmi14.add(jmi18);
		jmi14.add(jmi19);
		jmi14.add(jmi20);
		jmi14.add(jmi21);
		jmi14.add(jmi22);
		jmi14.add(jmi23);
		jmi14.add(jmi24);
		jmi14.add(jmi25);
		jmi14.add(jmi26);
		jmi14.add(jmi27);
		//-----------------
		jmi28.add(jmi30);
		jmi28.add(jmi31);
		jmi28.add(jmi32);
		jmi28.add(jmi33);
		jmi28.add(jmi34);
		jmi28.add(jmi35);
		jmi28.add(jmi36);
		//-----------------
		jt1.setText("0");
		jt1.setEnabled(false);
		
		jmi0.setAccelerator(KeyStroke.getKeyStroke("ctrl R"));
		jmi1.setAccelerator(KeyStroke.getKeyStroke("ctrl O"));
		jmi2.setAccelerator(KeyStroke.getKeyStroke("ctrl M"));
		jmi3.setAccelerator(KeyStroke.getKeyStroke("ctrl H"));
		jmi4.setAccelerator(KeyStroke.getKeyStroke("ctrl O"));
		jmi5.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE,0));
		jmi6.setAccelerator(KeyStroke.getKeyStroke("ctrl B"));
		jmi37.setAccelerator(KeyStroke.getKeyStroke("ctrl Z"));
		jmi9.setAccelerator(KeyStroke.getKeyStroke("ctrl N"));
		jmi11.setAccelerator(KeyStroke.getKeyStroke("ctrl Q"));
		jmi12.setAccelerator(KeyStroke.getKeyStroke("ctrl C"));
		jmi13.setAccelerator(KeyStroke.getKeyStroke("ctrl E"));
		//-------------------------------------------------------------[��ʽ����]
		GridBagLayout gbl = new GridBagLayout();
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.fill=GridBagConstraints.HORIZONTAL;
		//gbc.fill=GridBagConstraints.VERTICAL;
		//gbc.fill=GridBagConstraints.BOTH;
		//-----------------
		b11.setEnabled(false);
		b12.setEnabled(false);
		b13.setEnabled(false);
		b14.setEnabled(false);
		b21.setEnabled(false);
		b22.setEnabled(false);
		b23.setEnabled(false);
		b24.setEnabled(false);
		b31.setEnabled(false);
		b32.setEnabled(false);
		b33.setEnabled(false);
		b34.setEnabled(false);
		b41.setEnabled(false);
		b42.setEnabled(false);
		b43.setEnabled(false);
		b44.setEnabled(false);
		//-----------------
		JLabel jls = new JLabel("  ");
		gbc.gridx = 0;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 1;
		gbl.setConstraints(jls,gbc);
		JLabel jls11 = new JLabel("  ");
		gbc.gridx = 3;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls11,gbc);
		JLabel jls12 = new JLabel("  ");
		gbc.gridx = 6;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls12,gbc);
		JLabel jls13 = new JLabel("  ");
		gbc.gridx = 9;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls13,gbc);
		JLabel jls14 = new JLabel("  ");
		gbc.gridx = 12;
		gbc.gridy = 1;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls14,gbc);
		JLabel jls21 = new JLabel("  ");
		gbc.gridx = 3;
		gbc.gridy = 4;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls21,gbc);
		JLabel jls22 = new JLabel("  ");
		gbc.gridx = 6;
		gbc.gridy = 4;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls22,gbc);
		JLabel jls23 = new JLabel("  ");
		gbc.gridx = 9;
		gbc.gridy = 4;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls23,gbc);
		JLabel jls24 = new JLabel("  ");
		gbc.gridx = 12;
		gbc.gridy = 4;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls24,gbc);
		JLabel jls31 = new JLabel("  ");
		gbc.gridx = 3;
		gbc.gridy = 7;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls31,gbc);
		JLabel jls32 = new JLabel("  ");
		gbc.gridx = 6;
		gbc.gridy = 7;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls32,gbc);
		JLabel jls33 = new JLabel("  ");
		gbc.gridx = 9;
		gbc.gridy = 7;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls33,gbc);
		JLabel jls34 = new JLabel("  ");
		gbc.gridx = 12;
		gbc.gridy = 7;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls34,gbc);
		JLabel jls41 = new JLabel("  ");
		gbc.gridx = 3;
		gbc.gridy = 10;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls41,gbc);
		JLabel jls42 = new JLabel("  ");
		gbc.gridx = 6;
		gbc.gridy = 10;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls42,gbc);
		JLabel jls43 = new JLabel("  ");
		gbc.gridx = 9;
		gbc.gridy = 10;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls43,gbc);
		JLabel jls44 = new JLabel("  ");
		gbc.gridx = 12;
		gbc.gridy = 10;
		gbc.gridwidth = 1;
		gbc.gridheight = 2;
		gbl.setConstraints(jls44,gbc);
		//-----------------
		gbc.gridx = 1;
		gbc.gridy = 1;
		gbc.gridwidth = 5;
		gbc.gridheight = 1;
		gbl.setConstraints(jl1,gbc);
		gbc.gridx = 7;
		gbc.gridy = 1;
		gbc.gridwidth = 5;
		gbc.gridheight = 1;
		gbl.setConstraints(jt1,gbc);
		gbc.gridx = 0;
		gbc.gridy = 2;
		gbc.gridwidth = 13;
		gbc.gridheight = 1;
		gbl.setConstraints(jl2,gbc);
		//
		gbc.gridx = 1;
		gbc.gridy = 3;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b11,gbc);
		gbc.gridx = 4;
		gbc.gridy = 3;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b12,gbc);
		gbc.gridx = 7;
		gbc.gridy = 3;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b13,gbc);
		gbc.gridx = 10;
		gbc.gridy = 3;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b14,gbc);
		gbc.gridx = 0;
		gbc.gridy = 5;
		gbc.gridwidth = 13;
		gbc.gridheight = 1;
		gbl.setConstraints(jl3,gbc);
		//
		gbc.gridx = 1;
		gbc.gridy = 6;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b21,gbc);
		gbc.gridx = 4;
		gbc.gridy = 6;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b22,gbc);
		gbc.gridx = 7;
		gbc.gridy = 6;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b23,gbc);
		gbc.gridx = 10;
		gbc.gridy = 6;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b24,gbc);
		gbc.gridx = 0;
		gbc.gridy = 8;
		gbc.gridwidth = 13;
		gbc.gridheight = 1;
		gbl.setConstraints(jl4,gbc);
		//
		gbc.gridx = 1;
		gbc.gridy = 9;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b31,gbc);
		gbc.gridx = 4;
		gbc.gridy = 9;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b32,gbc);
		gbc.gridx = 7;
		gbc.gridy = 9;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b33,gbc);
		gbc.gridx = 10;
		gbc.gridy = 9;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b34,gbc);
		gbc.gridx = 0;
		gbc.gridy = 11;
		gbc.gridwidth = 13;
		gbc.gridheight = 1;
		gbl.setConstraints(jl5,gbc);
		gbc.gridx = 1;
		gbc.gridy = 12;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b41,gbc);
		gbc.gridx = 4;
		gbc.gridy = 12;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b42,gbc);
		gbc.gridx = 7;
		gbc.gridy = 12;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b43,gbc);
		gbc.gridx = 10;
		gbc.gridy = 12;
		gbc.gridwidth = 2;
		gbc.gridheight = 2;
		gbl.setConstraints(b44,gbc);
		//-------------------------------------------------------------------
		jls.setFont(new java.awt.Font("Dialog",5,30));
		jls11.setFont(new java.awt.Font("Dialog",5,30));
		jls12.setFont(new java.awt.Font("Dialog",5,30));
		jls13.setFont(new java.awt.Font("Dialog",5,30));
		jls14.setFont(new java.awt.Font("Dialog",5,30));
		jls21.setFont(new java.awt.Font("Dialog",5,30));
		jls22.setFont(new java.awt.Font("Dialog",5,30));
		jls23.setFont(new java.awt.Font("Dialog",5,30));
		jls24.setFont(new java.awt.Font("Dialog",5,30));
		jls31.setFont(new java.awt.Font("Dialog",5,30));
		jls32.setFont(new java.awt.Font("Dialog",5,30));
		jls33.setFont(new java.awt.Font("Dialog",5,30));
		jls34.setFont(new java.awt.Font("Dialog",5,30));
		jls41.setFont(new java.awt.Font("Dialog",5,30));
		jls42.setFont(new java.awt.Font("Dialog",5,30));
		jls43.setFont(new java.awt.Font("Dialog",5,30));
		jls44.setFont(new java.awt.Font("Dialog",5,30));
		//-------------------------------------------------------------------
		Container c = win.getContentPane();
		c.setLayout(gbl);
		c.add(jl1);
		c.add(jt1);
		c.add(jl2);
		c.add(jl3);
		c.add(jl4);
		c.add(jl5);
		c.add(b11);
		c.add(b12);
		c.add(b13);
		c.add(b14);
		c.add(b21);
		c.add(b22);
		c.add(b23);
		c.add(b24);
		c.add(b31);
		c.add(b32);
		c.add(b33);
		c.add(b34);
		c.add(b41);
		c.add(b42);
		c.add(b43);
		c.add(b44);
		//--------------------------------
		c.add(jls11);
		c.add(jls12);
		c.add(jls13);
		c.add(jls14);
		c.add(jls21);
		c.add(jls22);
		c.add(jls23);
		c.add(jls24);
		c.add(jls31);
		c.add(jls32);
		c.add(jls33);
		c.add(jls34);
		c.add(jls41);
		c.add(jls42);
		c.add(jls43);
		c.add(jls44);
		c.add(jls);
		RenewHighScore();
		c2.setBackground(color5);
		c3.setBackground(color5);
		c4.setBackground(color5);
		c5.setBackground(color5);
		c6.setBackground(color5);
		c7.setBackground(color5);
		//-----------------------------------
		try {
			//��ȡ����ֵ
			Scanner sc = new Scanner(new File("save/ScoreOnThis.txt"));
			jt1.setText(sc.next());
		} catch (FileNotFoundException e1) {
			// TODO �Զ����ɵ� catch ��
			e1.printStackTrace();
		}
		ff.BuildFromFile("save/NowLoad.txt");
		SetActiveNum(ff);
		rb2.setSelected(false);
		BuildColor();
		MakeListen();
		gm.loop();
	}
	//--------------------------------------------[��ú���]
	public JFrame Getwin(){
		return win;
	}
	public void SetActiveNum(ActiveNum t){
		String s;
		s = Integer.toString(t.Gets(1,1));
		if(s.compareTo("0")==0)
			s = " ";
		b11.setText(s);
		s = Integer.toString(t.Gets(1,2));
		if(s.compareTo("0")==0)
			s = " ";
		b12.setText(s);
		s = Integer.toString(t.Gets(1,3));
		if(s.compareTo("0")==0)
			s = " ";
		b13.setText(s);
		s = Integer.toString(t.Gets(1,4));
		if(s.compareTo("0")==0)
			s = " ";
		b14.setText(s);
		s = Integer.toString(t.Gets(2,1));
		if(s.compareTo("0")==0)
			s = " ";
		b21.setText(s);
		s = Integer.toString(t.Gets(2,2));
		if(s.compareTo("0")==0)
			s = " ";
		b22.setText(s);
		s = Integer.toString(t.Gets(2,3));
		if(s.compareTo("0")==0)
			s = " ";
		b23.setText(s);
		s = Integer.toString(t.Gets(2,4));
		if(s.compareTo("0")==0)
			s = " ";
		b24.setText(s);
		s = Integer.toString(t.Gets(3,1));
		if(s.compareTo("0")==0)
			s = " ";
		b31.setText(s);
		s = Integer.toString(t.Gets(3,2));
		if(s.compareTo("0")==0)
			s = " ";
		b32.setText(s);
		s = Integer.toString(t.Gets(3,3));
		if(s.compareTo("0")==0)
			s = " ";
		b33.setText(s);
		s = Integer.toString(t.Gets(3,4));
		if(s.compareTo("0")==0)
			s = " ";
		b34.setText(s);
		s = Integer.toString(t.Gets(4,1));
		if(s.compareTo("0")==0)
			s = " ";
		b41.setText(s);
		s = Integer.toString(t.Gets(4,2));
		if(s.compareTo("0")==0)
			s = " ";
		b42.setText(s);
		s = Integer.toString(t.Gets(4,3));
		if(s.compareTo("0")==0)
			s = " ";
		b43.setText(s);
		s = Integer.toString(t.Gets(4,4));
		if(s.compareTo("0")==0)
			s = " ";
		b44.setText(s);
	}
	private ActiveNum GetActiveNum(){
		ActiveNum t = new ActiveNum(4);
		String s = b11.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(1,1,Integer.parseInt(s));
		s = b12.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(1,2,Integer.parseInt(s));
		s = b13.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(1,3,Integer.parseInt(s));
		s = b14.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(1,4,Integer.parseInt(s));
		
		s = b21.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(2,1,Integer.parseInt(s));
		s = b22.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(2,2,Integer.parseInt(s));
		s = b23.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(2,3,Integer.parseInt(s));
		s = b24.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(2,4,Integer.parseInt(s));
		
		s = b31.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(3,1,Integer.parseInt(s));
		s = b32.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(3,2,Integer.parseInt(s));
		s = b33.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(3,3,Integer.parseInt(s));
		s = b34.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		
		t.Sets(3,4,Integer.parseInt(s));
		s = b41.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(4,1,Integer.parseInt(s));
		s = b42.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(4,2,Integer.parseInt(s));
		s = b43.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(4,3,Integer.parseInt(s));
		s = b44.getText();
		if(s.compareTo(" ")==0)
			s = "0";
		t.Sets(4,4,Integer.parseInt(s));
		return t;
	}
	//--------------------------------------------[������]
	public static void main(String[] args) {
	}
}
