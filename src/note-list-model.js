(function(exports){
    function NoteList() {
        this.array = []
        
        // console.log(this.array)
    };
    

    NoteList.prototype.add = function(note){
        this.array.push(note.text)        
    }

    NoteList.prototype.returnlist = function() {
        return this.array 
    }

    
    exports.NoteList = NoteList;
})(this);

