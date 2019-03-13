#include<iostream>
using namespace std;
void Friend_Way()
{
	//原理 p[i] + p[i+1] + p[i+2} + ... + p[j-1] + p[j] = S[j] - S[i-1]

	int n;
	//n是总数组大小
	cin>>n;
	//储存初始数组
	int * q = new int [n];
	//储存前i项和，即 p[i] = q[0] + q[1] + q[2] + ... + q[i]
	int * p = new int [n+1];
	//预处理
	cin>>q[0];
	p[0] = q[0];

	//记录最大值
	int final_max = q[0];
	//记录p[i]目前达到的最小值
	int min_pos = 0;

	for(int i=1;i<n;++i)
	{
		cin>>q[i];
		p[i] = q[i] + p[i-1];
		if(p[min_pos]>=p[i-1])
		{
			min_pos = i-1;
		}
		if(p[i]-p[min_pos]>final_max)
			final_max = p[i] - p[min_pos];
	}
	cout<<endl;
	cout<<"最终结果："<<final_max<<endl;
}
void Friend_Way_S()
{
	int n;
	cin>>n;
	int * q = new int [n];
	cin>>q[0];
	//最终值
	int rmax = q[0];
	//和值
	int sum = q[0];
	//最小的值
	int min = q[0];

	for(int i=1;i<n;++i)
	{
		cin>>q[i];
		sum += q[i];
		if(sum-min>rmax)
			rmax = sum - min;
		if(min>sum)
			min = sum;
	}
	cout<<endl;
	cout<<"最终结果："<<rmax<<endl;
}
void Friend_Way_SS()
{
	int n;
	cin>>n;
	int p;
	cin>>p;
	//最终值
	int rmax = p;
	//和值
	int sum = p;
	//最小的值
	int min = p;

	for(int i=1;i<n;++i)
	{
		cin>>p;
		sum += p;
		if(sum-min>rmax)
			rmax = sum - min;
		if(min>sum)
			min = sum;
	}
	cout<<endl;
	cout<<"最终结果："<<rmax<<endl;
}
void My_Way()
{
	//定义长度
	int n;
	//输入长度
	cin>>n;
	//最大值
	int rmax = -10000;
	//正数总值
	int Tnum = -10000;
	//负数总值
	int Fnum = 0;
	//记录是否发生转变
	int sis = 0;
	//标记是第几程度
	int attitude = 0;
	//循环
	for(int i = 0 ; i < n ; ++i)
	{
		int p;
		cin>>p;
		if(attitude==0)					//---------------------------------------[寻找第一个正数]
		{
			if(p<=0)
				;
			else
			{
				Tnum = p;
				attitude = 1;
			}
		}
		else if(attitude==1)			//---------------------------------------[上一个数为正数]
		{
			if(p<0)
			{
				if(sis==0)
				{
					sis = 1;
					Fnum += p;
				}
				else
					Fnum = p;
				attitude = -1;
			}
			else
				Tnum += p;

			if(Tnum>rmax)
				rmax = Tnum;
		}
		else							//---------------------------------------[上一个数为负数]
		{
			if(p>0)
			{
				attitude = 1;
				if(Tnum + Fnum > 0)
					Tnum = (Tnum + Fnum) + p;
				else
					Tnum = p;
			}
			else
				Fnum += p;
		}
		/*
		cout<<"p="<<p<<endl;
		cout<<"rmax="<<rmax<<endl;
		cout<<"(p>rmax)="<<(p>rmax)<<endl;
		*/
		if(p>rmax)
			rmax = p;
		if(Tnum>rmax)
			rmax = Tnum;
	}
	cout<<rmax<<endl;
}
int main()
{
	
	return 0;
}
