a = int(input())

cnt = 0

for i in range(1, a + 1):
    x = int(input())
    if x == 0:
        cnt += 1

print(cnt)