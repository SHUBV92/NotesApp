(function(exports){
    function NoteList() {
        this.array = []
        console.log(this.array)
    };
    

    NoteList.prototype.add = function(note){
        this.array.push(note.text)        
    }

    NoteList.prototype.returnlist = function() {
        return this.array 
    }

    
    exports.NoteList = NoteList;
})(this);


var notelist = new NoteList
console.log(notelist.array)
var note = new Notes("Hi Shubz")
var note1 = new Notes("Hi Alex")
var note2 = new Notes("Hi Alex")

notelist.add(note)
notelist.add(note1)

console.log(notelist.array)