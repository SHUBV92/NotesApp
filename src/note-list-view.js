// import { Notes } from "./note-model";

(function(exports){
    function NoteListView(notelist) {
            this.view = notelist 
    }

  

    NoteListView.prototype.show = function() {
         var list = [] ; 
        for  (var i = 0; i < this.view.array.length; i++ ) {
        list.push( "<li><div>" + this.view.array[i] + "</div></li>")
    }

list.unshift("<ul>");
list.push("</ul>");
return list.join("");

    }
    exports.NoteListView = NoteListView;
})(this);



