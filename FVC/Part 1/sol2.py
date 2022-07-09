# Jimmy owns a garden in which he has planted N trees in a row. After a few years, the trees have grown up and now they have different heights.
# Jimmy pays much attention to the aesthetics of his garden. He finds his trees aesthetically pleasing if they alternately increase and decrease in height (…, shorter, taller, shorter, taller, …).
# Note that two adjacent trees cannot have equal heights. It may turn out that some trees have to be cut out, in order to keep the remaining trees aesthetically pleasing.
# However, there is a legal restriction that allows a gardener to cut out at most one tree in his possession. In how many ways can Jimmy cut out exactly one tree, so that the remaining ones are aesthetically pleasing?


# create a function
# function solution(A)
# given an array A consisting of N integers, where A[K] denotes the height of the K-th tree, returns the number of ways of cutting out one tree, so that the remaining trees are aesthetically pleasing.
# If it is not possible to achieve the desired result, your function should return −1.
# If the trees are already aesthetically pleasing without any removal, your function should return 0.

# example
# A = [3, 4, 5, 3, 7] your function should return 3:
# You can remove A[0] so the sequence becomes [4, 5, 3, 7];
# You can remove A[1] so the sequence becomes [3, 5, 3, 7];
# You can remove A[2] so the sequence becomes [3, 4, 5, 7].

# N is an integer within the range [4..200];
# each element of array A is an integer within the range [1..1,000].

# code
from gettext import dpgettext
from this import d


# solution
# The problem is solved by creating subarrays of the original array and check whether they are aesthetically pleasing.


def solution(A):

    # create a subarray of the original array
    # check whether they are aesthetically pleasing
    # if they are, return the number of subarrays
    # if they are not, return -1
    cut = 0
    # define dp
    dp = [0] * len(A)

    for i in range(len(A)-1, -1, -1):
        if A[i-1] < A[i]:
            dp[i] = 1
        elif A[i-1] > A[i]:
            dp[i] = 0
        else:
            dp[i] = -1

    for i in range(2, len(dp)):
        if dp[i-2] == dp[i-1] == dp[i]:
            return -1
        if dp[i-1] == dp[i]:
            cut += 3

    return cut


# test
# print(solution([3, 4, 5, 3, 7]))  # 3


# A = [1,2,3,4] should return -1
print(solution([1, 2, 3, 4]))  # -1
