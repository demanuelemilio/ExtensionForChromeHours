define(
	[
	'backbone',
	'localStorage',
	'app/models/hora'],
 function(Backbone,localStorage,horaModel) {
 	'use strict';
   
    var collectionHoras = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage("HORACOLLECTION"),
		model:horaModel,
		comparator:function(itemA,itemB){
		      var dateA = new Date(itemA.get('IsoDate'));
		      var a =itemA.get('hourIn');
		      var dateB = new Date(itemB.get('IsoDate'));
		      var b =itemB.get('hourIn');
		      var date  = (dateB.getTime()) - (dateA.getTime());
		     // console.log("fecha de ordenacion : " +date);
		      if(dateA>dateB)
		        return -1;
		      else if(dateA<dateB)
		        return 1;
		      else
		        return 0;     
	    }
		
    });
   
    return collectionHoras; 
});