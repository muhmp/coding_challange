# You are given a simple connected undirected graph with N vertices and M edges.  (A graph is said to be simple if it has no multi-edges and no self-loops.)
# for i = 1,2,...,M, the i-th edge connects vertex ui and vertex vi

# A sequence (A1,A2,…,A k) is said to be a path of length k if both of the following two conditions are satisfied:
# for all i = 1,2,...,k it holds 1 ≤ Ai ≤ N
# for all i = 1,2,...,k-1 it holds that Vertex Ai and Vertex Ai+1 are connected by an edge
# An empty sequence is regarded as a path of length 0.

# Let S = s1,s2..,sN be a string of length N consisting of 0 and 1. A path A = (A1,A2,...,Ak) is said a good path with respect to S if the following condition:
# for all i = 1,2,...,N it holds that:
#   if Si = 0 then A has even numbers of i's
#   if Si = 1 then A has odd numbers of i's

# There are 2^N possible S. Find the sum of length of the shortest path with respect to S^" over all possible S.

# example input:
'''
3 2
1 2
2 3
'''
# example output:
# 14

'''
# Code here
# import
from sys import stdin
from collections import deque
from tabnanny import check


# edges
N, M, *data = map(int, input().split())
rangeN = [[]for i in range(N+1)]
count = 0
response = 0

for i in range(M):  # sequence
    x, y = data[count + 2*i]-1, data[count + 2*i+1]-1
    rangeN[x].append(y)
    rangeN[y].append(x)

# condition
scan = [[False for i in range(1 << N)] for j in range(N)]
second = [False for i in range(1 << N)]
deque = deque()

# range n
for i in range(N):
    scan[i][0] = True
    deque.append((i, (1 << i), 1))
    scan[i][1 << i] = True

while deque:
    current, state, dist = deque.popleft()
    if not second[state]:
        response += dist
        second[state] = True
        # append
        deque.append((current, state, dist+1))
print("{}".format(response))

'''

'''

'''


n, m, *indata = map(int, stdin.read().split())
g = [[] for i in range(n+1)]
offset = 0
for i in range(m):
    s, t = indata[offset + 2*i]-1, indata[offset + 2*i+1]-1
    g[s].append(t)
    g[t].append(s)

check = [[False for i in range(1 << n)] for j in range(n)]
used = [False for i in range(1 << n)]
que = deque()
for i in range(n):
    check[i][0] = True
    que.append((i, (1 << i), 1))
    check[i][(1 << i)] = True

ans = 0
while que:
    now, state, dist = que.popleft()
    if not used[state]:
        ans += dist
        used[state] = True
    for i in g[now]:
        nextstate = state ^ (1 << i)
        if not check[i][nextstate]:
            check[i][nextstate] = True
            que.append((i, nextstate, dist+1))

print("{}".format(ans))
