function log(msg){
	if(typeof msg ==='object'){
		msg = JSON.stringify(msg);
	}

	process.stdout.write(message+ '\n');
}

process.on('p::init',function(){
	log('p module init method');
})

process.on('exit',function(){
	log(process.uptime());
	log('exiting...');
})

process.on('uncaughtException',function(err){
	log('Error: ' + err.message+'\n');
})

log(process.cwd());
process.chdir('..');
log(process.cwd());
log(process.execPath);
log(process.version);
log(process.pid);
log(process.arch);
log(process.platform);
log(process.memoryUsage());
log(process.env.HOME);


var pow = require('./power');
var out = pow.power(2,2);
log(out);

setTimeout(pow.error, 1);