//imort todo models

const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        //extract title and description from req body
        const {title,description} = req.body;
        //create a new Todo Obj and insert in DB
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description, updatedAt: Date.now()}
            );
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"updated successfully"
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })


    }
}
