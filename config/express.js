var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(express.static('./public'));

    app.use(function(req, res, next){
    	res.status(404).render('erros/404');
    	next();
    });
    app.use(function(erro, req, res, next){
		console.log(erro);
		logger.log('error', erro);
    	if(process.env.NODE_ENV = 'production'){
    		res.status(500).render('erros/500');
    	}    	
    	next();
    });

	return app;
}