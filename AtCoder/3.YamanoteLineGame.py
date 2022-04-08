# Takahashi and Aoki will play the following game against each other.
# Starting from Takahashi, the two alternatingly declare an integer between 1 and 2N+1 (inclusive) until the game ends. Any integer declared by either player cannot be declared by either player again. The player who is no longer able to declare an integer loses; the player who didn't lose wins.
# In this game, Takahashi will always win. Your task is to actually play the game on behalf of Takahashi and win the game.

# First, your program is given a positive integer N from Standard Input. Then, the following procedures are repeated until the game ends.

# 1. Your program outputs an integer between 1 and 2N+1 (inclusive) to Standard Output, which defines the integer that Takahashi declares. (You cannot output an integer that is already declared by either player.)
# 2. The integer that Aoki declares is given by the judge program to your program from Standard Input. (No integer that is already declared by either player will be given.) If Aoki has no more integer to declare, 0 is given instead, which means that the game ended and Takahashi won.
'''
# input
N = int(input())
R = set(range(1, 2*N+1))

# range (1, 2*N+1)
for i in R:
    # if range is not equal then pop the range R
    if len(i) != 0:
        print(R.pop())
        R.remove(int(input()))
# output
print(R)
'''
'''
# try 2
n = int(input())
s = set(range(1, 2*n+2))
while len(s) != 0:
    print(s.pop())
    s.remove(int(input()))
'''

# try 3
N = int(input())
R = set(range(1, 2*N+2))
# for loop
while len(s) != 0:
    print(R.pop())
    R.remove(int(input()))
