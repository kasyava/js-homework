const express = require('express'); //подключили библиотеку

const app = express(); //создаем экземпляр

const port = 8000;

app.get('/',(req, res) =>{
    res.send('hellow world');
});

app.get('/:eho',(req, res) =>{
    res.send(req.params.eho);
});



app.listen(port, () =>{
    console.log('Server start on ' + port + ' port');
});