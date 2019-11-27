(function(exports){
    function Notes(texts) {
            this.text = texts;
    };

    Notes.prototype.returnsNote = function() {
        return this.text 
    };

    exports.Notes = Notes;


})(this);

