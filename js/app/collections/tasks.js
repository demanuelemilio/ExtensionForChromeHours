define(['backbone',
	    'localStorage',
	    'app/models/tasks'], 
	 function(Backbone,localStorage,ModelTask) {
   
	    var collectionTasks = Backbone.Collection.extend({

	             localStorage: new Backbone.LocalStorage("TAKS"),
	             model:ModelTask,

				  comparator: function(tarea){
				     var taskTodo = tarea.get('name');
				     return taskTodo;
				   }
			    });
				   
	    return collectionTasks; 
});