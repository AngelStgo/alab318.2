import express from 'express';
import {Router} from 'express'  

greetRouter.get('/:name', (req, res ) => {
    const {name} = req.params;
    // res.send("Hello human")
    res.render('greet', {title:"Greetings", name: "Batata Frita" }) //not able to render name value
});


export default greetRouter;