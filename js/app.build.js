({
	
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

 	 },

 	 appDir:  "../",
 	 baseUrl: "js",
 	 dir: "../../app-build",
 	 module: [
         {
         	name: "main"
         }
 	 ]



})