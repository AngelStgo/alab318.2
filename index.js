import express from 'express';
const app = express();
const PORT = 3000;
import bodyParser from 'body-parser';
import morgan from 'morgan';

// const aboutRoute = require('./route/about')
// const greetRoute = require('./route/greet')
// const imageRoute = require('./route/image')

import aboutRouter from './route/about.js';
import greetRouter from './route/greet.js';
import imageRouter from './route/image.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// whatever data you add in folders, add it in here as a const variable = the route of the file./

//set the view engine as the ejs
app.set('view engine', 'ejs' )

app.use(express.static('images'))

app.use('/about', aboutRouter)
app.use('/greet', greetRouter)
app.use('/image', imageRouter)

app.get('/', (req, res) => {
    res.render('index', {title: "Home"})
})

// app.get('/', (req, res) => {
//     res.send("We are at home page");
// });

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    res.send("Form has been submited!")
})



app.listen(PORT, () =>  {
    console.log(`Server running on port${PORT}`);
})