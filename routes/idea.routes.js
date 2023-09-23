
const ideaController = require("../controller/idea.controller")


module.exports =(app)=>{
    app.get("/ideaApp/vi/ideas", ideaController.fetchAllIdeas)
}