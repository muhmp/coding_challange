# You are given a simple undirected graph with N vertices and M edges
# The vertices are numbered from 1 through N, and the edges are numbered from 1 through M.
# Edge i connects vertex Ui and Vi

# given K,S,T,and X. how many sequences A = (A0,A1,A2,...,An) are satisfying the following conditions?

# Ai is an integer between 1 and N (inclusive)
# A0 = S
# Ak = T
# There is an edge that directly connects vertex Ai and Ai+1
# integer X (X!=S, X!=T) appears even number of times sequence A

# Since the answer can be very large, find the answer modulo 998244353.

# sample input
# 4 4 4 1 3 2
# 1 2
# 2 3
# 3 4
# 1 4

# Output
# 4


# import input
import sys
Mod = 998244353
input = sys.stdin.readline
N, M, K, S, T, X = map(int, sys.stdin.readline().split())
S, T, X = S-1, T-1, X-1
G = []

# range M
for i in range(M):
    U, V = map(int, input().split())
    G.append((U-1, V-1))
# odd even
dynamic = [[[0]*(N) for _ in range(K+1)] for j in range(2)]
dynamic[0][0][S] = 1

# range k
for _ in range(K):
    for U, V in G:
        for j in range(2):
            dynamic[j][_+1][V] += dynamic[j ^ (V == X)][_][U]
            if dynamic[j][_+1][V] >= Mod:
                dynamic[j][_+1][V] -= Mod
            dynamic[j][_+1][U] += dynamic[j ^ (V == X)][_][V]
            if dynamic[j][_+1][U] >= Mod:
                dynamic[j][_+1][U] -= Mod
print(dynamic[0][K][T])

'''
mod=998244353
import sys
input=sys.stdin.readline
f=lambda:map(int,input().split())
n,m,k,s,t,x=f()
s-=1
t-=1
x-=1
G=[]
for _ in range(m):
    u,v=f()
    u-=1
    v-=1
    G.append((u,v))
dp=[[[0]*n for i in range(k+1)] for j in range(2)]
dp[0][0][s]=1
 
for i in range(k):
    for u,v in G:
        for j in range(2):
            dp[j][i+1][v]+=dp[j^(v==x)][i][u]
            if dp[j][i+1][v]>=mod:
                dp[j][i+1][v]-=mod
            dp[j][i+1][u]+=dp[j^(u==x)][i][v]
            if dp[j][i+1][u]>=mod:
                dp[j][i+1][u]-=mod
print(dp[0][k][t])
'''
