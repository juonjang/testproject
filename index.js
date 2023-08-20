const express = require('express');
const app = express();
const port = 8000


app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/user', (req, res) => {
    let uer ={
        fname:'juon',
        lname:'juon',
        age:32
    }
    res.json(uer)
})



app.listen(port,(req,res)=>{

    console.log('listening on port'+port)
});