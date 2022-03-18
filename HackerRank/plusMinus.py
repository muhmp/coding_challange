'''
/**
 # Question
 # Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 # Print the decimal value a new line with 6 places after the decimal.
 # 
 # ex:
 #  arr = [1,1,0,-1,-1]
 #  there are 5 n elements, two positive, two negative and one zero
 #  the ratio of positive is 2/5 = 0.4000000, negative is 2/5 = 0.4000000 and zero is 1/5 = 0.200000

'''

# import
import math
import os
import random
import re
import sys

# function


def plusMinus(arr):
    x, y, z = 0, 0, 0
    # for loop
    for i in range(0, len(arr)):
        if arr[i] > 0:
            x += 1  # x += 1 // x = x + 1
        elif arr[i] < 0:
            y += 1
        else:
            z = z+1  # same
        # print
    print(x/len(arr))
    print(y/len(arr))
    print(z/len(arr))

#


if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
