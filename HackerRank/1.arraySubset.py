def partition(arr):
    arr.sort(reverse=True)
    total_B = sum(arr)
    total_A = 0
    A = []
    for i in range(len(arr)):
        total_A += arr[i]
        total_B -= arr[i]
        A.append(arr[i])
        if total_A > total_B:
            return A
