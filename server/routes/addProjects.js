const express = require("express");
const multer = require("multer");
const path = require("path");
const Addproject = require("../models/addProjects");

const router = express.Router();

const DIR = "../client/src/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.get("/admin/projects/:id", (req, res) => {
  Addproject.aggregate([{
    $lookup: {
      from: "userInfo",
      // as: "userinfo",
      // let: {user_id: "$_id"},
      // pipeline: [
      //   {$match: {$expr: {$eq: ['$user_id', "$$user_id" ]}}}
      // ]
      localField: "user_id",
      foreignField: "_id",
      as:"userdetails"
    }
  }]).exec((err, result) => {
    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
  })
  Addproject.findById(req.params.id)
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => console.log(err));
});

router.post("/admin/projects", upload.single("photo"), (req, res) => {
  console.log("here", req.file);
  const addProjects = new Addproject({
    description: req.body.description,
    projectname: req.body.projectname,
    photo: req.file.path, 
  });
  console.log("body", req.body);
  addProjects
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      console.log(err); 
    });
});

module.exports = router;
