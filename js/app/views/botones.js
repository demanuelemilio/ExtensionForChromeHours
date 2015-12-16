define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/hora',
  'app/collections/horas',
  ], function($, _, Backbone, ModelHora, CollectionHoras) {
   
    var botones = Backbone.View.extend({

      html:[
          '<div id="alertHour" style="display:none;" class="alert alert-warning alert-dismissable">',
          
          '</div>',
          '<div class="btn-toolbar" role="toolbar" id="botones">',
             '<button type="button" id="boton" class="btn btn-sm btn-success">CheckIn</button>',
             '<button type="button" id="botondos" class="btn btn-sm btn-danger">CheckOut</button>',
          '</div>',          
          '<br>',
          
      ].join(''),

      events: {
      	"click button#boton":"butonClick",
      	"click button#botondos": "addHourOut",
        "click .close":"closeAlert"

      },
      initialize:function(){

        this.collection = new CollectionHoras();
       
       
      },
      butonClick:function(e){
      	e.preventDefault();
       
        this.collection.fetch();      	
      	
      
      	var date  = new Date();
      	var day   = date.getDate();
        var year  = date.getFullYear();
        var month = date.getMonth()+1;
        var hour  = date.getHours();
        var minutes = date.getMinutes();
        minutes = minutes<10?'0'+minutes:minutes; 
        var horas = hour +":"+minutes;                
        var dates = year +"/"+ month + "/" + day;   
      
        var model = new ModelHora({hourIn:horas,date:dates,IsoDate:date});
        if(this.collection.length>0)
        {
            
		        var modelRow = this.collection.at(0);
		        
		        if(modelRow.get('hourOut') === ''){
		        	
              this.$("#alertHour")                                  
                      .attr("align","center")                                  
                      .html("Warning! ,you have a CheckIn yet!<button type='button' class='close' aria-hidden='true'> &times; </button>")
                      .show();              
		        }
		        else{			       

              this.collection.create(model);
			    }
	      }else{
    	   
            this.collection.create(model);
        }


      },

      addHourOut:function(e){
      	e.preventDefault();
        
        this.$(".alert").hide();
      	
      	var model =  this.collection.at(0);
      	var date  = new Date();
      	var hour  = date.getHours();
        var minutes = date.getMinutes();
        minutes = minutes<10?'0'+minutes:minutes;       
        var horas = hour +":"+minutes;            	
      
      	
      	if(model.get('hourOut'))      		
           this.$("#alertHour").attr("align","center")                                  
                               .html("Warning! ,you have a CheckOut yet!<button type='button' class='close' aria-hidden='true'> &times; </button>")
                               .show();

      	else 
      		model.save({"hourOut":horas});

      },

      closeAlert:function(e){
           e.preventDefault();
           this.$("#alertHour").hide();
      },

      render:function(){
         this.$el.html(this.html);
         return this;
      }

    });
   
    return botones;
});