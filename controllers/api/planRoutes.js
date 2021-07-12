const router = require('express').Router();
const { User, Plans, Cliques, Clique_Members, Events } = require('../../models');


router.get('/', async (req, res) => {
  //get all
  try {
    const planData = await Plans.findAll({
      include: {
        model: User,
        attributes: ['id', 'username']
      }
    });
    res.status(200).json(planData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  //get one
  try {
    const planData = await Plans.findOne({
      where: {
        plan_id: req.params.id
      }
    });
    res.status(200).json(planData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create new plan
router.post('/', (req, res) => {
  Plans.create({
    plan_name: req.body.plan_name,
    plan_desc: req.body.plan_desc,
    event_id: req.body.event_id
  })
    .then(planData => {
      res.json(planData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    });
});

router.put('/:id', (req, res) => {
  // update a event by its `id` value
  Plans.update(
    {
      plan_name: req.body.plan_name,
    },
    {
      where: {
        plan_id: req.params.id,
        plan_desc: req.body.plan_desc
      }
    })
    .then(planData => {
      if (!planData) {
        res.status(404).json({ message: 'No plan found with that ID.' });
        return;
      }
      res.json(planData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const planData = await Plans.destroy({
      where: {
        plan_id: req.params.id,
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
