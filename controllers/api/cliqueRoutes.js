const router = require('express').Router();
const { Cliques, User } = require('../../models');

router.get('/', (req, res) => {
    Cliques.findAll({
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(resData => {
        // res.json(resData)
        console.log(resData)
        // will be user res.user.username since we use it in line 7 to be passed into handlebars
        // include returns the array of users
        // we then use resData at index of .user.username
        const cliques = resData.map((clique) => clique.get({ plain: true }));
        console.log(cliques)
        res.render('main', {
            clique_name: cliques[0].cliques.clique_name
        })
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

router.put('/:id', (req, res) => {
    Cliques.update(req.body, {
        where: {
            clique_id: req.params.id
        }
    }).then((resData) => {
        res.json(resData)
    }).catch((err) => {
        res.status.apply(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    Cliques.destroy({
        where: {
            clique_id: req.params.id
        }
    }).then((resData) => {
        res.json(resData)
    }).catch((err) => {
        res.status.apply(500).json(err)
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