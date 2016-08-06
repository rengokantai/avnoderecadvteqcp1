var qs = require('querystring');
var incoming = ['foo=bar&foo=baz'];

incoming.forEach(function(q){
    console.log(qs.parse(q));
});

var outgoingQS = {
    ke:'test'
}

console.log(qs.stringify(outgoingQS));

var newQS = qs.stringify(outgoingQS,'|','~');
console.log(newQS);
console.log(qs.parse(newQS));
//refer original file