# There are three Takahashis numbered 1, 2 and 3, and three hats colored red, green, and blue. Each Takahashi is wearing one hat.
# The color of the hat that Takahashi i is currently wearing is represented by a character Si.
# Here, R is corresponding to red, G is corresponding to green, and B is corresponding to blue.
# they will do the following operation exactly 10^18 times

# Choose two out of the three Takahashis. The two exchange the hats they are wearing.
# Is it possible to make Takahashi i wearing the hat of color corresponding to character Ti after the 10^18th operation?

# S1 S2 S3 are permutations of R G B
# T1 T2 T3 are permutations of R G B

# sample input
# R G B
# R G B

# output
# Yes

# random input
from random import sample
import sys


# code start here
# input
S = input().split()
T = input().split()
# repetition of 10^18 times

for i in range(100000):
    # permutation
    i, j = sample([0, 1, 2], 2)
    S[i], S[j] = S[j], S[i]
    i, j = sample([0, 1, 2], 2)
    S[i], S[j] = S[j], S[i]
    # check
    if S == T:
        print("Yes")
        sys.exit(0)
# else
print("No")


''' another ans
from random import sample
import sys
s = input().split()
t = input().split()
for _ in range(100000):
    i, j = sample([0,1,2], 2)
    s[i], s[j] = s[j], s[i]
    i, j = sample([0,1,2], 2)
    s[i], s[j] = s[j], s[i]
    if s == t:
        print("Yes")
        sys.exit(0)
print("No")
'''
