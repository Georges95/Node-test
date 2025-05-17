const express = require('express');
const app = express();
const port = 3000;

app.set("views", "templates");
app.set("view engine", "twig");

app.use(express.static('public'));

app.use((req, res, next) => {
    req.message = "message du middleware";
    next();
});

app.get('/', (req, res)=> {
    //res.sendFile(__dirname + '/index.html');
    res.render('index', { title: "Home page" });
});

app.get('/contact', (req, res)=> {
    //res.sendFile(__dirname +'/contact.html');
    res.render('contact');
});


app.listen(port, () => {
    console.log(`app listen at htpp://localhost:${port}`);
});
