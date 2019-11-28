(function(exports) {
    function testNotes() {
        var note = new Notes(this.text);
        
        assert.isTrue(note.returnsNote() === note.text);
    }
    // testNotes()
 
}) (this);











// var note = new Notes("This is the Notes App")
// console.log(note.text)