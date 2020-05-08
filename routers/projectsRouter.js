const express = require('express');
const router = express.Router();

const Projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err)
        res.status.json({ errorMessage: "Error retreiving the project"});
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Projects.get(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err)
        res.status.json({ errorMessage: "Error retreiving the project"});
    })
});

router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({ errorMessage: "Erorr posting the project"});
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.update(id, body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "The project information could not be modified" });
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Projects.remove(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "The project could not be removed" });
    })
});




module.exports = router;