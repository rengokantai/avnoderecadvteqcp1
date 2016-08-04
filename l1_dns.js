var dns = require('dns'),
args = process.argv.splice(2),
domain=args[0]

dns.resolve(domain,function(err,addresses) {
    if(err){
        console.log(err);
    }
    
    addresses.forEach(function(address) {
        getDomainsReverse('resolve',address)
    })
})

dns.lookup(domain,function(err,address,family){
    if(err){
        console.log(err);
    }
    getDomainsReverse('lookup',address);
})

function getDomainsReverse(type,ipaddress){
    dns.reverse(ipaddress,function(err,domains){
        if(err){
            console.log(err);
        }else if(domains.length>1){
            console.log(type+' domain name for '+ ipaddress+' '+domain)
        }else{
            console.log(type+' domain name for '+ ipaddress+' '+domain)
        }
    })
}