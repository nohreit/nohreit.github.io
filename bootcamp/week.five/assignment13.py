# Part A

# myList = [1,2,3,4,"Hello"]

# print(myList)

# myList2 = myList[1:]

# print(myList2)

# myList2.append("World")

# del myList2[2]

# myList3 = myList2

# print(myList3)

# Part B

fruits = ['strawberry', 'banana', 'lemon', 'cherry', 'pineapple', 'apple', 'orange']

text = """print out one message for each string method, for each method; add a description 
        comment line for each method"""

# print(fruits.count('apple')) # the count() methods returns the number of element with the specified value in the list
# print(len(text))

print(text.count('each'))
print(text.count('method', 50, len(text) - 1))  # The count() methods returns the number of element with the specified 
                                                # value in the string. If the 2nd and 3rd arguments (indexes [start - end]) 
                                                # are specified then the method will only look for the element within the specified
                                                # range.

print("\n")

print(text.endswith('d'))
print(text.endswith('for each method;', 0, 50)) # The endswith() methods returns True if the string ends with the specified value,
                                                # otherwise, it returns false. If the 2nd and 3rd arguments (indexes [start - end]) 
                                                # are specified then the method will only search within the specified range. Like count()

print("\n")

print(text.find('from'))
print(text.find('line', 70, len(text) - 1))     # The find() method finds the first occurrence of the specified value. It return the 
                                                # index where that first occurrence is found and return -1 if the value is not found.
                                                # Like count(), defining the start and end argument will scope the search.

print("\n")

print(text.index('line'))                       # The index() method is similar to the find() method but raises an
                                                # exception instead of returning -1 when the value is not found.

print("\n")

print(text.isalnum())
print("02032021".isalnum())
print("02-03-2021".isalnum())
print("Ryzen3000Series".isalnum())              # The isalnum() method return true if the string contains alphanumeric values such as alphabet
                                                # letters (a-z) and numbers (0-9), otherwise false.

print("\n")

print("\nPython".isalpha())
print(text.isalpha())
print("2021".isalpha())                         # The isalpha() method returns true if all the characters are alphabet letters (a-z) excluding 
                                                # special characters like (space)!#%&? etc. Otherwise false.

print("\n")

print(text.isdigit())
print("2021".isdigit())                         # Similar to isalpha() but instead returns true if all the characters are numbers (0-9)

print("\n")

print(text.islower())
print("HeLlo".islower())
print("hello123".islower())                     # Returns true if all the alphabet characters are in lower case, otherwise false. 
                                                # Numbers, symbols and spaces are not checked

print("\n")

print("ATLAS".isupper())
print(text.isupper())                           # Similar to islower() but returns true if all the alphabet characters are in upper case.

print("\n")

print("Python Is A Snake".istitle())
print(text.istitle())                           # Returns true if all words starts with a upper case letter and the rest of each word is lower
                                                # case

print("\n")

print(" - ".join(fruits))                       # The join() methods joins all items from the list into one string. A string must be specified 
                                                # as the separator.

# lower

# replace

# split

# splitlines

# startswith

# strip

# upper



