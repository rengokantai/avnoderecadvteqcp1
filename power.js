process.emit('p::init');

exports.power = function(base,exponent){
	var res = 1;
	process.emit('p::begin');
	for(var count=0;count<exponent;count++){
		res*=base;
	}
	return res;
};