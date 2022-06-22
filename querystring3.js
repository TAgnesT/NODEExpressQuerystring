const querystring = require('querystring');
const express = require('express');
const port = 8081;
let app = express();
let as = "number1=12&number2=16&number3=19";
let json = querystring.parse(as); // {number1:"12",Number2:"16",Number3:"19"}
querystring.stringify(json);

console.log(json);
//eddigjo!

console.log(json.number1);
console.log(json.number2);
console.log(json.number3);

console.log(json.number1*json.number2*json.number3);

app.get('/multiply', (req, res)=>{
    let objectm = {
        result: 3648 
    };
    res.send(objectm);
});


app.listen(port, ()=>{
    console.log('This site is running on the 8081 port.');
});


/*
const multiply = (number1, number2, number3)=>{
    return number1 * number2 * number3;
};
let resulMultiply = multiply(number1, number2, number3);
console.log(resulMultiply);
*/