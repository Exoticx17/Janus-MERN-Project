const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const { ObjectId } = require("mongodb");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That Email Is Not Registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That Password Is Incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'That Email Is Already Registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User Validation Failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const jsonsecret = 'chasefire'
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, jsonsecret, {
    expiresIn: maxAge
  });
};

// controller actions

const signup_post = async (req, res) => {
  const { email, password, admin } = req.body;

  try {
    const user = await User.create({ email, password, admin });
    const token = createToken(user._id);
    res.cookie('jwt', token, {  httpOnly: false, maxAge: maxAge * 1000 });
    console.log(res.cookie)
    res.status(201).json({ user: user._id, admin: user.admin});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, admin: user.admin});
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}

const logout_post = async (req,res) => {
    res.cookie('jwt', '', { maxAge: 1})
    res.status(200).json(req.cookies.jwt)
    console.log('RIP Cookie')
}

const users_get = async(req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}

const userGetEnroll = async(req,res) => {

  const userId = req.query.userId;

  try {
      if(ObjectId.isValid(userId)) {
          const user = await User.find({_id: userId},{enrolled: 1})
          res.status(200).json(user)
      } else {
          res.status(500).json({error: 'Not a Valid Doc Id'})
      } 
  }
  catch (err) {
      res.status(500).json(err)
  }
}

const userGetOne = async(req,res) => {
  try {
      if(ObjectId.isValid(req.params.id)) {
          const user = await User.findById(req.params.id)
          res.status(200).json(user)
      } else {
          res.status(500).json({error: 'Not a Valid Doc Id'})
      } 
  }
  catch (err) {
      res.status(500).json(err)
  }
}

const userEnroll = async(req,res) => {
  const subject = req.query.subject;
  const userId = req.query.userId
  try {   
      const user = await User.updateOne({_id: ObjectId(userId)},{$push: {enrolled: subject}})
        res.status(500).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

const userDeroll = async(req,res) => {
  const subject = req.query.subject;
  const userId = req.query.userId
  try {   
      const user = await User.updateOne({_id: ObjectId(userId)},{$pull: {enrolled: {$in : subject}}})
        res.status(500).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

const users_delete = async(req,res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {       
            const user = await User.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(user)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

const auth_status = async(req,res) => {

    res.json(req.cookies)
    
}

const admin_user= async(req,res) => {

  const changeTo= req.query.changeTo

    try {
        if(ObjectId.isValid(req.params.id)) {       
            const user = await User.updateOne({_id: ObjectId(req.params.id)},{$set: {admin: changeTo}})
            res.status(500).json(user)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

const submit_user= async(req,res) => {
  const changeTo= req.query.changeTo
    try {
        if(ObjectId.isValid(req.params.id)) {       
            const user = await User.updateOne({_id: ObjectId(req.params.id)},{$set: {submitted: changeTo}})
            res.status(500).json(user)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports ={
  admin_user,
  users_delete,
  users_get,
  userGetEnroll,
  userGetOne,
  login_post,
  logout_post,
  signup_post,
  auth_status,
  userEnroll,
  userDeroll,
  submit_user
}