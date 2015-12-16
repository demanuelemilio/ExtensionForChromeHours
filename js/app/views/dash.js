define([
  'backbone',
  'app/views/botones',  
  'app/views/horasCollectionView',
  'app/collections/tasks',
  'app/views/botonTask',
  'app/views/listTasks',
  'app/views/paginator'
  ], 
	function(Backbone,ViewBotones,HorasCollectionView,CollectionTasks,ViewBotonTask,ViewListTasks,PaginatorView) {
		'use strict';
   
    var dashView = Backbone.View.extend({


    	html:[
       
        '<br/>',

         '<div class="app row">',

            '<div class="col-xs-9 col-sm-4 col-md-4">',
            '<div class="col-xs-12 col-sm-12 col-md-12 row" id="buttonsRow">',          
            '</div>',
                '<div id="mostrar">',
                   '<script id="listadoHorarios" type="text/x-handlebars">',
                         '<td id="hourIn"><span><b>{{hourIn}}</b></span></td>',
                         '<td id="hourOut"><b>{{hourOut}}</b><td>',
                         '<td>{{date}}</td>',         
                         '<td id="borrar" class="noshow"><a href="#">',
                           '<span id="doit" class="glyphicon glyphicon-remove"></span>',
                         '</a></td>',
                   '</script>',
                '</div>',

            '<div id="lstOculto">',
            '</div>',

     
          '<div class="oculto">',
             '<script id="listadoOculto" type="text/x-handlebars">',          
             '</script>',
          '</div>',

        '</div>',

   '<div class="col-sm-offset-2 col-xs-12  col-sm-6 col-md-6">',
       
       '<div class="row" id="buttonsRow2">',          
       '</div>',
        '<br>',
       '<div class=" col-xs-7 col-sm-7 col-md-2"><span/></div>',
       '<div  id="lstTasks">',         
          '<script id="listTasks"  type="text/x-handlebars">',
          '</script>',
       '</div>',
    '</div>',
  '</div>',
   '</div>',
     ].join(''),

     initialize:function(){
       this.$el.html(this.html);       
 	   },

  render:function(){

         //create the new hour in the collection
         var addHoursView =  new ViewBotones();//{ collection: this.collection })
         this.$("#buttonsRow").append(addHoursView.render().el);


         


         // paginator 
         var paginatorView = new PaginatorView({ collection : addHoursView.collection});
         this.$("#lstOculto").append(paginatorView.render().el);


         

         // show the boton tasks         
         // show the new hour in the list of hours        
         var allHoursView   = new HorasCollectionView({ collection: addHoursView.collection });
         this.$("#mostrar").append(allHoursView.render().el);

       

         //create the tasks collection
         var collectionTasks = new CollectionTasks();
         collectionTasks.fetch();
         //create the botton tasks
         var botonTask = new ViewBotonTask({ collection : collectionTasks });
         this.$("#buttonsRow2").append(botonTask.render().el);
          // this.$("#tasks").append(botonTasks.render().el);
         //show the tasks  render
         var allListTasks = new ViewListTasks({collection : collectionTasks });
         this.$("#lstTasks").append(allListTasks.render().el);

      
     return this;
   }



    });
   
    return dashView; 
});