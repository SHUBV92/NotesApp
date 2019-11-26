(function(exports){
    function Notes(texts) {
            this.text = texts;
    };

    exports.Notes = Notes;
})(this);

var note = new Notes("This is the Notes App")
console.log(note.text)