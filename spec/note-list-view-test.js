 (function(exports) {
    function testNoteListView() {

        var note1 = new Notes("Hi Shubs")
        // var note2 = new Notes("hi Beno")

    
        var notelist1 = new NoteList()
        notelist1.add(note1)
        // notelist.add(note2)
        

        var notelistview = new NoteListView(notelist1);        
        console.log(notelistview.show())
        assert.isTrue(notelistview.show() === "<ul><li><div>" + "Hi Shubs"  + "</div></li></ul>")
    }          
        // testNoteListView()






function testNoteListView() {

    var note1 = new Notes("Hi Shubs")
    var note2 = new Notes("hi Beno")


    var notelist = new NoteList()
    notelist.add(note1)
    notelist.add(note2)
    

    var notelistview = new NoteListView(notelist);        
    console.log(notelistview.show())
    assert.isTrue(notelistview.show() === "<ul><li><div>" + "Hi Shubs"  + "</div></li><li><div>" + "hi Beno"  + "</div></li></ul>")
}          
    // testNoteListView()
}) (this);





