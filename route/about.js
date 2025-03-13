const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {title: "About.. about getting so confuse with this ejs stuff"})
    // res.send("This is the about page");
});

module.exports = router