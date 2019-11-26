(function(exports) {
    function testNotes() {
        var note = new Notes(texts);

        assert.isTrue(note.text === texts);
    }
    testNotes()
 
}) (this);