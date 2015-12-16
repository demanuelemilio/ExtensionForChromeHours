  define([
       'backbone',
	     'app/views/dash',
       'app/views/grafiti',
       'app/collections/horas'
       ], 
	function(Backbone,dashView,Grafos,CollectionHours) {
      'use strict';

      var AppView = Backbone.View.extend({

      html: [
      
          '<nav class="navbar navbar-default" role="navigation" style="border-bottom:5px solid #588D53">',
              '<div class="container-fluid">',
                '<div class="navbar-header">',
                  '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">',
                     '<span class="sr-only">Toggle navigation</span>',
                      '<span class="icon-bar"></span>',
                      '<span class="icon-bar"></span>',
                      '<span class="icon-bar"></span>',
                  '</button>',    
                  '<a class="navbar-brand" href="#index">My Hours Worked</a>',                  
              '</div>',          
              '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
                  '<ul class="nav navbar-nav">',
                      '<li id="nav-dash"><a href="#index">DashBoard</a></li>',
                      '<li id="nav-metricas"><a href="#metricas">Graphs</a></li>',                    
                   '</ul>',
                   '<ul class="nav navbar-nav navbar-right">',
                       '<li id="export"><a href="#" >Export data</a> </li>',
                   '</ul>',
              '</div>',               
          '</nav>',           
          '<div id="content" class="container"></div>',
       ].join(''),


       events:{
        "click #export":"exportData"
       },

        
      views:{},

    	initialize:function(){
         this.$content = this.$("#content");
    	
    		this.views['dash'] = new dashView({
    			id:'page-dash',
    			className:'page-view'
    		});


        this.views['metricas'] = new Grafos({
          id:'page-metricas',
          className: 'page-view',

        });

    	    this.$el.html(this.html);
    	    this.$("#content").append(this.views['dash'].render().el);
         

          
    	},

      
    	
    	render:function(){
    		return this;
    	},

      setPage:function(page){
        this.$('.nav li').removeClass('active');
        this.$('.page-view').hide();
        this.$('#page-'+page).show();
        this.$('#nav-'+page).addClass('active');
      },

      exportData:function(e){
          e.preventDefault();
       
          var collection = new CollectionHours();
          collection.fetch();
       
          var csvRows = "";

           csvRows = [['Hour In ','Hour Out ', ' Date ']] + "\n";  // initialize with header row as 1st item
          $.each(collection.toJSON(),function(key,value){      
              csvRows += value.hourIn + "," + value.hourOut + "," + value.date + "\n";
          });

          var blobdata = new Blob([csvRows],{type : 'text/csv'});
          var link = document.createElement("a");
          link.setAttribute("href", window.URL.createObjectURL(blobdata));
          link.setAttribute("download", "Data.csv");
          link.click();

       }

    });
   
    return AppView; 
});