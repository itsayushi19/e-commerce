const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./utils/database');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/add_product', (req,res) => {
    console.log('Submitted');
    console.log(req.body);
    db.execute(`INSERT INTO products (id, name, price) VALUES (5, '${req.body.name}','${req.body.price}')`, (err, response) => {
        console.log(response);
    });
    // db.execute('SELECT * FROM products', (err, rows) => {
    //     console.log(rows);
    // });

})
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "views","add_products.html"));
})
app.get('/about', (req,res)=>{
    res.send('<h1>About</h1>');
})
app.use('/',(req,res)=>{
    res.send('<h1>404 Error Found</h1>')
})
const server = http.createServer(app);
server.listen(5000, () => {
    console.log('Server is running');
})
