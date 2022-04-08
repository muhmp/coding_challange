'''
Q = int(input())
XY = set()
for i in range(Q):
    x, y, a, b = map(int, input().split())
    XY.add((x, y))
    #print('XY=', XY)
    max_val = -9999999
    for xy in XY:
        x = xy[0]
        y = xy[1]
   
        max_val = max(max_val, a * x + b * y)
    print(max_val)'''

# try 2
Q = int(input())
S = set()
# range
for i in range(Q):
    X, Y, A, B = map(int, input().split())
    S.add((X, Y))
    # add point to set
    for j in S:
        X = j[0]
        Y = j[1]
        #print('S=', S)
        max_val = -9999999
        for s in S:
            x = s[0]
            y = s[1]
            max_val = max(max_val, A * x + B * y)
        print(max_val)
