const { ObjectId } = require('mongodb');
const Graph = require('../models/graphModel')

const graphGet = async(req,res) => {
    try {
        const page = req.query.p || 0
        const postsPerPage = 12

        const graph = await Graph.find().sort({ createdAt: -1}).skip(page* postsPerPage).limit(postsPerPage)
        res.status(200).json(graph)
    } catch (err) {
       res.status(500).json(err)
    }
}
const graphGetOne = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.query.id)) {
            const graph = await Graph.findById(req.query.id)
            res.status(200).json(graph)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        } 
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const graphGetSearch = async(req,res) => {
    const subject = req.query.subject
    const title = req.query.title
    const page = req.query.p || 0
    const postsPerPage = 12
    try {
        
        if(!subject && title) {

            const graph = await Graph.find({$text: { $search: title, $caseSensitive: false}}).skip(page* postsPerPage).limit(postsPerPage)
            res.status(200).json(graph)
        }
        else if(subject && title){

            const graph = await Graph.find({$text: { $search: title, $caseSensitive: false}, subject: subject}).skip(page* postsPerPage).limit(postsPerPage)
            res.status(200).json(graph)

        } else if(subject && !title){

            const graph = await Graph.find({ subject: subject }).sort({ createdAt: -1}).skip(page* postsPerPage).limit(postsPerPage)
            res.status(200).json(graph)
        }
    } catch (err) {
       res.status(500).json(err)
    }
}

const grpahGetSubjects = async(req,res) => {
    const type = req.query.type;
    try {      
        if(type == 'favorite'){
            const Entrepreneurship = await Graph.find({subject: 'Entrepreneurship', title: "Favorite"}).count()
            const SoftSkills = await Graph.find({subject: 'Soft Skills', title: "Favorite"}).count()
            const Chemistry = await Graph.find({subject: 'Chemistry', title: "Favorite"}).count()
            const AI = await Graph.find({subject: 'AI', title: "Favorite"}).count()
            const Statistics = await Graph.find({subject: 'Statistics', title: "Favorite"}).count()
            const Engineering = await Graph.find({subject: 'Engineering', title: "Favorite"}).count()
            const Physics = await Graph.find({subject: 'Physics', title: "Favorite"}).count()
            const Economics = await Graph.find({subject: 'Economics', title: "Favorite"}).count()
            const ScienceHistory = await Graph.find({subject: 'Science History', title: "Favorite"}).count()
            const ComputerScience = await Graph.find({subject: 'Computer Science', title: "Favorite"}).count()
            const ElectricalEngineering = await Graph.find({subject: 'Electrical Engineering', title: "Favorite"}).count()
            const WebDesign = await Graph.find({subject: 'Web Design', title: "Favorite"}).count()

            res.status(200).json({Entrepreneurship: Entrepreneurship, SoftSkills: SoftSkills, Chemistry: Chemistry, AI: AI, Statistics: Statistics, Engineering: Engineering, Physics: Physics, Economics: Economics, ScienceHistory: ScienceHistory, ComputerScience: ComputerScience, ElectricalEngineering: ElectricalEngineering, WebDesign: WebDesign})     
        } 
        else if (type == 'learned'){
            const Entrepreneurship = await Graph.find({subject: 'Entrepreneurship', title: "Learned"}).count()
            const SoftSkills = await Graph.find({subject: 'Soft Skills', title: "Learned"}).count()
            const Chemistry = await Graph.find({subject: 'Chemistry', title: "Learned"}).count()
            const AI = await Graph.find({subject: 'AI', title: "Learned"}).count()
            const Statistics = await Graph.find({subject: 'Statistics', title: "Learned"}).count()
            const Engineering = await Graph.find({subject: 'Engineering', title: "Learned"}).count()
            const Physics = await Graph.find({subject: 'Physics', title: "Learned"}).count()
            const Economics = await Graph.find({subject: 'Economics', title: "Learned"}).count()
            const ScienceHistory = await Graph.find({subject: 'Science History', title: "Learned"}).count()
            const ComputerScience = await Graph.find({subject: 'Computer Science', title: "Learned"}).count()
            const ElectricalEngineering = await Graph.find({subject: 'Electrical Engineering', title: "Learned"}).count()
            const WebDesign = await Graph.find({subject: 'Web Design', title: "Learned"}).count()

            res.status(200).json({Entrepreneurship: Entrepreneurship, SoftSkills: SoftSkills, Chemistry: Chemistry, AI: AI, Statistics: Statistics, Engineering: Engineering, Physics: Physics, Economics: Economics, ScienceHistory: ScienceHistory, ComputerScience: ComputerScience, ElectricalEngineering: ElectricalEngineering, WebDesign: WebDesign})
        }
        else if(type == 'applicable'){
            const Entrepreneurship = await Graph.find({subject: 'Entrepreneurship', title: "Applicable"}).count()
            const SoftSkills = await Graph.find({subject: 'Soft Skills', title: "Applicable"}).count()
            const Chemistry = await Graph.find({subject: 'Chemistry', title: "Applicable"}).count()
            const AI = await Graph.find({subject: 'AI', title: "Applicable"}).count()
            const Statistics = await Graph.find({subject: 'Statistics', title: "Applicable"}).count()
            const Engineering = await Graph.find({subject: 'Engineering', title: "Applicable"}).count()
            const Physics = await Graph.find({subject: 'Physics', title: "Applicable"}).count()
            const Economics = await Graph.find({subject: 'Economics', title: "Applicable"}).count()
            const ScienceHistory = await Graph.find({subject: 'Science History', title: "Applicable"}).count()
            const ComputerScience = await Graph.find({subject: 'Computer Science', title: "Applicable"}).count()
            const ElectricalEngineering = await Graph.find({subject: 'Electrical Engineering', title: "Applicable"}).count()
            const WebDesign = await Graph.find({subject: 'Web Design', title: "Applicable"}).count()

            res.status(200).json({Entrepreneurship: Entrepreneurship, SoftSkills: SoftSkills, Chemistry: Chemistry, AI: AI, Statistics: Statistics, Engineering: Engineering, Physics: Physics, Economics: Economics, ScienceHistory: ScienceHistory, ComputerScience: ComputerScience, ElectricalEngineering: ElectricalEngineering, WebDesign: WebDesign})
        }
        else if(type == 'projects'){
            const Entrepreneurship = await Graph.find({subject: 'Entrepreneurship', title: "Projects"}).count()
            const SoftSkills = await Graph.find({subject: 'Soft Skills', title: "Projects"}).count()
            const Chemistry = await Graph.find({subject: 'Chemistry', title: "Projects"}).count()
            const AI = await Graph.find({subject: 'AI', title: "Projects"}).count()
            const Statistics = await Graph.find({subject: 'Statistics', title: "Projects"}).count()
            const Engineering = await Graph.find({subject: 'Engineering', title: "Projects"}).count()
            const Physics = await Graph.find({subject: 'Physics', title: "Projects"}).count()
            const Economics = await Graph.find({subject: 'Economics', title: "Projects"}).count()
            const ScienceHistory = await Graph.find({subject: 'Science History', title: "Projects"}).count()
            const ComputerScience = await Graph.find({subject: 'Computer Science', title: "Projects"}).count()
            const ElectricalEngineering = await Graph.find({subject: 'Electrical Engineering', title: "Projects"}).count()
            const WebDesign = await Graph.find({subject: 'Web Design', title: "Projects"}).count()

            res.status(200).json({Entrepreneurship: Entrepreneurship, SoftSkills: SoftSkills, Chemistry: Chemistry, AI: AI, Statistics: Statistics, Engineering: Engineering, Physics: Physics, Economics: Economics, ScienceHistory: ScienceHistory, ComputerScience: ComputerScience, ElectricalEngineering: ElectricalEngineering, WebDesign: WebDesign})
        }

    } catch (err) {
        res.status(500).json(err)
    }
 }

const graphPost = async(req,res) => {
    try {
        const graph = await Graph.create(req.body)
        graph.save()
        res.status(200).json(graph)
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const graphEdit = async(req,res) => {
    const updates = req.body
    try {
        
        if(ObjectId.isValid(req.params.id)) {
            const graph = await Graph.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            res.status(500).json(graph)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const graphDelete = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.params.id)) {       
            const graph = await Graph.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(graph)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

module.exports = {
    graphGet,
    graphGetOne,
    graphGetSearch,
    grpahGetSubjects,
    graphPost,
    graphEdit,
    graphDelete
}
