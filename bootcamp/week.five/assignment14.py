import math

# Part A

# def isPrimeNumber(number):
#     num = int(number)
#     if num <= 1 :
#         return False
#     else :
#         for i in range (2, num):
#             if num % i == 0:
#                 return False
#     return True

# print("That is{}a prime number.".format(" " if isPrimeNumber(input("Enter a number: ")) else " not "))

# Part B

def someFunction(schoolId, *firstName, **lastName_Email):
    print()

    print("School Id: {}".format(schoolId))
    
    print("First Name: ", end="")
    for item in firstName:
        print(item)

    print("Last Name & Email: ", end="")
    for lastName, email in lastName_Email.items():
        print("{0} {1}".format(lastName, email))

school_Id = input("Provide the school Id: ")

firstName = input("Provide first name(s): ")

lastName_Email = {input("Provide last name(s): "):input("Provide emails: ")}

someFunction(school_Id, firstName, **lastName_Email)




