const { ObjectId } = require('mongodb');
const Learning = require('../models/learningModel')


const learningGet = async(req,res) => {

    const page = req.query.p || 0
    const postsPerPage = 12

    try {
        
        const learning = await Learning.find().sort({ createdAt: -1}).skip(page* postsPerPage).limit(postsPerPage)
        res.status(200).json(learning)

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningGetOne = async(req,res) => {
    try {
        if(ObjectId.isValid(req.query.id)) {
            const learning = await Learning.findById(req.query.id)
            res.status(200).json(learning)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        } 
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const learningGetAccepted = async (req,res) => {
    const accepted = req.query.accepted
    try {
        
        const learning = await Learning.find({accepted: accepted})
        res.status(200).json(learning)

    } catch (err) {
        res.status(500).json(err)
    }
}
const learningGetDouble = async (req,res) => {
    const category = req.query.category;
    const accepted = req.query.accepted;
    const page = req.query.p || 0;
    const postsPerPage = 4;
    try {
        
        const learning = await Learning.find({accepted: accepted, category: category}).sort({ createdAt: -1}).skip(page* postsPerPage).limit(postsPerPage)
        res.status(200).json(learning)

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningSearch = async(req,res) => {
    const category = req.query.category
    const title = req.query.title
    const page = req.query.p || 0
    const postsPerPage = 12
    
    try {

        if(!category && title){

            const learning = await Learning.find({$text: { $search: title}, accepted: 'true'}).skip(page* postsPerPage).limit(postsPerPage)
            res.status(200).json(learning)
            
        } else if(category && title){

            const learning = await Learning.find({ $text: { $search: title}, category: category, accepted: 'true' }).skip(page* postsPerPage).limit(postsPerPage)
            res.status(200).json(learning)
        } else if(category && !title){

            const learning = await Learning.find({category: req.query.category, accepted: 'true'})
            res.status(200).json(learning)
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningAccept = async(req,res) => {

    const accepted = req.query.accepted
    const userId = req.query.userId
    const page = req.query.p || 0
    const postsPerPage = 12

   try {
    
    const learning = await Learning.find({accepted: accepted, user: userId}).skip(page* postsPerPage).limit(postsPerPage)
    res.status(200).json(learning)

   } catch (err) {
    res.status(500).json(err)
   }
}

const learningCategory = async(req,res) => {

    const category = req.query.category
    const page = req.query.p || 0
    const postsPerPage = 12

   try {
    
    const learning = await Learning.find({category: category}).skip(page* postsPerPage).limit(postsPerPage)
    res.status(200).json(learning)

   } catch (err) {
    res.status(500).json(err)
   }
}

const learningPost = async(req,res) => {
   try {
    
    const learning = await Learning.create(req.body)
    learning.save()
    res.status(200).json(learning)

   } catch (err) {
    res.status(500).json(err)
   }
}


const learningPatch = async(req,res) => {
    const updates = req.body
    try {
        if(ObjectId.isValid(req.params.id)) {
            const learning = await Learning.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            res.status(500).json(learning)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningChange = async(req,res) => {

    const changeTo = req.query.changeTo

    try {
        
        if(ObjectId.isValid(req.params.id)) {
            const learning = await Learning.updateOne({_id: ObjectId(req.params.id)}, {$set: {accepted: changeTo}})
            res.status(500).json(learning)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningMessage = async(req,res) => {

    const newmessage = req.query.newmessage

    try {
        
        if(ObjectId.isValid(req.params.id)) {
            const learning = await Learning.updateOne({_id: ObjectId(req.params.id)}, {$set: {message: newmessage}})
            res.status(500).json(learning)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const learningDelete = async(req,res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {       
            const learning = await Learning.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(learning)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
    } catch (err) {
        res.staus(500).json(err)
    }
}


module.exports = {
    learningGet,
    learningGetOne,
    learningGetAccepted,
    learningGetDouble,
    learningSearch,
    learningAccept,
    learningCategory,
    learningPost,
    learningPatch,
    learningChange,
    learningMessage,
    learningDelete,
}