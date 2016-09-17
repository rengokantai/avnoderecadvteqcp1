//levels: log info error warn time timeEnd trace assert dir

console.info('info')
console.warn('warn')
console.time('timer')
setTimeout(console.timeEnd,2500,'timer')
console.dir({
	name:'dir',
	logs:['k','j']
})

var ke = 'ke';
console.trace(ke);

try{
	console.assert(1==='1','error!')
}catch(e){
	console.error(e.message)
}