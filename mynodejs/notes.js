console.log('inside notes.js');
const fs = require('fs');
const _ = require('lodash');

var readNotes = () => {
    try{
        var filedata = fs.readFileSync('newnotes.json');
        return JSON.parse(filedata);
    }catch(ex){ return []; }
}

var writeNotes = (notes) => {
    fs.writeFileSync('newnotes.json', JSON.stringify(notes));
}

var add = (title, body) => {
    console.log('Arguments ',title, body);

    var notes = readNotes();

    var newnotes = {
        title,
        body
    };
    
    var filterduplicate = notes.filter((newnotes) => newnotes.title === title);

    if(filterduplicate.length === 0){
        notes.push(newnotes);
        writeNotes(notes);
        return newnotes;
    } else {
        console.log('ERROR....Record already exists...');
        return;
    }
};

var list = () => {
    return readNotes();
};

var remove = (title) => { 

    //console.log('removing from list ', title)

    var notes = readNotes();
    var filteredData = notes.filter((data) => data.title !== title);
    
    writeNotes(filteredData);

    return notes.length !== filteredData.length;
};

var read = (title) => {
    //console.log('reading a specific list :',ar.title)
    var notes = readNotes();
    var filteredNotes = notes.filter((data) => data.title === title);
    return filteredNotes;
};

var logNote = (filteredNotes) => {
    debugger;
    console.log(`Title ${filteredNotes.title}`);
    console.log(`Body ${filteredNotes.body}`);
}

module.exports = {
    add,list,remove,read,logNote
};