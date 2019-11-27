 (function(exports) {
    function testNoteListView() {

        var note1 = new Notes(this.text)
        // var note2 = new Notes("hi Beno")

        
        var notelist = new NoteList()
        notelist.add(note1)


        
        // notelist.add(note2)
        

        var notelistview = new NoteListView(notelist);        
        
        assert.isTrue(notelistview.show() === "<ul><li><div>" + notelist.array[0]  + "</div></li></ul>")


    }
        testNoteListView()
}) (this);


// li><div>Favourite drink: seltzer</div></li></ul>. )