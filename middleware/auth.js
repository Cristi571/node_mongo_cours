

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const mongoose = require('mongoose');



module.exports = (req, res, next) => {
    try {
        // header dans la requete ==> authorization : 'Bearer xxxxxxxxx';
        
        // Extraire le token de l'entête
        const token = req.headers.authorization.split(' ')[1];

        // Vérifier le token
        const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

        // Assigner l'id aux variables locales de réponse
        const userId = decodeToken.userId;
        res.locals.userId = userId;
        // console.log("token : %o", token)
        //res.locals.isAdmin = userId;
        next();

    } catch (error) {
        res.status(401).json({ 
            error : error | 'Authentification failed !',
            message : "Auth failed"
        });
    }
};





/* take token from request header, 
compare the client userId and the token userId */
/*
module.exports = (req, res, next) => {
    try {
        // header dans la requete ==> authorization : 'Bearer xxxxxxxxx';
        
        // Extraire le token de l'entête
        const token = req.headers.authorization.split(' ')[1];

        // Vérifier le token
        const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

        // Assigner l'id aux variables locales de réponse
        const userId = decodeToken.userId;
        res.locals.userId = userId;
        console.log("token : %o", token)
        //res.locals.isAdmin = userId;
        next();

    } catch (error) {
        res.status(401).json({ 
            error : error | 'Authentification failed !',
            message : "Auth failed"
        });
    }
};
*/