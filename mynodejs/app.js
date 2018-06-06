const fs = require('fs');
const yargs = require('yargs');

const mod = require('./notes');
const _ = require('lodash');

var titleOptions = {
    describe: 'Its title',
    demand:true,
    alias:'t'
};

var bodyOptions = {
    describe:'Its body',
    demand:true,
    alias:'b'
};

var args = yargs
    .command('add', 'Adding a note', {
        title : titleOptions,
        body : bodyOptions
    })
    .command('read', 'Reading a note', {
        title : titleOptions
    })
    .command('remove', 'Removing a note', {
        title : titleOptions
    })
    .command('list', 'Read All notes')
    .argv;
var ar = args._[0];

if(ar === 'add'){
    var savedjson = mod.add(args.title, args.body);
    if(_.isObject(savedjson)){
        console.log('saved succcessful...');
        mod.logNote(savedjson);
    } else if(_.isUndefined(savedjson)){
        console.log('DUPLICATE...ERROR....')
    }
} else if(ar === 'read'){
    var filteredNotes = mod.read(args.title);
    if(filteredNotes){
        console.log('Read values from Note ');
        debugger;
        mod.logNote(filteredNotes);
    } else {
        console.log('Record not found!!!')
    }
} else if(ar === 'list'){ 
    var allNotes = mod.list();
    console.log(`Records count : ${allNotes.length}`);

    allNotes.forEach(element => {
        mod.logNote(element);
    });

} else if(ar === 'remove'){
    var status = mod.remove(args.title);
    var message = status ? 'Note Removed!!!' : 'Note already removed.....';
    console.log(message);
} else {
    console.log('no commands to execute');
}






