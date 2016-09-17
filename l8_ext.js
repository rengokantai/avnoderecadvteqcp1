var url = require('url');

var test = 'ftp://user:pass@domain:1234/a/b?c=d&e=f';

var urlParsed = url.parse(test,true,true);

console.log('protocol',urlParsed.protocol);
console.log('slashes',urlParsed.slashes);
console.log('auth',urlParsed.auth);
console.log('host',urlParsed.host);
console.log('port',urlParsed.port);
console.log('hostname',urlParsed.hostname);
console.log('hash',urlParsed.hash);
console.log('search',urlParsed.search);
console.log('query',urlParsed.query);
console.log('pathname',urlParsed.pathname);
console.log('path',urlParsed.path);
console.log('href',urlParsed.href);

console.log(url.format(urlParsed));
console.log(url.resolve('/a/b','c'))