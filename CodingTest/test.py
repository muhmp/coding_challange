# swap case

# if "Hello World" the output should be "hELLO wORLD"

# code start here
def SwapCase(strParam):
    strResult = ""
    for i in range(len(strParam)):
        if strParam[i].isupper():
            strResult += strParam[i].lower()
        else:
            strResult += strParam[i].upper()
    return strResult


print(SwapCase(input()))
