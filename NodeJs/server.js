const express=require("express")
const cors=require("cors")
const router=require("./routes/Task.router")
const db=require("./models")
const app=express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use("/tasks",router)


app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    
    console.log(`listening to server on port ${PORT}`)
})


