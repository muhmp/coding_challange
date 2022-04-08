# from collections import Counter
import sys

sys.setrecursionlimit(10**6)

N, M = map(int, sys.stdin.readline().rstrip().split())

E = [[] for _ in range(N + 1)]
for i in range(M):
    u, v = map(int, sys.stdin.readline().rstrip().split())
    E[u].append(v)
    E[v].append(u)

S = sys.stdin.readline().rstrip()
S = [False] + [True if int(s) == 0 else False for s in S]
visited = [False] * (N + 1)  # visited
is_even = [True] * (N + 1)
stack = []


def dfs(u, r=0):

    stack.append(u)

    visited[u] = True
    is_even[u] = not is_even[u]

    for v in E[u]:
        if v == r:
            continue

        if visited[v]:
            continue

        dfs(v, u)
        stack.append(u)
        is_even[u] = not is_even[u]

    if S[u] != is_even[u]:
        if r == 0:
            stack.pop()
            return
        stack.append(r)
        is_even[r] = not is_even[r]
        stack.append(u)
        is_even[u] = not is_even[u]

    return


dfs(1)

print(len(stack))
print(*stack)
