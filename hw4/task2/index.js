const express = require('express'); //подключили библиотеку express
const Vigenere = require('caesar-salad').Vigenere; //подключили библиотеку caesar-salad
const app = express(); //создаем экземпляр


const port = 8000;

const password="paroldlyashifrovaniya"


app.get('/',(req, res) =>{
    res.send('hellow world');
});


app.get('/encode/:str',(req, res) =>{
    let encodeParam = Vigenere.Cipher(password).crypt(req.params.str);
    res.send(`Encode string: ${encodeParam}`);
});

app.get('/decode/:str',(req, res) =>{
    let decodeParam = Vigenere.Decipher(password).crypt(req.params.str);
    res.send(`Decode string: ${decodeParam}`);
});

app.listen(port, () =>{
    console.log('Server start on ' + port + ' port');
});