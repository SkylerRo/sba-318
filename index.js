const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan")

app.use(morgan('dev'));
app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('<h1>Hey Pal</h1>')

});
app.get("/images", (req, res) => {
    res.render("images");
  });
app.get('/download', (req, res) => {
    res.render('download')
});
app.get('/Fruit', (req, res) => {
    console.log(req.url);

    res.send('<h1> Fruit Homepage</h1>')
});

app.listen (PORT, () => {
    console.log(`Server is running`);
});