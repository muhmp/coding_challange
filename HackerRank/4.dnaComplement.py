# A DNA string  is made up of four symbols: 'A', 'T', 'C', and 'G'
# each symbol has;
# A and T complement each other,
# C and G complement each other,

# Determine the reverse complement of a DNA string by reversing the symbols in the
# string and replacing each symbol with its complement.

# example s = GTCAG , reverse the string GTCAG -> GACTG , replace each by its complement GACTG -> CTGAG
# reverse complement of GTCAG is CTGAC


# example ACCGGGTTTT -> AAAACCCGGT

def dnaComplement(s):
    complement = ""
    for i in s:
        # complement += {'A':'T', 'T':'A', 'C':'G', 'G':'C'}[i]
        if i == "A":
            complement += "T"
        elif i == "T":
            complement += "A"
        elif i == "C":
            complement += "G"
        elif i == "G":
            complement += "C"
# reverse complement of GTCAG is CTGAC
    return complement[::-1]


# print
print(dnaComplement("ACCGGGTTTT"))
