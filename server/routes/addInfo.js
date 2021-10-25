const express = require("express");
const multer = require("multer");
const path = require("path");
const UserInfo = require("../models/userInfo");

const router = express.Router();

const DIR = "../client/src/images/person";

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

router.get("/admin/:id", (req, res) => {
  UserInfo.findById(req.params.id)
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => console.log(err));
});

router.post("/admin", upload.single("photo"), (req, res) => {
  

  const userInfo = new UserInfo({
    fullname: req.body.fullname,
    description: req.body.description,
    photo: req.file.path,
    college: req.body.college,
    highschool: req.body.highschool,
    school: req.body.school,
    expertise: req.body.expertise,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  console.log("body", req.body);
  userInfo
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.put("admin/:id", async (req, res) => {
//   const userInfo = await UserInfo.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: {
//         fullname: req.body.fullname,
//         description: req.body.description,
//         photo: req.body.photo,
//         college: req.body.college,
//         highschool: req.body.highschool,
//         school: req.body.school,
//         expertise: req.body.expertise,
//         email: req.body.email,
//         phone: req.body.phone,
//         address: req.body.address,
//       },
//     },
//     { new: true }
//   );

//   if (!userInfo)
//     return res.status(404).send("The info requested does not exist.");

//   res.send(userInfo);
// });

// router.delete("admin/:id", async (req, res) => {
//   const userInfo = await userInfo.findByIdAndDelete(req.params.id);

//   if (!userInfo)
//     return res.status(404).send("The info requested does not exist.");

//   res.send(userInfo);
// });

module.exports = router;