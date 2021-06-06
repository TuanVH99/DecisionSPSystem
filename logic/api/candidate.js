const router = require('express').Router();
const candidateController = require('../controller/candidate');

router.get('/', async (req, res) => {
    try {
        const result = await candidateController.getBy10(req.params.offser, req.params.index);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const result = await candidateController.create(req.body.newCandidate);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router.get('/find/:id', async (req, res) => {
    try {
        const result = await candidateController.read(req.params.id)
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const result = await candidateController.update(req.params.id,req.body.data)
        res.send("update nut!");
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router.get('/calculate', async (req, res) => {
    try {
        const result = await candidateController.normalize1(req.body.list);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router
module.exports = router;