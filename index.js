const express = require('express');

const app = express();

app.delete('/users/:id', (request, response) => {
    console.log(request.params.id);
    return response.json({ message: 'Hello World' });
});

app.listen(3333);