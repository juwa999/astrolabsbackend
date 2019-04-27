const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Experience = require('../models/Experience');

router.get('/test', (req,res) =>
 res.json({msg:"this is a test for the experience"}));



 router.post('/search', (req,res) =>
 {
    
    Experience
    .where({ location: req.body.location })
    .where({ type: req.body.type })
    .then(experiences => {
    
    return res.json(experiences)

      });

    });

router.post('/add', (req, res) => {


            const newExperience = new Experience({
              location: req.body.location,
              type: req.body.type,
              image: req.body.image

              
            });
      
            newExperience
            .save()
            .then(experience => res.json(experience))
            .catch(err => console.log(err));

              });
      
          

 


module.exports = router;