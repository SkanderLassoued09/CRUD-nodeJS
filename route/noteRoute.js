
const getNotes = require('../controller/noteController');

const express = require('express');
const route = express.Router();
// Path API
route.get('/notes',getNotes.getAllNotes)      
route.post('/notes/save',getNotes.saveNote)
route.put('/notes/update',getNotes.updateNote)
route.delete('/notes/delete/:noteId',getNotes.deleteNote)                                    
module.exports = route