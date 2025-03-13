const express = require('express')
const router = express.Router()

router.get('/:name', (req, res ) => {
    const {name} = req.params;
    // res.send("Hello human")
    res.render('greet', {title:"Greetings", name: "Batata Frita" }) //not able to render name value
})


module.exports = router 