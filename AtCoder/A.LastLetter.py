N = int(input())
T = input()

"""d=0,1,2,3 が 東・南・西・北に対応"""
DX = [1, 0, -1, 0]
DY = [0, -1, 0, 1]

x, y = 0, 0
d = 0  # 現在の向き
for t in T:
    if t == "S":
        x += DX[d]
        y += DY[d]
    if t == "R":
        d = (d + 1) % 4  # 北:3の次は東:0ですから、4で割った余りをとります
print(x, y)
