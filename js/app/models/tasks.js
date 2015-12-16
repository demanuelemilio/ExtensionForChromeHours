define(['backbone',
	    ], 
	    function(Backbone) {
   
    var modelTask = Backbone.Model.extend({
   
          defaults:{
		       'name':'',
		       'isWrap':false,
       }
    });
   
    return modelTask; 
});