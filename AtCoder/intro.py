# A welcome to AtCoder

# given 3 integers a,b,c and a string s
# output result of a+b+c and string s with half-width break

# Input for a
a = int(input())
# get two integers separated with half-width break
b, c = map(int, input().split())
# get a string
s = input()
# output
print(a+b+c) + '\n' + s
