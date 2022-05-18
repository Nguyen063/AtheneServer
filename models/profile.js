const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const TutorSchema= new Schema({
    name:{
        type: String,
        require: true
    },
    thumbPath: { type: String, require: true },
    followers:{
        type: String,
        require: true
    },
    direct:{
        type: String,
        require: true
    },
    
    gender:{
        type: String,
        require: true
    },
    
    subject:{
        type: String,
        require: true
    },
    
    fee:{
        type: String,
        require: true
    },
    
    education:{
        type: String,
        require: true
    },
    
    bio:{
        type: String,
        require: true
    },
    dob:{
        type: Date,
        require: true
    },
    
    wentTo:{
        type: String,
        require: true
    },
    major:{
        type: String,
        require: true
    },
    class:{
        type: String,
        require: true
    },
    learnerGender:{
        type: String,
        require: true
    },
    teachingLocation:{
        type: String,
        require: true
    },
    teachingTime:{
        type: String,
        require: true
    },
    
    timeTable:{
        type: String,
        require: true
    },
    more:{
        type: String,
        require: false
    },
    Exps:{
        exp1:{
            type:String,
            require: false
        },
        exp2:{
            type:String,
            require: false
        },
        exp3:{
            type:String,
            require: false
        },
        Achievements:{
            ach1:{
                type:String,
                require: false
            },
            ach2:{
                type:String,
                require: false
            },
            ach3:{
                type:String,
                require: false
            }
    }
    ,
    createAt:{type: Date, default: Date.now},
    updateAt:{type: Date, default: Date.now},

}})
module.exports=mongoose.model("Profile", TutorSchema)