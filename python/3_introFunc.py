
#####scope######
# def main():
#     name = input("What's your name? ")
#     hello()

# def hello():
#     print("hello,",name)

# main()


#keyword def for defining function
# def main():
#     name = input("What's your name? ")
#     hello(name)

# def hello(to="world"):
#     print("hello,",to)

# main()


def main():
    x = int(input("x = ? "))
    print("x squared is", square(x))

def square(n):
    return n**2
    #return pow(n,2)
    # return n*n

main()