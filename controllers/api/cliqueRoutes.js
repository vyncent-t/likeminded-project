const router = require('express').Router();
const { Cliques, User } = require('../../models');

router.get('/', (req, res) => {
    Cliques.findAll({
        include: {
            model: User
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
            clique_id: req.params.id
        },
        include: {
            model: User
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
        author_id: req.body.author_id,
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