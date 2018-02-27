const router = require('express').Router();
const User = require('../models/user-model');



// Sign up!
router.post('/profile', (req, res)=>{
	
	User.findOne({email:req.body.email}, (err, user){
		     
		if(err) throw err;
		if(user){
			res.redirect('/');
			console.log('already exists');
		}else{
			const newUser = new User({
				user.email : req.body.email,
				user.password : req.body.password
			}).save((err, newUser)=>{
				if(err) throw err;
				res.render('profile', {
					email: 'welcome!' + req.body.email	
				});
			})
		}
	})
})


// Log in!

// Log out!

module.exports = router;
