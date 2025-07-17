const express = require('express');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

const app = express();
const PORT = 10800;

const products = JSON.parse(fs.readFileSync('./data/products.json', {encoding: "utf8"}));

app.use(express.json());
app.use(express.static("public"));

app.get('/products', (req, res) => {
    try {
        res.json(products);
    } catch {
        console.log(error);
        res.status(500);
    }
});

app.get('/products/:id', (req, res) => {
    try {
        res.json(products.find(item => item.id === parseInt(req.params.id)));
    } catch {
        console.log(error);
        res.status(500);
    }
});

app.get('/products/category/:id', (req, res) => {
    try {
        res.json(products.filter(item => item.category.id === parseInt(req.params.id)));
    } catch {
        console.log(error);
        res.status(500);
    }
});

app.get('/products/find/:name', (req, res) => {
    try {
        res.json(products.filter(item => item.name.toLowerCase().indexOf(req.params.name.toLowerCase()) !== -1));
    } catch {
        console.log(error);
        res.status(500);
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));