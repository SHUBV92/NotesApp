// var app = document.getElementById("app")

// console.log(app)


{/* <html> 
documnent.getElementByID("app")


function NoteListView() {
  var elem = document.getElementById('para');
  elem. = newColor;
} */}

(function(exports) {
    function NoteController(notelistview) { 
        this.view = notelistview
        console.log(this.view)
    }
        NoteController.prototype.html = function() {
            document.getElementById("app").innerHTML = notelistview.show()



            NoteController.prototype.listview = function(notelist) {
                return this.view

            }

        }
    exports.NoteController = NoteController;

    })(this)

var note = new Notes("New")
var notelistview = new NoteListView()
var Notelist    = new NoteList()
var notecontroller = new NoteController()


console.log(NoteController.html(notelistview))