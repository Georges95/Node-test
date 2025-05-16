const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response)=> {
    response.sendFile(__dirname +'/index.html');
});

app.get('/contact', (request, response)=> {
    response.sendFile(__dirname +'/contact.html');
});


app.listen(port, () => {
    console.log(`app listen at htpp://localhost:${port}`);
});
