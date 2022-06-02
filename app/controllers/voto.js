const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Voto = require('../models/Voto');
const User = require('../models/user');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const Votos = await Voto.find();

        return res.send({Votos});
    } catch (err) {
        return res.status(400).send({error:'Error loading Votos'});
    }
    res.send({user: req.userId}); 
});

router.get('/validar/:VotoId', async (req, res) => {
    res.send({user: req.userId}); 
});

router.post('/', async (req, res) => {
    // console.log(req.body.enquete, req.body.voto, req.userId)
    try {
        const enquete = {"_id":req.body.enquete};
        if(await Voto.findOne({'enquete': req.body.enquete, 'user': req.userId})){
            return res.send({error:"Usuario ja votou nesta enquete"});
        }
        else{
            const voto = await Voto.create({...req.body, user: req.userId});
            return res.send(voto);
        }
    
    } catch (err) {
        console.log(err);
        return res.status(400).send({error:'Error creating new Voto'})
    }
 
});

// router.put('/:VotoId', async (req, res) => {
//     res.send({user: req.userId}); 
// });

// router.delete('/:VotoId', async (req, res) => {
//     res.send({user: req.userId}); 
// });

module.exports = app => app.use('/Votos', router)