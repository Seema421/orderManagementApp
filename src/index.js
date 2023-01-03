
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./route/router")
mongoose.set('strictQuery', true)

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/",router)

mongoose.connect("mongodb+srv://Seema:C5PtEdt23kmtx9ov@cluster0.gjunl.mongodb.net/Personal?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});