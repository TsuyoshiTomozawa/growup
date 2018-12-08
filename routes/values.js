'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const uuid = require('node-uuid');
const Values = require('../models/values');
const GoodThings= require('../models/goodThings');

router.get('/new', authenticationEnsurer, (req, res, next) => {
  res.render('new', { user: req.user });
});

router.post('/', authenticationEnsurer, (req, res, next) => {
  const valuesId = uuid.v4();
  const updatedAt = new Date();

  Values.create({
    valuesID: valuesId,
    Goal: req.body.goal,
    memo: req.body.memo,
    createdBy: req.user.id,
    updatedAt: updatedAt
  }).then((value) => {
    const array = [req.body.goodThings1, req.body.goodThings2, req.body.goodThings3];
    const goodThings = array.map((goodThing) => {
        return {
          context: goodThing,
          valuesId: value.valuesID
        };
      });
      console.log(value.valuesID);
      GoodThings.bulkCreate(goodThings).then(() => {
        res.redirect('/values/' + value.valuesID);
      });
    });
    
});


module.exports = router;