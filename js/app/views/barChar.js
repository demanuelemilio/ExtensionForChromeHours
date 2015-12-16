define([
	'backbone',
  'app/models/hora',
	'app/collections/horas',
  'app/views/grafiti',
	'd3'],
	 function(Backbone, ModelHora, CollectionHora, ViewGrafiti  ,d3) {
   
    var barChart = Backbone.View.extend({



        resultado : null,

       initialize:function(options){

        var arrayHoras =[];
        var start = 0;
        var end = 10;
        var subCollection;
        this.resultado = options.collection;
       

       },
       
         
      
      render:function(options){

         this.$el.empty();  
         $("#barView").empty();        
       
         var data = [];
         var arraySameDates = [];
         var i = 0;
         var dates = [];
         // var resultado = options.collection;
         this.collection =  new CollectionHora();

         if(!this.resultado){
            
              this.collection.fetch();
         }else{

             for(var i = 0 in this.resultado)
             {                  
                  var did = this.resultado[i].id;                  
                  this.collection.push(this.resultado[i]);
             }

              

         }


        
         
         _.each(this.collection.slice(0,500) , function(hora){
                  var objDate =  this.sameDate(hora);
                  
                  if(!arraySameDates.length)
                      arraySameDates.push(objDate);
                  else{
                    var inserted = false;
                    for(var k = 0;k < arraySameDates.length; k++)
                    {
                        if(arraySameDates[k].date == objDate.date)
                           {
                            arraySameDates[k].times = objDate.times;
                            arraySameDates[k].id = objDate.id;
                            inserted = true;
                           }

                    }
                    if(!inserted)
                       arraySameDates.push(objDate);
                  }
                  
                  
         },this);
        
        var obj, arrayObj = [];
        for(var l=0 ;l<arraySameDates.length; l++){

           dates[l] = arraySameDates[l].date;
           data[l]  = this.toDate( arraySameDates[l].id );
           obj = {
                 
                 value :  this.toDate( arraySameDates[l].id ),
                 label :   arraySameDates[l].date.toString()
           }
           arrayObj.push(obj);

        }

       

         

         var maxValueHoras = Math.round(d3.max(arrayObj,function(d){return d.value}));
         var minValueHoras = d3.min(arrayObj,function(d){return d.value});


        
         


         


      	// var svg =  d3.select(this.el)
       //                .append("svg")
       //                .attr({
      	//  	                    width:800,
       //                        height:200,
      	//               });


    
                
      //             var heightScale = d3.scale.linear()
      //                  .domain([0,d3.max(arrayObj,function(d){return d.value;})])
      //                  .range([1,200]);
      //             return heightScale;
    

        // var color = d3.scale.linear()
        //      .domain([0,d3.max(arrayObj,function(d){return d.value;})])
        //      .range(["green","red"]);

        var color = d3.scale.category20c(); 
        
        var arrayPruebaSinNada =[]; 

        var pr1 = {
           value : 1,
           label : "2014/7/18"
        }
         var pr2   = {
           value : 10,
           label : "2014/7/17"
        }
         var pr3   = {
           value : 2,
           label : "2014/7/16"
        }
         var pr4 = {
           value : 6,
           label : "2014/7/15"
        }
         var pr5 = {
           value : 1,
           label : "2014/7/14"
        }
         var pr6 = {
           value : 6,
           label : "2014/7/13"
        }
         var pr7 = {
           value : 13,
           label : "2014/7/12"
        }
         var pr8 = {
           value : 10,
           label : "2014/7/11"
        }
         var pr9 = {
           value : 2,
           label : "2014/7/10"
        }
         var pr10 = {
           value : 10,
           label : "2014/7/09"
        }
         var pr11 = {
           value : 17,
           label : "2014/7/08"
        }
         var pr12 = {
           value : 9,
           label : "2014/7/07"
        }
         var pr13 = {
           value : 10,
           label : "2014/7/06"
        }
         var pr14 = {
           value : 11,
           label : "2014/7/05"
        }
         var pr15 = {
           value : 10,
           label : "2014/7/04"
        }

         var pr16 = {
           value : 10,
           label : "2014/7/02"
        }
        var pr17 = {
           value : 10,
           label : "2014/7/01"
        }
        var pr18 = {
           value : 10,
           label : "2014/6/30"
        }
        var pr19 = {
           value : 10,
           label : "2014/6/29"
        }
        var pr20 = {
           value : 8,
           label : "2014/6/28"
        }

         var pr21 = {
           value : 8,
           label : "2014/6/27"
        }
         var pr22 = {
           value : 8,
           label : "2014/6/26"
        }
         var pr23 = {
           value : 4,
           label : "2014/6/25"
        }
         var pr24 = {
           value : 8,
           label : "2014/6/24"
        }
         var pr25 = {
           value : 8,
           label : "2014/6/23"
        }
         var pr26 = {
           value : 6,
           label : "2014/6/22"
        }
         var pr27 = {
           value : 1,
           label : "2014/6/21"
        }
         var pr28 = {
           value : 10,
           label : "2014/6/20"
        }
         var pr29 = {
           value : 2,
           label : "2014/6/19"
        }
         var pr30 = {
           value : 8,
           label : "2014/6/18"
        }







     

        
        arrayPruebaSinNada.push(pr1);
        arrayPruebaSinNada.push(pr2);
        arrayPruebaSinNada.push(pr3);
        arrayPruebaSinNada.push(pr4);
        arrayPruebaSinNada.push(pr5);
        arrayPruebaSinNada.push(pr6);
        arrayPruebaSinNada.push(pr7);
        arrayPruebaSinNada.push(pr8);
        arrayPruebaSinNada.push(pr9);
        arrayPruebaSinNada.push(pr10);
        arrayPruebaSinNada.push(pr11);
        arrayPruebaSinNada.push(pr12);
        arrayPruebaSinNada.push(pr13);
        arrayPruebaSinNada.push(pr14);
        arrayPruebaSinNada.push(pr15);
        arrayPruebaSinNada.push(pr16);
        arrayPruebaSinNada.push(pr17);
        arrayPruebaSinNada.push(pr18);
        arrayPruebaSinNada.push(pr19);
        arrayPruebaSinNada.push(pr20);
        arrayPruebaSinNada.push(pr21);
        arrayPruebaSinNada.push(pr22);
        arrayPruebaSinNada.push(pr23);
        arrayPruebaSinNada.push(pr24);
        arrayPruebaSinNada.push(pr25);
        arrayPruebaSinNada.push(pr26);
        arrayPruebaSinNada.push(pr27);
        arrayPruebaSinNada.push(pr28);
        arrayPruebaSinNada.push(pr29);
        arrayPruebaSinNada.push(pr30);


        
       arrayPruebaSinNada = arrayPruebaSinNada.slice(0,500);



        var yScale = d3.scale.ordinal()
             .domain([0, Math.round(d3.max(arrayObj,function(d){return d.value;}))  ])
             .range([199,0]);



        var xScale = d3.scale.ordinal()             
             .domain(arrayObj.map(function(d){return d.label;}))            
             .rangeBands([0,arrayObj.length]);           
            



             


        var xAxis = d3.svg.axis().scale(xScale).orient("top");
        var yAxis = d3.svg.axis().scale(yScale).orient("left");


        var zoom = d3.behavior.zoom()
          .x(xScale)         
          .scaleExtent([1, 1000])
          .on("zoom", zoomed);


        function zoomed() {
            svg.select(".axis").call(xAxis);           
         }

          var svg =  d3.select(this.el)
                      .append("svg")
                      .attr({
                              width:1000,
                              height:200,
                      });
                      





       

      if(arrayObj.length > 1)
        {
          
          svg.append("g").attr({
                  "class":"x axis",         
                  transform: "translate (" + [0,0] + ")"                  
                }).call(xAxis)
                .selectAll("text")          
                   .style("visibility","hidden");
                   
                
                svg.append("g").attr({
                  "class":"y axis",
                  transform: "translate (" + [30,200-d3.max(arrayObj,function(d){return d.value*10;})] + ")"                 
                }).call(yAxis);
        
        }


       

        if(arrayObj.length == 1 && arrayObj[0].value > 0)
        {

          
          svg.append("g").attr({
                  "class":"axis",         
                  transform: "translate (" + [30,200] + ")"                                    
                }).call(xAxis)
                .selectAll("text")          
                   .style("visibility","hidden");          
              
                svg.append("g").attr({
                  "class":"axis",
                  transform: "translate (" + [30,200-d3.max(arrayObj,function(d){return d.value*10;})] + ")"
                   
                }).call(yAxis);        
        }

        



        // svg.append("text")
        //     .attr("class", "y label")
        //     .attr("text-anchor", "start")
        //     .attr("y", 180)
        //     .attr("x", 180)
        //     .attr("dy", "1.75em")
        //     .attr("transform", "")
        //     .text("Hours Bar Chart");

       
        

      	svg.selectAll("rect")
      	                    .data(arrayObj)
      	                    .enter()
      	                    .append("rect")
      	                    .attr({
                                 x: function(d,i){return (i*31)+30},                                
                                 y: function(d,i){return 200 - (d.value*10)},
                                 width: 30,
                                 height: function(d){return  (d.value*20)},
                                 fill: color                                 
      	                    })
                            .on("mouseover",function(d,i){

                                d3.select(this).attr({
                                  fill: "orange",                                
                                 });
                                svg.append("text")
                                  .attr({
                                    id:"date",
                                    x: function(){return (i*31)+30;},                                   
                                    y: function(){return 190 - (d.value*10);},                                   
                                    fill:"orange",
                                  })
                                  .text(function(){return d.label;})
   
                            })
                            .on("mouseout",function(d){

                              d3.select(this).attr({
                                  fill: color
                              });
                              svg.select("#date").remove();

                            });
                            

        return this;
      },

      toDate:function(arrayIDHora){

        
        var totalResult = 0;
        var date = 0;

        for(var i = 0;i<arrayIDHora.length; i++)
        {
            var id = arrayIDHora[i];
            var model = this.collection.get(id);

            date = model.get("date").toString();

            var a = model.get("hourIn");
            var b = model.get("hourOut");
            
            if(b.trim().length>0)
            {
             
                // console.log("fecha A " + a );
                // console.log("fecha B " + b );

                var nowA = new Date();
                var nowB = new Date();
           
                nowA.setHours(a.substr(0,a.indexOf(":")));
                nowA.setMinutes(a.substr(a.indexOf(":")+1));
                nowA.setSeconds(0);
                
                nowB.setHours(b.substr(0,b.indexOf(":")));
                nowB.setMinutes(b.substr(b.indexOf(":")+1));
                nowB.setSeconds(0);

                // console.log("Parseando a Date  : datein: " + nowA + " dateOut: " + nowB );// + " diferencia entre ambos ::::" + nowA.getTime());        
                // console.log("Diferencia entre ambas fechas ::::" + (nowB.getTime() - nowA.getTime()));
                var result = (nowB.getTime()-nowA.getTime())/(1000*60);// minutes
                result = result/60; //hours
                var resultString = result.toString();

                if(resultString.indexOf("-") == 0)
                   { 
                      result = resultString.substr(resultString.indexOf("-")+1);
                      result = parseInt(result);
                   }
                totalResult += result;
              }//end if
          }//end for  
          return totalResult;
         

      },

      sameDate:function(date){
       

        var dateItem = date.get("date");                

        var equalsDates = this.collection.where({date:dateItem});

        
        var idModel = [];
        for( var k = 0 in equalsDates)
        {
          idModel[k] = equalsDates[k].id
        }

        var objDate = {
             date:  dateItem,
             times: equalsDates.length,
             id: idModel
        };

        return objDate;
   
      }


      
    });
   
    return barChart; 
});