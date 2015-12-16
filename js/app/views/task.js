define(['backbone',
        'app/templates'], 
        function(Backbone,Templates) {
           
            listTasks = Backbone.View.extend({
                 
                 template: Templates['tasks'],

                 tagName:"tr",
                 className:"text-rigth",
                

                initialize:function(){
                  this.listenTo(this.model,"change",this.render);
                  this.listenTo(this.model,"destroy",this.unrender);
                },

                events:{
                  
                  "click #doit": "tachar",
                  "click #tarea": "keyPressEventHandler",
                  "click #delete":"eliminar"
                },
                
                render:function(){
                  
                     var html = this.template(this.model.toJSON());
                     this.$el.html(html);
                     return this;
                },
                keyPressEventHandler:function(event){
                  if(event.keyCode == 13)
                     this.$("#doit").click();
                },
                tachar:function(e){
                  e.preventDefault();
                  this.$el.find("#tachar").toggleClass("tachar");
                  var isWrap = this.model.get("isWrap");
                  this.model.save({"isWrap":!isWrap});
                  return this;
                },
                eliminar:function(e){
                     this.model.destroy();

                },
                unrender:function(){
                  this.remove();
                }


                });
           
            return listTasks; 
});