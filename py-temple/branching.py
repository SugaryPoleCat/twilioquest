import sys

def add_numbers(number_one, number_two):
    result = number_one + number_two

    return result

numbers = add_numbers(int(sys.argv[1]), int(sys.argv[2]))

if numbers <= 0:
	print("You have chosen the path of destitution.")
elif numbers > 100:
	print("You have chosen the path of excess.")
else:
	print("You have chosen the path of plenty.")