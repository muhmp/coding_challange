# creating biner for image

# creating image A based on threshold T. the size of image is M X N.

def biner(imgA, imgB, T, M, N):
    for i in range(M-1):
        for j in range(N-1):
            if imgA[i][j] < T:
                imgB[i][j] = 0
            else:
                imgB[i][j] = 1
    return imgB
