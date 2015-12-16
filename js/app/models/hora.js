define(
	['backbone',
	'localStorage'
	],
	function(Backbone) {
		'use strict';
   
     var horaModel = Backbone.Model.extend({

     	defaults:{

	           'hourIn':'',
	           'hourOut':'',
	           'date':'',
	           'Isodate':''
     	},
     });
   
    return horaModel; 
});