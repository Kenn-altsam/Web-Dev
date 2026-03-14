a = int(input())

arr = list(map(int, input().split()))

exists = False

for i in range(1, len(arr)):
    if arr[i] > 0 and arr[i - 1] > 0 or arr[i] < 0 and arr[i - 1] < 0:
        exists = True
        break


if exists:
    print("YES")
else:
    print("NO")

