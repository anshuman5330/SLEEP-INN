const mongoose = require("mongoose");

const campgroundSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{// base price (for single room)
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    location:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true,
        lowercase:true
    },
    state:{
        type:String,
        required: true,
        lowercase:true
    },
    image:[
        {
            url:String,
            filename:String
        }
    ],
    room:{
        type:[Number],
        required:true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);