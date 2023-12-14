const express = require("express");
const { LoginController, GetALLData, DeleteUser, UpdateUser } = require("../controller/LoginController");
const Login = express.Router();


// create data api
Login.post("/user/login", LoginController)

// get data 
Login.get("/user/all/data", GetALLData)

// delete
Login.delete('/user/delete/:id', DeleteUser)


// put request change in data
Login.put('/user/update/:id', UpdateUser)



// export default 

module.exports = Login