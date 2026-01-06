console.log('1')

setTimeout(()=>{
    console.log('2')
},200)

async function fetch(url) {
    console.log('3')
    await Promise.resolve();
    console.log('4')
}
fetch();

Promise.resolve().then(()=> console.log('5'));

console.log('6')