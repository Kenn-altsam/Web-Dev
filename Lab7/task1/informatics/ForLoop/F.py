x = input()

result = ""

for i in range(len(x), 0, -1):
    result += x[i-1]

for digit in result:
    if digit != "0":
        break
    else:
        result = result[1:]

print(result) 