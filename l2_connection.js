var net =require('net');

var connection = net.createConnection({
    port:8181,
    host:'127.0.0.1'
},function(){
    console.log('success');
});

connection.on('error',function(err){
    console.log(err);
});

connection.on('close',function(err){
    console.log('closed');
});

connection.on('data',function(err){
    console.log(data.toString());
});