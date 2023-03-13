def amt_long_words(input_str):
    words = input_str.split()
    long_words = [word for word in words if len(word) > 5]
    return len(long_words)

>>> count_str = "The quick brown fox jumps over the lazy dog"
>>> count_long_words(count_str)
