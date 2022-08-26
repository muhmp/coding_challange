# FizzBuzz
# childhood game that iterates over a range numbers to wheteher to say a "Fizz" or "Buzz" or a number
# given n return string array where
# answer[i] == "FizzBuzz" if i is divisible by 3 and 5
# answer[i] == "Fizz" if i is divisible by 3
# answer[i] == "Buzz" if i is divisible by 5
# answer[i] == str(i) if i none of the above


# example
# n = 3
# return ["1", "2", "Fizz"]


def fizzBuzz(n):
    answer = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            answer.append("FizzBuzz")
        elif i % 3 == 0:
            answer.append("Fizz")
        elif i % 5 == 0:
            answer.append("Buzz")
        else:
            answer.append(str(i))
    return answer
