function log(msg){
	if(typeof msg ==='object'){
		msg = JSON.stringify(msg);
	}

	process.stdout.write(msg+ '\n');
}

process.on('p::init',function(){
	log('p module init method');
})

process.on('p::begin',function(){
	log('p module begin method');
})

process.on('exit',function(){
	log("uptime "+process.uptime());
	log('exiting...');
})

process.on('uncaughtException',function(err){
	log('Error: ' + err.message+'\n');
})

log("cwd "+process.cwd());
process.chdir('..');
log("cwd "+process.cwd());
log("execpath "+process.execPath);
log("version "+process.version);
log("pid "+ process.pid);
log("arch " +process.arch);
log("platform "+process.platform);
log(process.memoryUsage());
log("envhome "+process.env.HOME);


var pow = require('./power');
var out = pow.power(2,2);
log(out);

setTimeout(pow.error, 1);