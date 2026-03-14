import math

x = int(input())
cnt = 0

for i in range(1, math.isqrt(x) + 1):
    if x % i == 0:
        if i * i == x:
            cnt += 1
        else:
            cnt += 2

print(cnt)