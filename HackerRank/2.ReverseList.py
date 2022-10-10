
# given an array of integers, reverse the given array in place using index and loop rather than built-in function
# example: arr = [1,2,3,4,5] return [5,4,3,2,1]


def reverseArray(arr):
    for i in range(len(arr)//2):
        temp = arr[i]
        arr[i] = arr[len(arr)-1-i]
        arr[len(arr)-1-i] = temp
    return arr


# print
print(reverseArray([1, 2, 3, 4, 5]))
