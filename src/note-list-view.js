// import { Notes } from "./note-model";

(function(exports){
    function NoteListView(notelist) {
            this.view = notelist 
    }

    NoteListView.prototype.show = function() {
     return "<ul><li><div>" + this.view.array[0]  + "</div></li></ul>"
    }



    exports.NoteListView = NoteListView;
})(this);


// ----------------------------------------Test------------------

var note1 = new Notes("hi Shubz")
var note2 = new Notes("hi Muna")

var notelist = new NoteList()


notelist.add(note1)
notelist.add(note2)

notelist.returnlist()

var notelistview = new NoteListView(notelist)

notelistview.show()


// console.log(note1)
// console.log(notelist)

// console.log(notelist.returnlist())

console.log(notelistview.show())
