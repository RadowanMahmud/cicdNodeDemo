const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/add/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var sum = Number(a+b);
    res.send("The sum is : "+Number(sum));
});

app.get('/substract/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var sum = Number(a-b);
    res.send("The result is : "+Number(sum));
});


app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app