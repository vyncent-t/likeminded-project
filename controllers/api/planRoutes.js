const router = require('express').Router();
const { User, Plans, Cliques, Clique_Members, Events } = require('../../models');


router.get('/', async (req, res) => {
//get all
    try {
      const planData = await Plans.findAll({
        include: [{ model: User }]
      });
      res.status(200).json(planData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    //get one
        try {
          const planData = await Plans.findByPk(req.params.id, {
            include: [{ model: User }]
          });
          res.status(200).json(planData);
        } catch (err) {
          res.status(500).json(err);
        }
      });

//create new plan
router.post('/', async (req, res) => {
    try {
    const planPostData = await Plans.create(req.body);
    res.status(200).json(planPostData);
    } catch (err) {
        res.status(500).json(err);
    }

});
//delete
router.delete('/:id', async (req, res) =>{
    try {
        const planData = await Plans.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (!planData) {
            res.status(404).json({ message: 'No plan with this id!' });
            return;
          }
          res.status(200).json(planData);
        } catch (err) {
          res.status(500).json(err);
    }
});

module.exports = router;
