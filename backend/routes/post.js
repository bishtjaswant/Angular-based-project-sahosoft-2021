var express = require('express');
var router = express.Router();
const postModel = require('../models/posts.js');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
let multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '../../src/assets/uploads/')
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage })

router.get('/all', async function (req, res, next) {
  try {
    let posts = await postModel.find({});
    if (posts.length == 0) {
      return res.status(200).json({ status: false, msg: 'no posts found' });
    } else {
      return res.status(200).json({ status: true, posts });
    }
  } catch (error) {
    return res.status(200).json({ status: false, error });

  }
});


router.post('/addpost', upload.single('image'), async function (req, res, next) {

  // testing purpose
  //        return res.json({body:req.body,file:req.file.originalname});


  try {

    let post = await new postModel({
      title: req.body.title,
      sort_desc: req.body.sort_desc || "not available",
      full_desc: req.body.full_desc,
      image: req.file.filename,
      author: req.body.author,
      isActive: true
    });

    let saved = await post.save();

    if (saved) {
      return res.status(200).json({ status: true, msg: "post added" });
    } else {
      return res.status(200).json({ status: false, msg: "failed to added" });
    }



  } catch (error) {
    return res.status(200).json({ status: false, msg: error });

  }


});


router.delete('/delete/:deleteid', async function (req, res, next) {
  //return res.status(200).json({status:true,msg:req.params});
  try {


    // first fetch uploaded file
    let uploadedImage = await postModel.findOne({ _id: req.params.deleteid }, '_id image');

    if (uploadedImage.image !== null || uploadedImage.image !== undefined || uploadedImage.image !== '') {
      // file exist delete it;
      // console.log(uploadedImage.image);
      if (fs.existsSync(`uploads/${uploadedImage.image}`)) {

        fs.unlink(`uploads/${uploadedImage.image}`,async function (err) {
          if (err) throw err;
          // return res.status(200).json({ status: true, msg: "file ddeleted" });
          let deleteid = await postModel.deleteOne({ _id: req.params.deleteid });
          if (deleteid) {
            return res.status(200).json({ status: true, msg: "post deleted" });

          } else {
            return res.status(200).json({ status: false, msg: "failed to delete posst" });

          }
        });
      } else {
        return res.status(200).json({ status: false, msg: "file does not exist" });

      }
    }


  } catch (error) {
    return res.status(200).json({ status: false, error });

  }
});




module.exports = router;
