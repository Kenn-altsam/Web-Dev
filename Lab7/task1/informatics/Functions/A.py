def minn(a, b, c, d):
    arr = [a, b, c, d]
    minnn = a
    for i in range(4):
        if arr[i] < minnn:
            minnn = arr[i]
    return minnn

a, b, c, d = map(int, input().split())

print(minn(a, b, c, d))