# x = int(input("x = ?"))

# if x % 2 == 0:
#     print("Even")
# else:
#     print("Odd")


def main ():
    x = int(input("x = ? "))
    if is_even(x):
        print("Even")
    else:
        print("Odd")

#boolean value must be Capitalized

def is_even(n):
    ###3### the most elegant way
    return n % 2 == 0

    ###1###
    # if n % 2 == 0: 
    #     return True
    # else:
    #     return False

    ###2###
    #return True if n % 2 == 0 else False
    

main()