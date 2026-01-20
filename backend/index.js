const express=require('express');
const app=express();
const mongoose = require('mongoose');
const User = require('./models/usermodel');
const cors = require('cors');

app.use(cors());

app.use(express.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://b34:b34@cluster0.af2br2q.mongodb.net/');
}

app.post("/register",async(req,res)=>{
   try{
     let newuser=await new User(req.body).save();
    res.json(newuser);

   }catch(err){
    res.send(err)

   }


})

// stark123@gmail.com
app.post("/login",async(req,res)=>{
  console.log(req.body)
  let user=await User.findOne({email:req.body.email})
//   user={
//     _id:"694e8ee6d4caff080b4e16b",
// username:"stark123",
// fullname:"stark123",
// email:"stark123@gmail.com",
// password:"1234567"

// }true

//user={}//false
console.log(user)
if(user==null || !user){
  res.status(404).json({message:"User with email not found"})
}
if(req.body.password == user.password){
  res.json({message:"Success"})
}



})

app.get("/profile-page/:username",async(req,res)=>{
    let username=req.params.username;
    let user=await User.findOne({username:username})
    res.json(user);

})



app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(8888,()=>{
    console.log('Server is running on port 8888');
})