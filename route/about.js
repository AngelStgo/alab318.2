import express from 'express'
import {Router} from 'express'

aboutRouter.get('/', (req, res) => {
    res.render('about', {title: "About.. about getting so confuse with this ejs stuff"})
    // res.send("This is the about page");
});

export default aboutRouter;