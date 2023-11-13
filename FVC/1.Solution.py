# When you open the dialer of your phone and start typing a number, you will probably get search results from the save contacts for the number you entered. Your task is to implement a similar feature.
# Saved contacts are numbered from 0 to N-1. They are represented by two arrays A,B of N strings each. Name of K-th contact is A[K] and phone number is B[K].
# write a function def solution(A, B , P ) which A, B and a string P of length M representing a phone number.
# return contact name whose phone number contains P as a substring.
# for example , “436800143” contains as a substring “6800”, but not “3614”
# If there is more than one contact matching the search criteria, your function should return the alphabetically smallest contact name.
# If no match is found, your function should return “NO CONTACT”.

# example
# A = [“pim”, “pom”], B = [“999999999”, “777888999”] and P = “88999”, your function should return “pom”, because only pom’s phone number contains “88999”.
# A =[“sander”, “amy”, “ann”, “michael”], B = [“123456789”, “234567890”, “789123456”, ‘“123123123”’] and P = “1”, your function should return “ann”. Note that sander, ann and michael’s phone number contain “1” but “ann” is alphabetically smaller.

# code

def solution(A, B, P):
    # write your code in Python 3.6
    # A = [“pim”, “pom”], B = [“999999999”, “777888999”] and P = “88999”, your function should return “pom”, because only pom’s phone number contains “88999”.
    # A =[“sander”, “amy”, “ann”, “michael”], B = [“123456789”, “234567890”, “789123456”, ‘“123123123”’] and P = “1”, your function should return “ann”. Note that sander, ann and michael’s phone number contain “1” but “ann” is alphabetically smaller.

    # contact A[k]
    for i in range(len(A)):
        # phone number B[k]
        for j in range(len(B)):
            # phone number P
            if P in B[j]:
                return A[i]
    return "NO CONTACT"

    """ sol 1
    for i in range(len(A)):
        for j in range(len(B)):
            for k in range(len(P)):
                # if partial number contains P, return the alphabetically smallest contact name
                if P[k] in B[j] != -1:
                    return A[-i]
    # If no match is found, your function should return “NO CONTACT”.
    return "NO CONTACT"
"""


# test
print(solution(["pim", "pom"], ["999999999", "777888999"], "88999"))


# print(solution(["sander", "amy", "ann", "michael"], [
#    "123456789", "234567890", "789123456", "123123123"], "1"))
