var arrow = {
    name: 'Raj'
};

arrow.age = 24;

var arrow_fun = {
    name:'Ravi',
    arrowfunction : () => {
        console.log('arrowfunction :',name);
    },
    normalfuncation() {
        //arguments doesn't work as expected in arrow functions.
        console.log(arguments);
        //this keywork doesn't work in arrow functions
        console.log('normalfuncation :',this.name); 
    }
}

console.log(arrow_fun.normalfuncation());
console.log(arrow_fun.normalfuncation(1,2,3,4));
