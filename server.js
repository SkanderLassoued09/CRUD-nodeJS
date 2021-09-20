/*


 body-parser : DEPRECATED -> To read the body request
 CORS : Cross Origin Resource Sharing -> Transmitting HTTP headers
 => CORS can restrict who can have access to your application. Let's say who can fetch to your API.


*/


// Start SERVER 
const express = require('express');
const cors = require('cors');
const routerPath  = require('./route/noteRoute');
const app = express();
const port = 3001 ;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json())  
app.use('/api/v1',routerPath)
app.get('/',(req,res) => {
res.send('SERVER STARTED ...')
})

app.listen(port, () => {
console.log('SERVER START ...');                                          
})                                        