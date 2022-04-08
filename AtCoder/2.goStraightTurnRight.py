# consider xy-plane.
# x-axis is in the direction of east, and the positive direction of the y-axis is in the direction of north.
# Takahashi is at point (x,y)=(0,0) and facing east (in the positive direction of the x-axis).

# given a string T=t1 t2...tN of length N consisting of S and R. Takahashi will do the following:
# i=1,2,...,N in order

# conditions
# 1. if t_i is S, Takahashi advances in the current direction by distance 1.
# 2. if t_i is R, Takahashi turns right by 90 degrees without changing his position. as a result Takahashi's direction changes as follows
#   If he is facing east (in the positive direction of the x-axis) before he turns, he will face south (in the negative direction of the y-axis) after he turns.
#   If he is facing south (in the negative direction of the y-axis) before he turns, he will face west (in the negative direction of the x-axis) after he turns.
#   If he is facing west (in the negative direction of the x-axis) before he turns, he will face north (in the positive direction of the y-axis) after he turns.
#   If he is facing north (in the positive direction of the y-axis) before he turns, he will face east (in the positive direction of the x-axis) after he turns.

# sample input
# 4
# SSRS

# sample output
# 2 -1


# sample input 2
# 20
# SRSRSSRSSSRSRRRRRSRR

# sample output 2
# 0 1


# code start here
# input
N = int(input())
T = input()
direction = 0
coord1 = 0
coord2 = 0

# loop
for i in range(N):
    # if direction
    if T[i] == 'S':
        if direction == 0:
            coord1 += 1
        elif direction == 1:
            coord2 -= 1
        elif direction == 2:
            coord1 -= 1
        elif direction == 3:
            coord2 += 1
    elif T[i] == 'R':  # R is
        if direction == 0:
            direction = 1
        elif direction == 1:
            direction = 2
        elif direction == 2:
            direction = 3
        elif direction == 3:
            direction = 0
# output
print(coord1, coord2)
