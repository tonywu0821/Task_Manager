const router = require('express').Router();
let Designee = require('../models/designee.model');

router.route('/').get((req, res) => {
  Designee.find()
    .then(designee => res.json(designee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newDesignee = new Designee({name});
  newDesignee.save()
    .then(() => res.json('Designee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Designee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Designee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Designee.findById(designee.params.id)
    .then(designee => {
      designee.name = req.body.name;

      designee.save()
        .then(() => res.json('Designee updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;