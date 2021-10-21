function getLaserSetting(argu){
	let result;
	if(argu == 'please'){
		result = 'OFF';
	} else {
		result = 'ON';
	}
	return result;
}