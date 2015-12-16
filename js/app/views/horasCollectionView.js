define([
   'jquery',
   'underscore',
	 'backbone',
	 'app/views/horaView',
   'app/collections/horas'], 
	 function($, _ , Backbone , HoraView , CollectionHoras) {
   
    var horasCollectionView = Backbone.View.extend({

         tagName:'table',
      	 className:'table',


      	initialize: function(options) {    

          if(options.page>1)
          {
             this.page = options.page;
             this.collection = options.collection;

          }
           else{
              this.collection.fetch();
              this.listenTo(this.collection,"add destroy", this.render);
            }
             
            
          },
         render:function(){
           
           this.$el.empty();   

           if(this.page)
           {
            
               var start = 10*(this.page-1);
               var end   = (this.page*10);
               _.each(this.collection.slice(start,end),this.addOne,this);     
               
           }
           else
      		  {
               
                _.each(this.collection.slice(0,10),this.addOne,this);     
            } 
      		 return this;
      	 
      	 },

      	addOne:function(hora){

              var horaView = new HoraView({model:hora});
              this.$el.append(horaView.render().el);
          },


          });
   
    return horasCollectionView; 
});