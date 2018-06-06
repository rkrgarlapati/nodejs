var addpromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('Not numbers.')
        }
    });
};

addpromise(3, '5').then((message) => {
    console.log(message);
}).catch((errormsg) => {
    console.log(errormsg);
})