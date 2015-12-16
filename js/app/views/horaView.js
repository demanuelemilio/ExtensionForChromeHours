define([
      'underscore',
	  'backbone',
	  'app/models/hora',
	  'app/templates'], 
	   function( _ , Backbone,HoraModel,Templates) {
   
	 var horaView = Backbone.View.extend({

	 	    template: Templates['inicio'],

		    tagName:'tr',
		    
		    events:{
		        "mouseover":"showCapa",
		        "mouseout":"ocultarCapa",
		        "click #borrar":"borrar",
		    },
		    initialize:function(){
		      
		      this.model.on('destroy', this.unrender, this);
		  	  this.model.on('change', this.render, this);
		    
		    },
		    
		        
		    render:function(){
		        
		         var html = this.template(this.model.toJSON());
		         this.$el.html(html);
		         
		         return this;
		    },

		    unrender:function(){
		    	this.remove();
		    },
		    showCapa:function(e){
		    	
		    	$(e.currentTarget).find('.noshow').show();
		    },
		    ocultarCapa:function(e){
		    	
		      $(e.currentTarget).find('.noshow').hide();   
		    },
		    borrar:function(e){
		    	 e.preventDefault();
		    	 console.log("intentando borrar fila");		         
		         this.model.destroy();          
		    }

		    });
   
    return horaView; 
});