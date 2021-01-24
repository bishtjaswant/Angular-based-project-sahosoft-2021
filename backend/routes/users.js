var express = require('express');
const userModel = require('../models/user.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  return res.status(200).json("gt users")
});

// for registeration
router.post('/',async function (req, res, next) {
  try {
    const { firstName, lastName, email, phone, password, gender, country } = req.body;

    let user = await new userModel({ firstName, lastName, email, phone, password, gender, country });
        if (user.save()) {
            return res.status(200).json({ status: true });
        } else {
          return res.status(501).json({ status: false, err });
        }
  } catch (error) {
    return res.status(501).json({ status: false, error })
  }
});


//for login
router.post("/login", async (req, res, next) => {
  try {
    let user = await userModel.findOne({ email: req.body.email } );
    if (!user) {
      return res.status(200).json({ status: false, msg: 'email not found' });
    }

    let isMatched = await user.validatePassword(req.body.password);

    if (!isMatched) {
      return res.status(200).json({ status: false, msg: 'incorect password' });
    }

    let  {_id,firstName}=user;
    return res.status(200).json({ status: true,  user:{_id,firstName}});


  } catch (error) {
    return res.status(501).json({status:false,msg:error});

  }

});


module.exports = router;
