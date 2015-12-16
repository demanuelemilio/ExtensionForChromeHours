define([
        'backbone',
    	  'app/collections/tasks',
        'd3'], 
	 function(Backbone,CollectionTasks,d3) {
   
           var tarta = Backbone.View.extend({

               id:"pie-graph",
               
               initialize:function(){
                   
                },
                noDataToShow:function(){
                    return "No data to show";
                },

               render:function(){
                this.collection = new CollectionTasks();
                
                this.collection.fetch();
                
                 this.$el.empty();
                 
                 if(!this.collection.length)
                     this.$el.append("<br><br><h3>No data to show Pie Chart</h3>")
                             .css({ padding : "26px"});

                 else{

                      this.$el.removeAttr("style");
                   
                      var width = 200,
                      height = 175,
                      radius = Math.min(width, height) / 2;

                      

                     
                      var color = d3.scale.category20c();   

                      var arc = d3.svg.arc()
                          .outerRadius(radius - 10)
                          .innerRadius(0);

                     

                      var pie = d3.layout.pie()
                        .sort(null)
                        .value(function(d) { return d.value; });

                      var svg = d3.select(this.el).append("svg")
                          .attr("width", width)
                          .attr("height", height)
                          .append("g")
                          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                          var dataJson = this.collection.toJSON();

                          var dataP =  JSON.stringify(dataJson);    
                          var verdaderos = 0,falsos = 0;
                          var arrayOfWrap =[0,0];


                          $.each(dataJson, function(key,value){                       
                              if(value.isWrap == true) 
                                  verdaderos ++;                       
                              else
                                  falsos ++;         
                              
                          });

                          arrayOfWrap[0] = verdaderos;
                          arrayOfWrap[1] = falsos;

                          var objData, arrayData = [];

                          for(var k = 0 in arrayOfWrap){
                            objData = {
                                 value : arrayOfWrap[k],
                                 label : (k==0)?"Finnish":"Doing"
                            }                       
                            arrayData.push(objData);
                          }

                         
                        
                         var g = svg.selectAll(".arc")
                                  .data(pie(arrayData))
                                  .enter()
                                  .append("g")
                                  .attr("class", "arc");

                          g.append("path")
                                  .attr("d", arc)
                                  .style("fill", function(d,i) { return color(i);
                                     });

                         g.append("text")
                            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })                      
                            .attr("dy", ".35em")
                            .style("text-anchor", "middle")
                            .style("font-size","16px")
                            .style("font-family","Arial")
                            .text(function(d,i) {  if(d.value>0)return  arrayData[i].label; });

                        svg.append("text")
                            .attr("class", "y label")
                            .attr("text-anchor", "end")
                            .attr("y", 100)
                            .attr("x", -60)
                            .attr("dy", ".75em")
                            .attr("transform", "translate(100)")
                            .text("Tasks pie Chart");




                  }

                return this;
              }

           });

   
    return tarta; 
});