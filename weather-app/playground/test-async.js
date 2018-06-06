console.log('started...');

setTimeout(()=>{
    console.log('inside first timeout....');
},2000);

setTimeout(()=>{
    console.log('inside zero timeout....');
},0);

console.log('finished...');