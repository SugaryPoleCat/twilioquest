const input = parseInt(process.argv[2]);

let divisibleByThree = false;
let divisibleByFive = false;

const divisibleBy3 = input % 3;
const divisibleBy5 = input % 5;

if (divisibleBy3 == 0) {
	divisibleByThree = true;
}
if (divisibleBy5 == 0) {
	divisibleByFive = true;
}
if (divisibleByFive == true && divisibleByThree == true) {
	console.log('JavaScript');
} else if (divisibleByFive == true) {
	console.log('Script');
} else if (divisibleByThree == true) {
	console.log('Java');
} else {
	console.log(input);
}