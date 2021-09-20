

const generator = require('../util/generator')
const myStorage = require('../util/memory.storage');
const modelNote  = require('../model/note.model');

exports.getAllNotes = (req,res) => {
                                          
var value = myStorage.getValue(myStorage.myStorage);

console.log('VALUES',JSON.stringify(value));

res.status(200).send(JSON.stringify(value))
                                 



}
exports.saveNote = (req,res) => {
var id = generator.generate();                                          
var title = req.body.title;
var content = req.body.content;

if(!title || !content){
res.status(500).send('title and content must be filled')                                          
}         
// req body 
var Note = modelNote.Note;
var noteObj = new Note(id,title);
myStorage.myStorage.setItem(id,noteObj)                                 
res.status(201).send(`note saved successfully ${JSON.stringify(noteObj)}`)                                          
}
exports.updateNote = (req,res) => {

var id = generator.generate();  
var id = req.body.id;                                        
var title = req.body.title;
var content = req.body.content;
if(!id){
return res.status(500).send('Id is invalid')                                          
}
if(!title || !content){
 return res.status(500).send('title and content must be filled')                                          
}         
// req body 
var Note = modelNote.Note;
var noteObj = new Note(id,title);
myStorage.myStorage.setItem(id,noteObj)                                 
res.status(200).send(`note update ${JSON.stringify(noteObj)}`)                                          
 }                                          

exports.deleteNote = (req,res) => {
var noteId = req.params.noteId;
if(!noteId){
req.status(500).send(`Can't delete, Id doesn't exist`)                                          
}    
myStorage.myStorage.removeItem(noteId)
return res.status(200).send('Deleted successfully')                                   
}