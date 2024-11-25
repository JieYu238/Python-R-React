###while###
# i = 3
# while i != 0:
#     print("meow")
#     i = i -1

# i = 1
# while i <= 3:
#     print("meow")
#     i = i + 1

i = 0
while i < 3:
    print("meow")
    #python do not have ++ --
    i += 1

###for#list(with square bracket)###
# for i in [0,1,2]:
#     print("woo")

# for i in range(3):
#     print("woo")

########_
for _ in range(3):
    print("woo")

#one-line
print("meow"*3)

#end with newLine
print("meow\n"*3)

#end with the last line
print("meow\n"*3, end="")


####using the number user input as the times of meow to print
# while True:
#     n = int(input("n = ? "))
#     # if n < 0:
#     #     continue
#     # else:
#     #     break

#     if n > 0:
#         break

# for _ in range(n):
#     print("woo")

# def main():
#     number = get_number()
#     meow(number)

# def get_number():
#     while True:
#         n = int(input("n = ? "))
#         if n >  0:
#             break
#     return n

# def meow(n):
#     for _ in range(n):
#         print("meow")

# main()


###list###
students = ["Hermione", "Harry", "Ron"]
print(students[0])

#use for loop, do not confuse compiler with _
for student in students:
    print(student)

#or
for i in range(len(students)):
    print(i+1, students[i])

###dict###
houses = ["Griffindor", "Griffindor","Griffindor","Slytherin"]

studentsInhouses = {
    "Hermione":"Gryffindor", 
    "Harry":"Gryffindor", 
    "Ron":"Gryffindor", 
    "Draco":"Slytherin"}

print(studentsInhouses["Hermione"])

for student in studentsInhouses:
    print(student, studentsInhouses[student], sep=", ")


###list containing dict###
stuHousePat = [
    {"name":"Hermione", "house":"Gryffindor", "patronus":"Otter"},
    {"name":"Harry", "house":"Gryffindor", "patronus":"Stag"},
    {"name":"Ron", "house":"Gryffindor", "patronus":"Jack Russell terrier"},
    {"name":"Draco", "house":"Slytherin", "patronus":None},  
]

for student in stuHousePat:
    print(student["name"], student["house"], student["patronus"], sep=", ")

for _ in range(3):
    print("#")


##mario##
# def main():
#     print_column(3)

# def print_column(height):
#     # for _ in range(height):
#     #     print("#")
#     print("#\n"*height, end="")

# def main():
#     print_row(4)

# def print_row(width):
#     print("?" * width)

def main():
    print_square(3)

# def print_square(size):
#     #for each row in square
#     for i in range(size):
#         #for each brick in row
#         for j in range(size):
#             #print brick
#             print("#", end="")
#         #newline printed
#         print()

def print_square(size):
    for i in range(size):
        print("#" * size)

main()