const  {getAllUser,createUser} = require('../controllers/user.controller')
const express = require('express')
const Router = express.Router()


Router.route('/users')
      .get(getAllUser)
      .post(createUser)

module.exports = Router