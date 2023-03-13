# Write a Python function that takes a list of integers and returns a new list containing only the even integers from the original list.

def even_num(numbers):
    even_numbers = []
    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
    return even_numbers
