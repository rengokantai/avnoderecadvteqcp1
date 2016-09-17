


var http = require('http'),
	mod = require('./mod');



server =http.createServer(function(req,res){
	if(req.url==='/'){
		debugger;
		mod.do(function(err,data){
			if(err)res.end('error');
			res.end(JSON.stringify(data));
		});
	}else{
		res.end('404')
	}
})


server.listen(3000)


/**
node debug l7.js
//watch a parameter
watch('req.url')
//return all watching items
watchers
//set breakpoint at line 20
sb(20)
//set brakpoint at another file
sb('other.js', 20)
*/