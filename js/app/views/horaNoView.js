define([
    'backbone',
    'app/templates'],
      function(Backbone,Templates) {
   
    var name = Backbone.View.extend({

     template :Templates['hoursNoView'],


     tagName:'tr',

	 events:{
    	"mouseover":"showCapa",
    	"mouseout":"ocultarCapa",
    	"click #borrar":"borrar",
    },

    initialize:function(){
    	this.model.on('destroy', this.unrender, this);
		  this.model.on('add', this.render, this);
		
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
    	 console.log("intentando borrar fila");
         this.model.destroy();
    }



    });
   
    return name; 
});