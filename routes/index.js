var express = require('express');
var router = express.Router();
var card = require('../public/javascripts/card')

/* GET home page. */
var session;
router.get('/', function(req, res) {
  session = req.session
  if(session.user){
    res.render('home',{card})
  }else{
    res.render('index',{title:'login page'})
  }

  
});


router.get('/home',(req,res) => {
  session = req.session
  if(session.user){
    res.render('home',{card})
    
  }else{
    res.render('index',{title:'login page'})
  }

  
});



var username = "hari123"
var password ="987"

router.post('/home',(req,res)=>{
  var a = req.body
  if(username===a.USER&&password===a.PASS){
    session = req.session
    session.user=a.USER
    res.render('home',{card})
  }else if(username!== a.USER&& password !== a.PASS){
    res.render('index',{allErr:'Invalid Username and Password'})
  }else if(a.PASS!==password){
    res.render('index',{passwordErr:'Invalid Password'})
  }else if(a.USER!==username){
    res.render('index',{usernameErr:'Invalid Username'})
  }

})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
