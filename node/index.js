const { response } = require('express');
var fs = require('fs');
var faker = require('faker');
const express = require('express');
const app = express();

var myCss = {
    style: fs.readFileSync('./views/style.css', 'utf8')
};

app.set('view engine', 'ejs');
app.get('/', async(req, res) => {
    var randomName = faker.name.findName();
    var { connection } = await require("./db");
    await connection.execute(`INSERT INTO people (name) VALUES ('${randomName}')`);
    const [people] = await connection.execute('SELECT * FROM `people`');
    res.render('index', { people, randomName, myCss });
})

app.listen(3000, () => {
    console.log("Running on port 3000")
});