# x = int(input("x = ? "))
# y = int(input("y = ? "))

#1#######
# if x < y:
#     print("x is less than y.")

# if x > y:
#     print("x is greater than y")

# if x == y:
#     print("x is equal to y")

#2#######
# if x < y:
#     print("x is less than y.")

# elif x > y:
#     print("x is greater than y")


# # elif x == y:
# #     print("x is equal to y")

# #3####
# else:
#     print("x is equal to y")


# if x < y or x > y:
#     print("x is not equal to y")
# else:
#     print("x is equal to y")

#indentation and colon is necessary
# if x != y:
#     print("x is not equal to y")
# else:
#     print("x is equal to y")

score = int(input("Score: "))

# if score >= 90 and score <= 100:
#     print("Grade: A")
# elif score >=80 and score <90:
#     print("Grade: B")
# elif score >=70 and score <80:
#     print("Grade: C")
# elif score >= 60 and score <70:
#     print("Grade: D")
# else:
#     print("Grade: F")

# if 90 <= score <= 100:
#     print("Grade: A")
# elif 80 <= score <90:
#     print("Grade: B")
# elif 70 <= score <80:
#     print("Grade: C")
# elif 60 <= score <70:
#     print("Grade: D")
# else:
#     print("Grade: F")

if  score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")