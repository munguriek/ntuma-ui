const express = require('express');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
const RegistersignUp = require('../model/registerSignUpmodel');

// Register Form registration
// router.get('/registersignup', (req, res) => {
//   res.render('registerSignUp');
// });
router.get('/', async (req, res) => {
  try {
    const registers = await RegistersignUp.find();
    if (!registers) throw Error('No registerss');

    res.status(200).json(registers);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post('/', async (req, res) => {
  // outputs the form values in the console
  console.log(req.body);
  const registersignupmodel = new RegistersignUp({
    email: req.body.email,
    phone: req.body.phone,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  try {
    const registers = await registersignupmodel.save();
    if (!registers) throw Error('Something went wrong saving the item');

    res.status(200).json(registers);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});
// router.post("/", async (req, res) => {
//   try {
//     const items = new RegistersignUp(req.body);
//     await RegistersignUp.register(items, req.body.password, (err) => {
//       if (err) { throw err }
//       // res.redirect('/adminsignin/adminsignin')
//     })
//   } catch (err) {
//      res.status(400).send('Sorry! Something went wrong.')
//      console.log(err)
//   }
// })

// router.post('/', async (req, res) => {
//   //outputs the form values in the console
//   console.log(req.body);
//   const registersignupmodel = new RegistersignUp({
//     email: req.body.email,
//     phone: req.body.phone,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     password: req.body.password,
//   });
//   // const registersignupmodel = new RegistersignUp(req.body);
//   try {
//     await registersignupmodel.save();
//     // res.redirect('/adminsignin/adminsignin');
//   } catch (err) {
//     res.send('Sorry! Something went wrong.');
//     console.log(err);
//   }
// });

module.exports = router;
