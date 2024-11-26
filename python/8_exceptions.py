#Error happens during run time if input is not integer, for instance, string , float
# x = int(input("x = ? "))
# print(f"x is {x}")

#try and except ValueError to handle value error , indentation is important
# try:
#     x = int(input("x = ? "))
#     print(f"x is {x}")
# except ValueError:
#     print("x is not an integer")

#name error because assignment from right operand to left is not successful, convert from string to int non-sense
# try:
#     x = int(input("x = ? "))
# except ValueError:
#     print("x is not an integer")

###because x was never successfully assigned a value
# print(f"x is {x}")


# try:
#     x = int(input("x = ? "))
# except ValueError:
#     print("x is not an integer")
# ######else is associated with try
# else:
#     print(f"x is {x}")

##loop 1 
while True:
    try:
        x = int(input("x = ? "))
    except ValueError:
        print("x is not an integer")
    else:
        break

print(f"x is {x}")

##loop 2 
while True:
    try:
        x = int(input("x = ? "))
        break
    except ValueError:
        print("x is not an integer")

print(f"x is {x}")

###define a function to get int
###func 1
# def get_int():
#     while True:
#         try:
#             x = int(input("x = ? "))
#         except ValueError:
#             print("x is not an integer")
#         else:
#             break
#     return x

###func 2
def get_int():
    while True:
        try:
            x = int(input("x = ? "))
        except ValueError:
            print("x is not an integer")
        else:
            return x

###func 3
def get_int():
    while True:
        try:
            return int(input("x = ? "))
        except ValueError:
            print("x is not an integer")

###func 4
def get_int():
    while True:
        try:
            return int(input("x = ? "))
        except ValueError:
            pass

##parameter
def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            pass


def main():
    x = get_int("x = ? ")
    print(f"x is {x}")

main()