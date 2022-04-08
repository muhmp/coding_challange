# There are N balls labeled with the first N uppercase letters. The balls have pairwise distinct weights.
# You are allowed to ask at most Q queries. In each query, you can compare the weights of two balls
# Sort the balls in the ascending order of their weights.

from heapq import merge


N, Q = map(int, input().split())
S = [chr(ord('A') + i) for i in range(N)]


def compare(a, b):
    print("?", a, b, flush=True)
    return input()


def merge_sort(collection):
    def merge(left, right):
        result = []
        while left and right:
            if compare(left[0], right[0]) == "<":
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))
        return result + left + right

    length = len(collection)
    if length <= 1:
        return collection
    middle = length // 2
    return merge(merge_sort(collection[:middle]), merge_sort(collection[middle:]))


# print(merge_sort(S))
print(merge_sort(S))
