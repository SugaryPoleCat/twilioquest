// node sortOrder.js cats dogs

// when first argument is EARLIER in alphabet than second, prin -1
// when they are SAME, reutnr 0
// when the first argument is later in alpphabet print 1

let thing1 = String(process.argv[2]);
let thing2 = String(process.argv[3]);
thing1=thing1.toLowerCase();
thing2=thing2.toLowerCase();

// console.log(thing1);
// console.log(thing2);

if(thing1 < thing2){
	console.log('-1');
} else if (thing1 == thing2){
	console.log('0');
} else {
	console.log('1');
}