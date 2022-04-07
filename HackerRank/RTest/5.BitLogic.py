# for two positive integers, lo and hi, and a limit k, find two integers a and b,
# satisfying the following criteria. return the value of a XOR b.
# lo <= a <= b <= hi
# the value of a XOR b is maximal for a XOR b <= k.

# example:
# lo= 3, hi = 5, k = 6, the maximal usebale XOR value us 6 because the maximal value that is less than or equal to the limit k is 6.

# input format
# the furst line contains an integer, lo, the lower range limit
# the second line contains an integer, hi, the upper range limit
# the third line contains an integer, k, the maximal limit

# 2 4 8 -> output is 7 because a=2 b=3 and a XOR b = 1 . a =2 b = 4 and a XOR b = 6. a=3 b=5 and a XOR b = 7.

def maxXor(lo, hi, k):
    max_xor = 0
    for i in range(lo, hi+1):
        for j in range(i, hi+1):
            xor = i ^ j
            if xor <= k and xor > max_xor:
                max_xor = xor
    return max_xor


# print
print(maxXor(2, 4, 8))
