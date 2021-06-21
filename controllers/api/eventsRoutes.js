const router = require('express').Router();
const { Plans, Events } = require('../../models');

// Import the model

// The `/api/event` endpoint

router.get('/', (req, res) => {

  Events.findAll(
    {
      include: {
        model: Plans,
        attributes: ['plan_name']
      }
    }
  )
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find an event by its `id` value
  Events.findOne({
    where: {
      event_id: req.params.id
    }
  })
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new event
router.post('/', (req, res) => {
  Events.create({
    author_id: req.body.author_id,
    plan_origin_id: req.body.plan_origin_id,
    event_name: req.body.event_name,
    event_desc: req.body.event_desc,


  })
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a event by its `id` value
  Events.update(
    {
      event_name: req.body.event_name
    },
    {
      where: {
        event_id: req.params.id
      }
    })
    .then(eventData => {
      if (!eventData) {
        res.status(404).json({ message: 'No event found with that ID.' });
        return;
      }
      res.json(eventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete an event by its `id` value
  Events.destroy({
    where: {
      event_id: req.params.id
    }
  })
    .then(eventData => {
      if (!eventData) {
        res.status(404).json({ message: 'No event found with that ID.' });
        return;
      }
      res.json(eventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;