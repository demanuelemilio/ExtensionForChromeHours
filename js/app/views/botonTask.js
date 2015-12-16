define(['jquery',
    	'backbone'], 
    	function($,Backbone) {
		   
		    var botonTask = Backbone.View.extend({


		    	html:[
		    	
		          ' <div class="col-xs-9 col-sm-7 col-md-8">',
					    '<div class="input-group">',
					      '<input type="text" maxlength="25" placeholder="Add task" class="form-control" id="tarea">',
						       '<span class="input-group-btn">',
					     	        '<button class="btn btn-default"  type="button" id="boton">Add</button>',
					 	       '</span>',
					    '</div>',
				  '</div>',
				  
		    	].join(''),

			   
			    events:{

			      "click #boton" : "createTask",
			      "click #tarea" : "desplazar",
			      "focus #tarea" : "desplazar",
			      "blur  #tarea" : "noDesplazar"

			    },
			    initialize:function(){
			    	this.$el.html(this.html);
			    },
			    
			    createTask:function(){
			      // create a tasks
			     var taskName = this.$("#tarea").val().trim();
				     if(taskName.length>0)
				     { 			   
					       this.collection.create({
					          name:taskName
					        },{wait:true});
					       $("#tarea").val("");
				     }
			    },

			    desplazar:function(){
			       this.$el.find("#tarea").attr("size",30).show("slow");
			    },

			    noDesplazar:function(){
			      this.$el.find("#tarea").attr("size",20).show("slow");
			    },
			    render:function(){
			      
			      return this;
			    }

		    });
   
    return botonTask; 
});