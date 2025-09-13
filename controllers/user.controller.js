const sequelize = require('../db/db')
const User = require('../models/user.model')

const getAllUser = async(req,res)=>{
    try{
        // const getUsers = await User.findAll()
        let getUsers;
        // if(!getUsers.length) return res.status(400).json({message:"No User created yet!"})
        let result = getUsers ? getUsers : {message:"this is demo data!"}
        res.status(200).json({message:"Users fetched successfully!",users:result})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:"Error in fetching all users!"})
    }
}

const createUser = async(req,res) =>{
    try{
        const requestBody = req.body 
        if(!requestBody) return res.status(400).json({message:"Request body not provided!"})

        // const newUser = await User.create(requestBody)
        
        res.status(200).json({message:"User created successfully!",user:{message:"demo data for user creation!"}})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:"Error in creating user!"})
    }
}

module.exports = {getAllUser,createUser}