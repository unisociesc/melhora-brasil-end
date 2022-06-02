const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Enquete = require('../models/Enquete');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const enquetes = await Enquete.find();

        return res.send({enquetes});
    } catch (err) {
        return res.status(400).send({error:'Error loading enquetes'});
    }
    res.send({user: req.userId}); 
});

router.get('/:enqueteId', async (req, res) => {
    res.send({user: req.userId}); 
});

router.post('/', async (req, res) => {
    try {
        const enquete = await Enquete.create({...req.body, user: req.userId});
        

        return res.send({enquete});
    } catch (err) {
        return res.status(400).send({error:'Error creating new enquete'})
    }
 
});

router.put('/:enqueteId', async (req, res) => {
    res.send({user: req.userId}); 
});

// router.delete('/:enqueteId', async (req, res) => {
//     res.send({user: req.userId}); 
// });

module.exports = app => app.use('/enquetes', router)