const express=require("express")
const {addTask,getAllTask,getSingleTask,updateTask,deleteTask}=require("../controllers/TaskController")

const router=express.Router()


router.post("/addTask",addTask)
router.get("/allTask",getAllTask)
router.get("/:id",getSingleTask)
router.put("/:id",updateTask)
router.delete("/:id",deleteTask)


module.exports=router



