const ideas = require("../models/idea.model");


exports.fetchAllIdeas = (req,res)=>{
    res.status(200).send(ideas)

}