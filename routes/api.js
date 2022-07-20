
const express = require('express');
const login = require('../model/login');
const router = express.Router()

const jwt = require('jsonwebtoken')



function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
    }
    
    let token = req.headers.authorization.split('')[1]
    if (token === 'null') {
    return res.status(401).send('Unauthorized request'); 
    }
    
    let payload = jwt.verify(token, 'secretKey')
    
    if (!payload) {
    
    return res.status(401).send('Unauthorized request')
    
    }
    
    req.userId = payload.subject;
    
    next()
    }
    
    router.get('/', (req, res) => {
    
    res.send('From API route');
    
    })

router.post('/register', (req, res) => {
let userData = req.body
let user = new login(userData);
user.save((error, registeredUser) => {
if (error) {
console.log(error)
}
else {

let payload = { subject: registeredUser._id }
let token = jwt.sign(payload, 'secretKey')
res.status(200).send({ token })

}
})

})

router.post('/login', async(req, res) => {

    let userData = req.body
    
    login.findOne({ regNum: userData.regNum }, (error, user) => {
    
    if (error) {
    }
    
    else {
    
    if (!user) {
    
    res.status(401).send('Invalid regNum')
    
    }
    
    else {
    
    if (user.password !== userData.password) {
    
    res.status(401).send('Invalid password');
    
    } else {
    
    let payload = { subject: user._id }
    
    let token = jwt.sign(payload, 'secretKey')
    
    res.status(200).send({ token })
    
    }
    
    }
    
    }
    
    })
    
    })

  
module.exports = router;

