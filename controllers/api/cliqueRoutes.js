const router = require('express').Router();
const { Cliques, User } = require('../../models');

router.get('/', (req, res) => {
    Cliques.findAll({
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(resData => {
        res.json(resData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Cliques.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(resData => {
        res.json(resData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Cliques.create({
        clique_name: req.body.clique_name
    })
        .then(resData => {
            res.json(resData)
        }).catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router