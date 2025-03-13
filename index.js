const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// whatever data you add in folders, add it in here as a const variable = the route of the file./

app.get('/', (req, res) => {
    res.send("We are at home page");
});

app.listen(PORT, () =>  {
    console.log(`Server running on port${PORT}`);
})