import sys

# Create a list
order_of_succession = sys.argv
# add all the system argumetns to teh list
# making it = [] and then appending sysargv, just made an array in an array....
# order_of_succession.append(sys.argv)
# eliminate our list_iteration.py argument, since IT IS a command argument.
order_of_succession.pop(0)

# print(order_of_succession)

# now loop it
#for item in order_of_succession:
#	item_to_print = f" - {item}"
#	print(item_to_print)

#now loop it and display their index
# the start=1 does not mean we start from array[1], it means on what number we START on when displaying the index.
for index, item in enumerate(order_of_succession, start=1):
	item_to_print = f"{index}. {item}"
	print(item_to_print)