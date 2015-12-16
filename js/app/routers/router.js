define([
	'backbone',	
	],
 function(Backbone) {
    'use strict';
      var router = Backbone.Router.extend({


				routes:{
					"":"index",
			    "index":"index",
			    "metricas":"metricas"

				},
				 initialize:function(view){
                   this.appView = view;
                 },
				
				index:function(view){
                   this.appView.setPage('dash');
			    	
				},

				metricas:function(){
				   this.appView.setPage('metricas');				   				   
				   this.appView.$("#content").append(this.appView.views['metricas'].render().el);

				  }

        });
   
    return router; 
});