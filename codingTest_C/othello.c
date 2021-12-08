#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<string>
#include<cstring>
#include<cmath>
#include<ctime>
#include<algorithm>
#include<utility>
#include<stack>
#include<queue>
#include<vector>
#include<set>
#include<map>
#define EPS 1e-9
#define PI acos(-1.0)
#define INF 0x3f3f3f3f
#define LL long long
const int MOD = 1E9+7;
const int N = 1000000+5;
const int dx[] = {0,0,-1,1,-1,-1,1,1};
const int dy[] = {-1,1,0,0,-1,1,-1,1};

using namespace std;
int main() {
    string str;
    cin>>str;
    int len=str.size();

    int same=0,diff=0;
    for(int i=1;i<len;i++){
        if(str[i]!=str[i-1])
            diff++;
        else
            same++;
    }

    if(same==len-1)
        printf("%d\n",0);
    else
        printf("%d\n",diff);

    return 0;
}