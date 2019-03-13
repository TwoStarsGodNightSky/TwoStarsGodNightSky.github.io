//--//包
package basic;
//--//
//--//================================================<导入区>===============================================//
//--//--------------------------------------------[包]
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.Scanner;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;
//--//--------------------------------------------[自定义类型]
//--//方向
enum Direction{UP,DOWN,LEFT,RIGHT};
//--//款式/模式
enum MoveStyle{MoveAndAdd,OnlyMove,MoveAndAdd2,OnlyMove2};
//--//翻转形式
enum TurnModern{UpAndDown,LeftAndRight,ClockWise,AntiClockWise,RandomModern};
//--//主类
public class ActiveNum {
	//================================================<数据区>===============================================//
	//行数
	protected int row;
	//列数
	protected int column;
	//指针
	protected int [][]point;
	//================================================<方法区>===============================================//
	//--------------------------------------------[基础方法]
	//返回数组中是否还有数据 data
	public boolean ifhavedata(int data){
		boolean have = false;
		for(int i=0;i<row;i++)
			if(!have)
			{
				for(int j=0;j<column;j++)
					if(point[i][j]==data)
					{
						have = true;
						break;
					}
			}
			else
				break;
		return have;
	}
	public static boolean ifhavedata(ActiveNum x,int data){
		boolean have = false;
		for(int i=0;i<x.row;i++)
			if(!have)
			{
				for(int j=0;j<x.column;j++)
					if(x.point[i][j]==data)
					{
						have = true;
						break;
					}
			}
			else
				break;
		return have;
	}
	//判断数组是否相等
	public boolean EqualsTo(ActiveNum x){
		if(x.column!=this.column||x.row!=this.row)
			return false;
		for(int i=0;i<row;i++)
			for(int j=0;j<column;j++)
				if(x.point[i][j]!=this.point[i][j])
					return false;
		return true;
	}
	public static boolean Equals(ActiveNum a1,ActiveNum a2){
		if(a1.column!=a2.column||a1.row!=a2.row)
			return false;
		for(int i=0;i<a1.row;i++)
			for(int j=0;j<a2.column;j++)
				if(a1.point[i][j]!=a2.point[i][j])
					return false;
		return true;
	}
	//判断数组从一个方向来看是否移动
	public boolean ifhavemove(Direction dir,MoveStyle ms){
		ActiveNum a1= new ActiveNum(this); 
		a1.Remove(dir,ms);
		return !ActiveNum.Equals(a1,this);
	}
	//在数组中随机空添加数据 data
	public void RandomAddData(int data){
		if(!ifhavedata(0))
			return;
		Random ra = new Random();
		int x = ra.nextInt(row);
		int y = ra.nextInt(column);
		if(point[x][y]==0)
			point[x][y] = data;
		else
			RandomAddData(data);
	}
	//清空数组
	public void cleanNum(){
		for(int i=0;i<row;i++)
			for(int j=0;j<column;j++)
				point[i][j] = 0;
	}
	//返回非零数的个数
	public int Isnot0(){
		int sum = 0;
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
				if(point[i][j]!=0)
					sum = sum + 1;
		return sum;
	}
	//返回总和
	public int AddToSum(){
		int sum = 0;
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
				sum = sum + point[i][j];
		return sum;
	}
	//返回偶数和
	public int AddToSum2(){
		int sum = 0;
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
				if(point[i][j]%2==0)
					sum = sum + point[i][j];
		return sum;
	}
	//--------------------------------------------[初始化方法]
	public void init(){
		point = new int [0][];
		column = 0;
		row = 0;
		cleanNum();
	}
	public void init(int rc){
		point = new int [rc][];
		for(int i=0;i<rc;i++)
			point[i] = new int [rc];
		column = rc;
		row = rc;
		cleanNum();
	}
	public void init(int r,int c){
		point = new int [r][];
		for(int i=0;i<r;i++)
			point[i] = new int [c];
		column = c;
		row = r;
		cleanNum();
	}
	//--------------------------------------------[Get、Set方法]
	//基本设置
	public void setColumn(int c){
		column = c;
	}
	public void setRow(int r){
		row = r;
	}
	//值的大小
	public void Set(int x,int y,int p){
		if(x>=0&&x<row&&y<column&&y>=0)
			point[x][y] = p;
		else
		{
			System.out.println("x 或  y 的输入有误！");
			return;
		}
	}
	public void Sets(int x,int y,int p){
		Set(x-1,y-1,p);
	}
	public int Get(int x,int y){
		if(x>=0&&x<row&&y<column&&y>=0)
			return point[x][y];
		else
		{
			System.out.println("x 或   y 的输入有误！");
			return 0;
		}
	}
	public int Gets(int x,int y){
		return Get(x-1,y-1);
	}
	//--------------------------------------------[打印方法]
	//控制台打印
	public void Print(){
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
			{
				System.out.print(point[i][j]);
				if(j==column-1)
					System.out.print("\n");
				else
					System.out.print(" ");
			}
	}
	//打印成文件
	public void PrintIntoFile(String fileNames) throws IOException{
		PrintWriter pw = new PrintWriter(new FileWriter(fileNames));
		pw.printf("%d %d\n",row,column);
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
			{
				pw.print(point[i][j]);
				if(j!=column-1)
					pw.print(" ");
				else
					pw.print("\n");
			}
		pw.close();
	}
	//打印成表格(默认 0 是第一个)
	public void PrintIntoExcel(String fileNames,int sheetNum) throws IOException, RowsExceededException, WriteException{
		WritableWorkbook workbook = Workbook.createWorkbook(new File(fileNames));		
		WritableSheet sheet = workbook.createSheet("Test"+Integer.toString(sheetNum),sheetNum);
		for(int i=0;i<row;++i)
			for(int j=0;j<column;++j)
			{
				Label lab = new Label(j,i,Integer.toString(point[i][j])); 	
				sheet.addCell(lab);
			}
		workbook.write();
		workbook.close();
	}
	//--------------------------------------------[导入方法]
	//导入文件，构造数组
	public void BuildFromFile(String fileNames) throws FileNotFoundException{
		Scanner sc = new Scanner(new FileReader(fileNames));
		row = sc.nextInt();
		column = sc.nextInt();
		for(int i=0;i<row;i++)
			for(int j=0;j<column;j++)
				point[i][j] = sc.nextInt();
	}
	public void BuildFromFile(File fileNames) throws FileNotFoundException{
		Scanner sc = new Scanner(new FileReader(fileNames));
		row = sc.nextInt();
		column = sc.nextInt();
		for(int i=0;i<row;i++)
			for(int j=0;j<column;j++)
				point[i][j] = sc.nextInt();
	}
	//导入表格，构造数组
	public void BuildFromExcel(String fileNames,int sheetNum) throws BiffException, IOException{
		Workbook readwb = Workbook.getWorkbook(new FileInputStream(fileNames));
		Sheet readsheet = readwb.getSheet(sheetNum);
		column = readsheet.getColumns();   
	    row = readsheet.getRows();
	    init(row,column);
		for (int i = 0; i < row; i++)   
        {   
            for (int j = 0; j < column; j++)   
            {   
                Cell cell = readsheet.getCell(j, i);
                point[i][j] = Integer.parseInt(cell.getContents());
            }
        }
	}
	public void BuildFromExcel(File fileNames,int sheetNum) throws BiffException, IOException{
		Workbook readwb = Workbook.getWorkbook(new FileInputStream(fileNames));
		Sheet readsheet = readwb.getSheet(sheetNum);
		column = readsheet.getColumns();   
	    row = readsheet.getRows();
	    init(row,column);
		for (int i = 0; i < row; i++)   
        {   
            for (int j = 0; j < column; j++)   
            {   
                Cell cell = readsheet.getCell(j, i);
                point[i][j] = Integer.parseInt(cell.getContents());
            }
        }
	}
	//--------------------------------------------[移动方法]
	//反转数组
	public void TurnTheNum(TurnModern style){
		if(style==TurnModern.RandomModern)
		{
			Random ra = new Random();
			int temp = ra.nextInt(4);
			switch(temp)
			{
			case 0:style = TurnModern.AntiClockWise;break;
			case 1:style = TurnModern.ClockWise;break;
			case 2:style = TurnModern.LeftAndRight;break;
			case 3:style = TurnModern.UpAndDown;break;
			default:break;
			}
		}
		ActiveNum x = new ActiveNum(this);
		if(style==TurnModern.AntiClockWise)
		{
			init(column,row);
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					this.point[column-j-1][i] = x.point[i][j];
		}
		else if(style==TurnModern.ClockWise)
		{
			init(column,row);
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					this.point[i][j] = x.point[column-j-1][i];
		}
		else if(style==TurnModern.UpAndDown)
		{
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					this.point[i][j] = x.point[row-i-1][j];
		}
		else if(style==TurnModern.LeftAndRight)
		{
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					this.point[i][j] = x.point[i][column-j-1];
		}
	}
	//转置数组
	public void AntiNum(boolean IsMainLine){
		ActiveNum x = new ActiveNum(this);
		init(column,row);
		if(IsMainLine)
		{
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					this.point[i][j] = x.point[j][i];
		}
		else
		{
			for(int i=0;i<row;i++)
				for(int j=0;j<column;j++)
					point[i][j] = x.point[row-j-1][column-i-1];
		}
	}
	//向 Direction 的方向，以 MoveStyle 的模式来移动
	public void Remove(Direction dir,MoveStyle ms){
		if(ms==MoveStyle.MoveAndAdd)
		{
			Remove(dir,MoveStyle.OnlyMove);
			if(dir==Direction.DOWN)
			{
				for(int t=0;t<column;++t)
				{
					for(int i=row-2;i>=0;i--)
						if(point[i+1][t]==point[i][t])
						{
							point[i+1][t] = point[i+1][t] + point[i][t];
							point[i][t] = 0;
						}
				}
			}
			else if(dir==Direction.UP)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都上移
					for(int j=1;j<=row;++j)
						for(int i=1;i<row;++i)
							if(point[i-1][t]==point[i][t])
							{
								point[i-1][t] = point[i-1][t] + point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.LEFT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都左移
					for(int j=1;j<=column;++j)
						for(int i=1;i<column;++i)
							if(point[t][i-1]==point[t][i])
							{
								point[t][i-1] = point[t][i-1] + point[t][i];
								point[t][i] = 0;
							}
				}
			}
			else if(dir==Direction.RIGHT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都右移
					for(int j=1;j<=column;++j)
						for(int i=column-2;i>=0;--i)
							if(point[t][i+1]==point[t][i])
							{
								point[t][i+1] = point[t][i+1] + point[t][i];
								point[t][i] = 0;
							}
				}
			}
			Remove(dir,MoveStyle.OnlyMove);
		}
		else if(ms==MoveStyle.MoveAndAdd2)
		{
			Remove(dir,MoveStyle.OnlyMove2);
			if(dir==Direction.DOWN)
			{
				for(int t=0;t<column;++t)
				{
					for(int i=row-2;i>=0;i--)
						if(point[i+1][t]==point[i][t]&&point[i][t]%2==0)
						{
							point[i+1][t] = point[i+1][t] + point[i][t];
							point[i][t] = 0;
						}
				}
			}
			else if(dir==Direction.UP)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都上移
					for(int j=1;j<=row;++j)
						for(int i=1;i<row;++i)
							if(point[i-1][t]==point[i][t]&&point[i][t]%2==0)
							{
								point[i-1][t] = point[i-1][t] + point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.LEFT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都左移
					for(int j=1;j<=column;++j)
						for(int i=1;i<column;++i)
							if(point[t][i-1]==point[t][i]&&point[t][i]%2==0)
							{
								point[t][i-1] = point[t][i-1] + point[t][i];
								point[t][i] = 0;
							}
				}
			}
			else if(dir==Direction.RIGHT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都右移
					for(int j=1;j<=column;++j)
						for(int i=column-2;i>=0;--i)
							if(point[t][i+1]==point[t][i]&&point[t][i]%2==0)
							{
								point[t][i+1] = point[t][i+1] + point[t][i];
								point[t][i] = 0;
							}
				}
			}
			Remove(dir,MoveStyle.OnlyMove2);
		}
		else if(ms==MoveStyle.OnlyMove)
		{
			if(dir==Direction.DOWN)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都下移
					for(int j=1;j<=row;++j)
						for(int i=row-2;i>=0;i--)
							if(point[i+1][t]==0)
							{
								point[i+1][t] = point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.UP)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都上移
					for(int j=1;j<=row;++j)
						for(int i=1;i<row;++i)
							if(point[i-1][t]==0)
							{
								point[i-1][t] = point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.LEFT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都左移
					for(int j=1;j<=column;++j)
						for(int i=1;i<column;++i)
							if(point[t][i-1]==0)
							{
								point[t][i-1] = point[t][i];
								point[t][i] = 0;
							}
				}
			}
			else if(dir==Direction.RIGHT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都右移
					for(int j=1;j<=column;++j)
						for(int i=column-2;i>=0;--i)
							if(point[t][i+1]==0)
							{
								point[t][i+1] = point[t][i];
								point[t][i] = 0;
							}
				}
			}
		}
		else if(ms==MoveStyle.OnlyMove2)
		{
			if(dir==Direction.DOWN)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都下移
					for(int j=1;j<=row;++j)
						for(int i=row-2;i>=0;i--)
							if(point[i+1][t]==0&&point[i][t]%2==0)
							{
								point[i+1][t] = point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.UP)
			{
				for(int t=0;t<column;++t)
				{
					//每一列都上移
					for(int j=1;j<=row;++j)
						for(int i=1;i<row;++i)
							if(point[i-1][t]==0&&point[i][t]%2==0)
							{
								point[i-1][t] = point[i][t];
								point[i][t] = 0;
							}
				}
			}
			else if(dir==Direction.LEFT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都左移
					for(int j=1;j<=column;++j)
						for(int i=1;i<column;++i)
							if(point[t][i-1]==0&&point[t][i]%2==0)
							{
								point[t][i-1] = point[t][i];
								point[t][i] = 0;
							}
				}
			}
			else if(dir==Direction.RIGHT)
			{
				for(int t=0;t<row;++t)
				{
					//每一行都右移
					for(int j=1;j<=column;++j)
						for(int i=column-2;i>=0;--i)
							if(point[t][i+1]==0&&point[t][i]%2==0)
							{
								point[t][i+1] = point[t][i];
								point[t][i] = 0;
							}
				}
			}
		}
	}
	//--------------------------------------------[构造方法]
	public ActiveNum(){
		init();
	}
	public ActiveNum(int rc){
		init(rc);
	}
	public ActiveNum(int r,int c){
		init(r,c);
	}
	public ActiveNum(ActiveNum x){
		init(x.row,x.column);
		for(int i=0;i<row;i++)
			for(int j=0;j<column;j++)
				point[i][j] = x.point[i][j];
	}
	//--------------------------------------------[主方法]
	public static void main(String[] args) {
		ActiveNum t1 = new ActiveNum(4);
		for(int i=1;i<=4;i++)
			for(int j=1;j<=4;j++)
				t1.Sets(i,j,0);
		t1.Sets(2,2,2);
		t1.Sets(3,2,2);
		t1.Sets(2,4,2);
		t1.Sets(3,3,1);
		t1.Print();
		System.out.println("**************************");
		t1.TurnTheNum(TurnModern.UpAndDown);
		t1.Print();
	}
}
