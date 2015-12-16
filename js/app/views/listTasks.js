define(['backbone',
        'app/views/task'], 
  function(Backbone,Task) {
   
        var name = Backbone.View.extend({


         tagName:"table",

         className:"table table-condensed",

         initialize:function(){
          this.collection.on("add",this.render,this);
         },

         render:function(){
          this.$el.empty();
          this.collection.each(this.addTasks,this);
          return this;
         },

         addTasks:function(tarea2){
              var tarea =  new Task({model: tarea2});
              this.$el.append(tarea.render().el);          
         }

        });
   
    return name; 
});