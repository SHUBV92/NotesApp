(function(exports) {
    function testNoteList() {
        var notelist = new NoteList();
        var note = new Notes("Hi Shubz")
        var note1 = new Notes("Hi Alex")


        notelist.add(note)
        notelist.add(note1)

        assert.isTrue(notelist.returnlist()[0] === "Hi Shubz");
        assert.isTrue(notelist.returnlist()[1] === "Hi Alex");
        

    }
    // testNoteList()
 
}) (this);

