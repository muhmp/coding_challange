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

# Under the Constraints of this problem, it can be proved that there is at least one good path with respect to S of length at most 4N. Print a good path with respect to S of length at most 4N.


N, M = map(int, input().split())
g = [[] for _ in range(N+1)]
for _ in range(M):
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)

Dynamic = [int(s) for s in '0' + input()]
ans = []


def add(a): ans.append(a); Dynamic[a] += 1


second = [False]*(N+1)
branch = [-1]*(N+1)
branch[1] = 0
stack = [1]

# dfs
while stack:
    u = stack.pop()
    if u > 0:  # child
        add(u)
        if second[u]:
            continue
        second[u] = True
        for v in g[u]:
            if branch[v] == -1:
                continue
            branch[v] = u
            stack += [u, ~v, v]
    else:
        u = ~u
        if Dynamic[u] % 2:
            add(branch[u])
            add(u)


if Dynamic[1] % 2:
    ans.pop()
print(len(ans))
print(*ans)
