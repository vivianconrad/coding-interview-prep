# Question Part 1:
# There's a staircase with N steps, and you can climb 1 or 2 steps at a time. 
# Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

# For example, if N is 4, then there are 5 unique ways:

# 1, 1, 1, 1
# 2, 1, 1
# 1, 2, 1
# 1, 1, 2
# 2, 2

# Answer Part 1:
# Define an array dp of size N+1 where dp[i] represents the number of unique ways to reach the ith step. 
# The base cases would be dp[0]=1 and dp[1]=1 since there's only one way to climb 0 or 1 step. 
# For any step i, the number of ways to reach that step would be the sum of the number of ways to reach the previous two steps, i.e., dp[i] = dp[i-1] + dp[i-2]. 
# The final answer would be dp[N].

def count_steps(n):
    if n <= 1:
        return 1
    dp = [0]*(n+1)
    dp[0] = 1
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Question Part 2
# What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? 
# For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

# Answer Part 2:
# Define an array dp of size N+1 where dp[i] represents the number of unique ways to reach the ith step. 
# The base cases would be dp[0]=1 since there's only one way to climb 0 steps. 
# For any step i, we can iterate over the set X and add the number of ways to reach the previous i-x steps where x is an element of X, i.e., dp[i] = sum(dp[i-x] for x in X if i-x >= 0). 
# The final answer would be dp[N].

def count_steps(n, X):
    if n == 0:
        return 1
    dp = [0]*(n+1)
    dp[0] = 1
    for i in range(1, n+1):
        dp[i] = sum(dp[i-x] for x in X if i-x >= 0)
    return dp[n]

# The time complexity of both approaches is O(N*|X|) where |X| is the size of the set X. 
# If X is large or if we need to compute the number of ways for multiple values of N, we can use memoization to avoid recomputing the same subproblems.



