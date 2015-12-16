define(['backbone',
        'app/views/pieChart',
        'app/views/barChar',
        'app/collections/horas'], 
        function(Backbone,PieChart,BarChart,CollectionHoras) {
   
  
     var grafiti = Backbone.View.extend({
   
     id:"secondView",

     html:[
         '<div id="buttonsgrafos" class="row">',
           '<form class="form-inline" id="formGraph" role="form">',
             
               '<div class="col-md-offset-3 col-sm-2 col-md-2">',
                 '<select class="form-control" id="months">',
                     '<option value="0">- Select -</option>',
                     '<option value="1">January</option>',
                     '<option value="2">February</option>',
                     '<option value="3">March</option>',
                     '<option value="4">April</option>',
                     '<option value="5">May</option>',
                     '<option value="6">June</option>',
                     '<option value="7">July</option>',
                     '<option value="8">August</option>',
                     '<option value="9">September</option>',
                     '<option value="10">October</option>',
                     '<option value="11">November</option>',
                     '<option value="12">December</option>',
                  '</select>',
                '</div>',

                '<div class="col-sm-4 col-md-4">',                    
                    '<div class="input-group">',                          
                      '<input id="years" required pattern="[0-9]{4}" type="text" class="form-control"  placeholder="Year">',
                      '<span class="input-group-btn ">',                                 
                        '<button  id="submit" type="submit" class="btn btn-default">Submit</button>',
                      '</span>',                                                                  
                    '</div>',
                '</div>',

            '</form>',
         '</div>',

         '<div id="graphViews"  class="row">',
              '<div id="pieView" class="col-sm-4"></div>',
              '<div id="barView" class="col-sm-8"></div>',
         '</div>',



     ].join(''),

     events:{
        "click #submit":"formValidation"
     },

    
     views:{},

     
     initialize:function(){

        this.$el.html(this.html);
        this.views['pieChart'] = new PieChart();
        this.views['barChart'] = new BarChart({
            id:"bar"
        });
        

     },
       
      render:function(){
         
        this.$("#pieView").append(this.views['pieChart'].render().el);
        this.$("#barView").append(this.views['barChart'].render().el);
        return this;
      },


      formValidation:function(e){

         e.preventDefault();

         var m =  $("#months").val();
         var y =  $("#years").val();
         if(y.length<4 || isNaN(y))
            {
              $(".input-group").addClass("has-error has-feedback")
                               .add('<label class="control-label" for="years"/>');
            }
         else{
              $(".input-group").removeClass("has-error has-feedback"); 
              this.formData(m,y);
         }

      },

      formData:function(m,y){

      
        var startFilter = y+"/"+m+"/"+ 1 ;
        var endFilter = y+"/"+m+"/"+ 31 ;
        
        
        this.collection = new CollectionHoras();
        this.collection.fetch();
       
        result = [];
       

        for(var i =0;i<this.collection.length;i++)
        {
            _.filter(this.collection.at(i),function(data){
                if(data.date>=startFilter && data.date<=endFilter)
                    result.push(data);

            });
        }

        

          if(result.length)
            {                        
                       this.views['barChart'] = new BarChart({
                            id:"bar",
                            collection:result
                        });
                       this.$("#barView").removeAttr("style");
                       this.$("#barView").empty().append(this.views['barChart'].render().el);
            }else{

                this.$("#barView").empty()
                                  .append("<h3> No data to show Bar Chart with this Filters</h3>")
                                  .css({ padding : "65px"});

            }
 
      }

  });


   
    return grafiti; 
});