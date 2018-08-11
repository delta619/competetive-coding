#include<bits/stdc++.h>

using namespace std;
char a[7000000], b[7000000];
long int l1, l2;

int main()
{
	cin.getline(a, 7000000);
	cin.getline(b, 7000000);

		l1 = strlen(a);
		l2 = strlen(b);
		if (l1 != l2)
		{
			cout << "NO";
		}
		else
		{
			
			////// finall
				sort(a, a+l1);	
				
				sort(b, b+l2);
				
			int flag = 1;

			for (long int i = 0; i < l1; i++)
			{
				if (a[i] != b[i])
				{
					flag = 0;
				}
			}
			flag==0 ? cout << "NO" : cout << "YES";

		}
	

//	system("pause");
	return 0;

}
	
	

