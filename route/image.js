import express from 'express';
import {Router} from 'express';
import path from 'path';

imageRouter.get('/', (req, res) => {
    res.render('image', {title:"ImagePage"})
})

imageRouter.post('/download-image', (req, res) => {
    const {image} = req.body
    const filePath = path.join(__dirname, `../images/`, image)
    res.download(filePath)
})

export default imageRouter;
