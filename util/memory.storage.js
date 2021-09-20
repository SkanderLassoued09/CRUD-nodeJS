/* const MemoryStorage = require('memorystorage');
var myStorage = new MemoryStorage('note-app');
exports.getKeys = (myStorage) =>{
var keys = []                                          
for(var i = 0 ; i <= myStorage.length ; i++){
var key = myStorage.key(i)
keys.push(key)                                         
}             
return keys                             
}
exports.getValues = (myStorage) => {
var values = []
for(var i = 0 ; i <= myStorage.length ; i++){
var key = myStorage.key(i)
var value = myStorage.getItem(key)
values.push(value)
}
return values
}
exports.myStorage = myStorage
*/

const MemoryStorage = require('memorystorage');
const myStorage = MemoryStorage('my-app');

// function to get key
exports.getKey = (store) => {
var keys = [];
// Looping through the object(store) item by item and get the keys and push to keys[]
for (var i = 0; i < store.length; i++) {
    var key = store.key(i)
    keys.push(key)
}    
return keys                                      
} 

// function to get value
exports.getValue = (store) => {
var values = [];
for(var i = 0 ; i <= store.length ; i++){
var key = store.key(i);
var value = store.getItem(key)
values.push(value)

}   
return values                                       
}



// export the function
exports.myStorage = myStorage;