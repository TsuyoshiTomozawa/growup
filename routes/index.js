var express = require('express');
var router = express.Router();
const Value = require('../models/values');

/* GET home page. */
router.get('/', (req, res, next) => {
  const title = '価値間日記';
  if (req.user) {
    Value.findAll({
      where: {
        createdBy: req.user.id
      },
      order: '"updatedAt" DESC'
    }).then((values) => {
      res.render('index', {
        title: title,
        user: req.user,
        values: values
      });
    });
  } else {
    res.render('index', { title: title, user: req.user });
  }
});

module.exports = router;
