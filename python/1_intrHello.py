#ask user for their name
name = input("What's your name? ").strip().title()

#split user's name into first name and last name
first, last =name.split(" ")

#if argument is omitted or None, remove whitespace from str by default and capitalize user's name
#name=name.strip().title()

#Capitalize user's name for the first letter
#name=name.capitalize()

#Capitalize user's name
#name=name.title()

#say hello to user
"""
multi-line comments
"""
# the + is used as concatenation
#1# 
# print("hello, "+name)

#using comma between variable and string, there is space generated automatically
#2# 
#print("hello,", name)

#print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)

#3#
#print("hello, ",end="")
#print(name)

#print("hello,",name,sep="???")

#4# weird but still a way
print(f"hello, {first}")

#quote mark and escape backslash
#print('hello, "friend"')
#print("hello, \"friend\"")