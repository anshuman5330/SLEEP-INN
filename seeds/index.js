const mongoose=require('mongoose');
const india=require('./cities');
const {fname, mname, lname}=require('./seedHelpers');
const Campground=require('../models/campground');


const url = 'mongodb://127.0.0.1/likedb';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Database connected");
  }).catch(error => {
    console.log("MongoDB connection error:", error);
  });


const delAll= async()=>{    
    await Campground.deleteMany({});// delete all prev Campgrounds
}

const createRoom=()=>{
    const floor=Math.floor(Math.random()*5)+5;// floor: 5 to 9
    const maxRoom= Math.floor(Math.random()*5)+10;// floor: 10 to 14

    const room=[];
    for(let i=1;i<floor;i++){
        for(let j=1;j<maxRoom;j++){
            room.push(i*100+j);
        }
    }
    return room;
}

const old_previewImages=[
    "https://source.unsplash.com/collection/10574893//640x480",
    "https://source.unsplash.com/collection/10574893/640x480",
    "https://source.unsplash.com/collection/178001/640x480",
    "https://source.unsplash.com/collection/3989638/640x480",
    "https://source.unsplash.com/collection/548932/640x480",
    "https://source.unsplash.com/collection/291441/640x480",
    "https://source.unsplash.com/collection/4hPdOIXSCKs/640x480",
    "https://source.unsplash.com/collection/494263/640x480",
    "https://source.unsplash.com/collection/Ho3Lixi-u3U/640x480",
    "https://source.unsplash.com/collection/966345/640x480",
    "https://source.unsplash.com/collection/qpAMAJhY5Og/640x480",
    "https://source.unsplash.com/collection/1309006/640x480",
    "https://source.unsplash.com/collection/73591262/640x480",
    "https://source.unsplash.com/collection/m7OilTiMRT8/640x480",
    "https://source.unsplash.com/collection/B3OBN454oYQ/640x480",
    "https://source.unsplash.com/collection/514990/640x480",
    "https://source.unsplash.com/collection/v_cJ1L1gHl0/640x480",
    "https://source.unsplash.com/collection/3319103/640x480",
    "https://source.unsplash.com/collection/9475907/640x480",
    "https://source.unsplash.com/collection/1118894/640x480",
    
    
    "https://source.unsplash.com/collection/10574893/960x720",
    "https://source.unsplash.com/collection/178001/960x720",
    "https://source.unsplash.com/collection/3989638/960x720",
    "https://source.unsplash.com/collection/548932/960x720",
    "https://source.unsplash.com/collection/291441/960x720",
    "https://source.unsplash.com/collection/4hPdOIXSCKs/960x720",
    "https://source.unsplash.com/collection/494263/960x720",
    "https://source.unsplash.com/collection/Ho3Lixi-u3U/960x720",
    "https://source.unsplash.com/collection/966345/960x720",
    "https://source.unsplash.com/collection/qpAMAJhY5Og/960x720",
    "https://source.unsplash.com/collection/1309006/960x720",
    "https://source.unsplash.com/collection/73591262/960x720",
    "https://source.unsplash.com/collection/m7OilTiMRT8/960x720",
    "https://source.unsplash.com/collection/B3OBN454oYQ/960x720",
    "https://source.unsplash.com/collection/514990/960x720",
    "https://source.unsplash.com/collection/v_cJ1L1gHl0/960x720",
    "https://source.unsplash.com/collection/3319103/960x720",
    "https://source.unsplash.com/collection/9475907/960x720",
    "https://source.unsplash.com/collection/1118894/960x720"
]

const previewImages=[
    "https://source.unsplash.com/collection/10574893/1600x900",
    "https://source.unsplash.com/collection/178001/1600x900",
    "https://source.unsplash.com/collection/3989638/1600x900",
    "https://source.unsplash.com/collection/548932/1600x900",
    "https://source.unsplash.com/collection/291441/1600x900",
    "https://source.unsplash.com/collection/4hPdOIXSCKs/1600x900",
    "https://source.unsplash.com/collection/494263/1600x900",
    "https://source.unsplash.com/collection/Ho3Lixi-u3U/1600x900",
    "https://source.unsplash.com/collection/966345/1600x900",
    "https://source.unsplash.com/collection/qpAMAJhY5Og/1600x900",
    "https://source.unsplash.com/collection/1309006/1600x900",
    "https://source.unsplash.com/collection/73591262/1600x900",
    "https://source.unsplash.com/collection/m7OilTiMRT8/1600x900",
    "https://source.unsplash.com/collection/B3OBN454oYQ/1600x900",
    "https://source.unsplash.com/collection/514990/1600x900",
    "https://source.unsplash.com/collection/v_cJ1L1gHl0/1600x900",
    "https://source.unsplash.com/collection/3319103/1600x900",
    "https://source.unsplash.com/collection/9475907/1600x900",
    "https://source.unsplash.com/collection/1118894/1600x900",
    
    
    "https://source.unsplash.com/collection/10574893/800x450",
    "https://source.unsplash.com/collection/178001/800x450",
    "https://source.unsplash.com/collection/3989638/800x450",
    "https://source.unsplash.com/collection/548932/800x450",
    "https://source.unsplash.com/collection/291441/800x450",
    "https://source.unsplash.com/collection/4hPdOIXSCKs/800x450",
    "https://source.unsplash.com/collection/494263/800x450",
    "https://source.unsplash.com/collection/Ho3Lixi-u3U/800x450",
    "https://source.unsplash.com/collection/966345/800x450",
    "https://source.unsplash.com/collection/qpAMAJhY5Og/800x450",
    "https://source.unsplash.com/collection/1309006/800x450",
    "https://source.unsplash.com/collection/73591262/800x450",
    "https://source.unsplash.com/collection/m7OilTiMRT8/800x450",
    "https://source.unsplash.com/collection/B3OBN454oYQ/800x450",
    "https://source.unsplash.com/collection/514990/800x450",
    "https://source.unsplash.com/collection/v_cJ1L1gHl0/800x450",
    "https://source.unsplash.com/collection/3319103/800x450",
    "https://source.unsplash.com/collection/9475907/800x450",
    "https://source.unsplash.com/collection/1118894/800x450"
]






const fname_seedDB= async()=> {
    for(let i=0; i<100;i++){
        const rand406=Math.floor(Math.random()*406);    // multiply with n if want range= [0,n);
        const rand6=Math.floor(Math.random()*6);
        const rand22=Math.floor(Math.random()*22);
        const rooms=createRoom();

        // images[]:
            const previewImg={url:previewImages[i%previewImages.length], filename:'preview'}
            const lobbyImg={url:"https://source.unsplash.com/collection/21208650/1600x900",filename:'lobbyImg'}
            const roomImg={url:"https://source.unsplash.com/collection/3819529/1600x900",filename:'roomImg'}
            const bathroomImg={url:"https://source.unsplash.com/collection/11507701/1600x900",filename:'bathroomImg'}
        const c=new Campground({
            location:`${india.location[rand406].city}, ${india.location[rand406].admin_name}`,
            name:`${fname[rand6]} ${mname[rand22]}`,
            price: 700+rand22*100,
            description: "Nice hotel with good view. Luxary ammenaties, servies and room. Very clean and hygenic environment. Family friendly atmosphere. No pets allowed",
            city:india.location[rand406].city,
            state:india.location[rand406].admin_name,
            image:[previewImg,lobbyImg,roomImg,bathroomImg],
            room: rooms,
            //unOccupied: rooms,
            //author:'649cf04027723364a299e1ad',
        });
        await c.save();
    }
}
const lname_seedDB= async()=> {
    for(let i=0; i<100;i++){
        const rand406=Math.floor(Math.random()*406);
        const rand11=Math.floor(Math.random()*11);
        const rand22=Math.floor(Math.random()*22);

        // images[]:
            const previewImg={url:previewImages[i%previewImages.length], filename:'preview'}
            const lobbyImg={url:"https://source.unsplash.com/collection/21208650/1600x900",filename:'lobbyImg'}
            const roomImg={url:"https://source.unsplash.com/collection/3819529/1600x900",filename:'roomImg'}
            const bathroomImg={url:"https://source.unsplash.com/collection/11507701/1600x900",filename:'bathroomImg'}
        const c=new Campground({
            location:`${india.location[rand406].city},${india.location[rand406].admin_name}`,
            name:`${mname[rand22]} ${lname[rand11]}`,
            price: 700+rand22*100,
            description: "Hotel to witness great hositality. Couple friendly Hotels. Pets and bachelors are allowed",
            city:india.location[rand406].city,
            state:india.location[rand406].admin_name,
            image:[previewImg,lobbyImg,roomImg,bathroomImg],
            room: createRoom(),
            //author:'649cf04027723364a299e1ad',


        });
        await c.save();
    }
}

const seedDB= async()=>{
    delAll().   // deleteAll THEN insert Data
    then(async ()=>{
        console.log("Deletion of previous Data Complete");
        await fname_seedDB();
        await lname_seedDB();
        console.log("Insertion Complete");
        await mongoose.connection.close(); // close Connection ONLY AND ONLY after Insertion
        console.log("Server Closed");
    })
    .catch((err)=>{
        console.log("Can't delete Items. Something went Wrong")
        console.log(err)
    })
}

seedDB()// calling of Complete function


