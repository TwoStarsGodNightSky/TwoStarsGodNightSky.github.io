#include<iostream>
using namespace std;
void Friend_Way()
{
	//ԭ�� p[i] + p[i+1] + p[i+2} + ... + p[j-1] + p[j] = S[j] - S[i-1]

	int n;
	//n���������С
	cin>>n;
	//�����ʼ����
	int * q = new int [n];
	//����ǰi��ͣ��� p[i] = q[0] + q[1] + q[2] + ... + q[i]
	int * p = new int [n+1];
	//Ԥ����
	cin>>q[0];
	p[0] = q[0];

	//��¼���ֵ
	int final_max = q[0];
	//��¼p[i]Ŀǰ�ﵽ����Сֵ
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
	cout<<"���ս����"<<final_max<<endl;
}
void Friend_Way_S()
{
	int n;
	cin>>n;
	int * q = new int [n];
	cin>>q[0];
	//����ֵ
	int rmax = q[0];
	//��ֵ
	int sum = q[0];
	//��С��ֵ
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
	cout<<"���ս����"<<rmax<<endl;
}
void Friend_Way_SS()
{
	int n;
	cin>>n;
	int p;
	cin>>p;
	//����ֵ
	int rmax = p;
	//��ֵ
	int sum = p;
	//��С��ֵ
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
	cout<<"���ս����"<<rmax<<endl;
}
void My_Way()
{
	//���峤��
	int n;
	//���볤��
	cin>>n;
	//���ֵ
	int rmax = -10000;
	//������ֵ
	int Tnum = -10000;
	//������ֵ
	int Fnum = 0;
	//��¼�Ƿ���ת��
	int sis = 0;
	//����ǵڼ��̶�
	int attitude = 0;
	//ѭ��
	for(int i = 0 ; i < n ; ++i)
	{
		int p;
		cin>>p;
		if(attitude==0)					//---------------------------------------[Ѱ�ҵ�һ������]
		{
			if(p<=0)
				;
			else
			{
				Tnum = p;
				attitude = 1;
			}
		}
		else if(attitude==1)			//---------------------------------------[��һ����Ϊ����]
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
		else							//---------------------------------------[��һ����Ϊ����]
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
