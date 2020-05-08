const express = require('express');
const router = express.Router();

const Actions = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        console.log(err)
        res.status.json({ errorMessage: "Error retreiving the action"});
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Actions.get(id)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        console.log(err)
        res.status.json({ errorMessage: "Error retreiving the action"});
    })
});

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({ errorMessage: "Erorr posting the action"});
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Actions.remove(id)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "The action could not be removed" });
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Actions.update(id, body)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "The action informatoin could not be modified"})
    })
})

module.exports = router;