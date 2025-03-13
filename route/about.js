const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about')
    // res.send("This is the about page");
});

module.exports = router