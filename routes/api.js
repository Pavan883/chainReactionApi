const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const Job = require('../models/job');


// User router function
router.get('/users/:id', function(req, res, next){
  console.log('user id: ' + req.params.id);
  User.findById(req.params.id, function(err,user){
      res.send(user);
  }).catch(next);
});

router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

router.put('/users/:id', function(req, res, next){
    res.send({type: 'PUT'});
});


// jobs router function
router.post('/jobs', function(req, res, next){
    Job.create(req.body).then(function(job){
        res.send(job);
    }).catch(next);
});

router.get('/jobs', function(req, res, next){
    Job.find({}, function(err, jobs){
        res.send(jobs);
    }).catch(next);
});

module.exports = router;
