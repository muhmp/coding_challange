# creating biner for image

# creating image A based on threshold T. the size of image is M X N.

def biner(imgA, imgB, T, M, N):
    for i in range(0, M):
        for j in range(0, N):
            if imgA[i][j] <= T:
                imgB[i][j] = 0
            else:
                imgB[i][j] = 1
    return imgB
