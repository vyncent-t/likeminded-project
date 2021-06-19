const router = require('express').Router();
const { Plans, Events} = require('../../models');

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
    .then(eventsData => res.json(eventsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find an event by its `id` value
  Events.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Plans,
      attributes: ['plan_id']
    }
  })
    .then(eventsData => res.json(eventsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

 // create a new event
router.post('/', (req, res) => {
  Events.create({
    events_name: req.body.events_name
  })
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a event by its `id` value
  Event.update(
    {
      events_name: req.body.events_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(eventsData => {
      if (!eventsData) {
        res.status(404).json({ message: 'No event found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete an event by its `id` value
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(eventsData => {
      if (!eventsData) {
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