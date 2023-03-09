def closest_pair(string):
    strings = string.split()  # Split input string into a list of strings
    seen = {}  # Map from string to the rightmost index where we've observed it
    min_distance = float('inf')  # Minimum distance between two equal strings
    n = len(strings)  # Number of strings in the input list

    for i in range(n):
        s = strings[i]
        if s in seen:
            # The current string has been observed before
            prev_index = seen[s]
            distance = i - prev_index
            if distance < min_distance:
                min_distance = distance
        seen[s] = i

    if min_distance == float('inf'):
        return None  # No equal strings found
    else:
        return n - min_distance
