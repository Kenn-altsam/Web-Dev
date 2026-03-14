import sys

nums = list(map(int, sys.stdin.read().split()))

s = 0
for x in nums:
    s += x

print(s)