class TargetingSolution {
	constructor(argu) {
		this.argu = argu;
	}

	target(){
		// return this.argu;
		// const string = `(${this.argu.x}, ${this.argu.y}, ${this.argu.z})`;
		return `(${this.argu.x}, ${this.argu.y}, ${this.argu.z})`;
	}
}

const sln = new TargetingSolution({
	x: 45,
	y: 12,
	z: -1,
});

console.log(sln.target()); // Should output a string of (45, 12, -1)