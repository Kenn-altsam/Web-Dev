binary = input()


decimal = 0

for i in range(len(binary), 0, -1):
    decimal += int(binary[i - 1]) * (2 ** (len(binary) - i))

print(decimal)