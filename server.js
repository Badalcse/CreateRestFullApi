const express = require("express");


const app = express();

app.use(myMiddleware);

function myMiddleware (req, res, next){
    console.log("Insert the middle ware i created");
    next();

}

require("./routes/idea.routes")(app);

app.listen(8080,()=>{
    console.log("server started");
})