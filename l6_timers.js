var count =0;
var getData = function(cb){
	var obj = {
		data:[
			"item1",
			"item2"
		],
		numberCalls:count++
	}
	return cb(null,obj);
}
console.log(+new Date())
var onSuccess = function(err,data){
	if(err)console.log(err);
	if(data.numberCalls>5)clearInterval(itvl);
	console.log(+new Date())
	console.log(data);
}

//setImmediate(getData,onSuccess);
//setImmediate(getData,onSuccess);
//setImmediate(getData,onSuccess);


//If we have no setImmediate method in the queue, this method will never be called
var tmr = setTimeout(getData,0, onSuccess);
tmr.unref()
//var itvl = setInterval(getData, 50,onSuccess);


//setImmediate: queue the function to precess immediately behind any IO