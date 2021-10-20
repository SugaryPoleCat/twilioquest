import sys

operations = sys.argv
# print(operations)
operations.pop(0)
# print(operations)

for item in operations:
	# print(item)
	divisible_by_three = False
	divisible_by_five = False
	number = int(item)
	# print(number)
	# print(number)
	to_print = ""
	divisible_by_3 = number % 3
	divisible_by_5 = number % 5
	if divisible_by_3 == 0:
		divisible_by_three = True
		to_print = to_print + "fizz"
	if divisible_by_5 == 0:
		divisible_by_five = True
		to_print = to_print + "buzz"
	if divisible_by_five == False and divisible_by_three == False:
		# print('we are here')
		to_print = number
	print(to_print)
	# if divisible_by_five == True and divisible_by_three == True:
	# 	to_print = number
	# if number % 3:
	#	print(f"number {number} is divisble by 3")
	#	divisible_by_three = True
	#	to_print = "fizz"
	#	# print(to_print)
	# if number % 5:
	#	# print(f"number {number} is divisble by 5")
	#	divisible_by_five = True
	#	to_print = to_print + "buzz"
	#	# print(to_print)
	# if divisible_by_five == True and divisible_by_three == True:
	#	to_print = number

	# print(to_print)
