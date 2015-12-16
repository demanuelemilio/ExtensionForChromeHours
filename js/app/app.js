define([
    'jquery',
    'backbone',
	'app/views/app',
	'app/routers/router',
    'app/models/hora',
    'app/collections/horas'
    ], 
	function($,Backbone,AppView,appRouter,HoraModel,CollectionHoras) {
   
    var initialize = function(){

    	var app = new AppView();
    	$('body').append(app.render().el);
       
    	var router = new appRouter(app);
    	Backbone.history.start();

    };
   
    return {
        initialize:initialize
    }
});