requirejs.config({//requirejsConfig

 baseUrl:"/js/",

 modules:['collections','models','routers','views'],
 
 paths:{  
     'jquery':'libs/jquery1.10',
     'underscore':'libs/underscore',
     'backbone':'libs/backbone',
     'handlebars':'libs/handlebars',
     'bootstrap':'libs/bootstrap.min',
     'localStorage':'libs/backbonelocalStorage',
     'd3':'libs/d3.min'
     
 },
 shim:{

 	 'underscore':{
 	 	exports:'_'
 	 },
 	 'jquery':{
 	 	exports:"$"
 	 },
 	 'backbone':{
 	 	deps:["underscore","jquery"],
 	 	exports:"Backbone"
 	 },
 	 'bootstrap': {
		deps: [	'jquery']
		}

 	 }
 
});

requirejs([
	'jquery',
	'app/app',
	'bootstrap'
	
], function ($,App,Bootstrap) {
	'use strict';
	 
	 App.initialize();
	 

});