from collections import deque
def I(): return int(input())


def data(): return list(map(int, input().split()))


ans = 0

N, M = data()
g = [[] for _ in range(N)]
for _ in range(M):
    u, v = data()
    u, v = u-1, v-1
    g[u].append(v)
    g[v].append(u)


def bit(N, i): return (N >> i) & 1


INF = 10**10
#dynamic = [[INF]*(2**N+10) for _ in range [0]*N]
dynamic = [[INF]*(2**N+10) for _ in range(N)]
q = deque()
for i in range(N):
    dynamic[i][0] = 0
    dynamic[i][2**i] = 1
    q.append((i, 2**i))

while q:
    end, S = q.popleft()
    for nextVar in g[end]:
        StrS = S ^ (2**nextVar)
        if dynamic[nextVar][StrS] == INF:
            dynamic[nextVar][StrS] = dynamic[end][S]+1
            q.append((nextVar, StrS))


res = [0]*(2**N)
for S in range(1, 2**N):
    a = INF
    for i in range(N):
        a = min(dynamic[i][S], a)
    res[S] = a
    ans = ans + a
print(ans)
