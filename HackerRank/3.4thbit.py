# a binary number is a combination of 1s and 0s.
# its n^th least significant bit is the n^th digit starting from the right starting with 1.
# given a decimal number, convert it to binary and determine the value of the 4th least significant digit.
# example: number = 23 return 0
# example: number = 77, convert to bunary and return 1

def fourthBit(number):
    return (number >> 3) & 1


# print
print(fourthBit(77))
