# Given a string S of length N consisting of lowercase English alphabets, print the last character of S.
# S is a string of length N consisting of lowercase English alphabets.
# input N and S
# output the last character of S
# example input: 5 output will be abcde
# example input: 1 output will be a

# code start here
N = int(input())
S = input()
# print(S[-1])
print(S[N-1])
