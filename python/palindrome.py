# Question: Given a string, write a function to check if it's a palindrome. 
# A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. 
# The function should return True if the string is a palindrome and False otherwise. 
# Ignore spaces, punctuation, and capitalization when determining if a string is a palindrome.

def is_palindrome(s: str) -> bool:
    # Remove spaces and punctuation and convert to lowercase
    s = ''.join(e for e in s if e.isalnum()).lower()
    # Check if the string is equal to its reverse
    return s == s[::-1]

def create_palindrome(input_string):
  # Reverse the input string and append it to the original string
  palindrome = input_string + input_string[::-1]
  return palindrome

def create_user_palindrome(input_string):
  # Reverse the input string and append it to the original string
  palindrome = input_string + input_string[::-1]
  return palindrome
  
  # Get input from the user
  input_string = input("Enter a string to create a palindrome: ")
  
  # Create a palindrome from the input string
  palindrome = create_user_palindrome(input_string)
  
  # Print the resulting palindrome
  print("Palindrome:", palindrome)

  
