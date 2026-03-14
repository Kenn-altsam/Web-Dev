

a = int(input())

arr = list(map(int, input().split()))

cnt = 0

for i in range(len(arr) // 2):
    temp = arr[i]
    arr[i] = arr[len(arr) - i - 1]
    arr[len(arr) - i - 1] = temp

for i in range(len(arr)):
    print(arr[i])

