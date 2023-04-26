const User = require('../models/user');
const fs = require('fs');
const path = require('path');

module.exports.signIn = async(req, res) => {
    return res.render('user_sign_in', {
        title: 'Sign In',
    });
}

module.exports.signUp = async(req, res) => {
    return res.render('user_sign_up', {
        title: 'Sign Up',
    });
}

module.exports.create = async function(req, res){
    
    console.log('req.body.email', req.body.email);
    let user = await User.findOne({email: req.body.email});
    console.log(user);
        if (!user){
            let createUser = User.create(req.body);
            if(createUser) {
                return res.redirect('/users/sign-in');
            } else {
                console.log('error in creating user while signing up'); return
            }
        }else{
            return res.redirect('back');
        }
}

module.exports.createSession = async function(req, res){
    let user = await User.findOne({email: req.body.email, password: req.body.password});
    console.log(user);
    if(user) {
        return res.render('user_contact', {
            title: 'contant-form'
        });
        // return res.redirect('/');

    } else {
        return res.redirect('/users/sign-up');
    }
    
}