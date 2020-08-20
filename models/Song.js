const mongoose=require('mongoose');

const SongSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model("song",SongSchema)