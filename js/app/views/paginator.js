define([
        'backbone',
        'app/views/grafiti',
         'app/views/horasCollectionView',        
        ], 
	function(Backbone,grafiti,horasCollectionView) {
         'use strict';
   
		    var PaginatorView = Backbone.View.extend({

		    	className:'footer2',

		    	html:[
		    	       '<div id="paginator">',
    				        '<ul class="pagination pagination-sm">',						 
    						    '</ul>',
					        '</div>'
		    	      ].join(''),


		    	events:{
		    		"click  a":"calculateItemPerPage"
		    	},
                        
                initialize:function(){

                	this.listenTo(this.collection,"add destroy",this.render);
                	this.$el.html(this.html);
                	this.$div = this.$("#paginator");
                	this.items_per_page = 10;
                	this.current_page;
                    this.previous_page;


                },
                render:function(){

                	var itemPages = Math.ceil(this.collection.length/ 10);

                    this.$("ul").empty();

                  	    if(itemPages >= 2)                	    
                         this.$("ul").append("<li><a href='#' value='before'>&laquo;</a></li>");
                	    for(var i = 1 ;i<=itemPages && i<4;i++)
                	    {
                	    	this.$("ul").append("<li><a href='' value='"+i+"'>  "+i+" </a></li>");
                	    }
                        if(itemPages >= 4 )
                           this.$("ul").append("<li><a href='#' value='next'>&raquo;</a></li>");
                   
                    
                    return this;
                	
                },
                unrender:function(){

                	if(this.collection.length <10)
                	   this.$("ul").empty();

                },

                calculatePages:function(){
                	 var itemPages =  Math.ceil(this.collection.length / this.items_per_page);
                	 return itemPages;
                },

                calculateItemPerPage:function(e){
                    e.preventDefault();

                    this.previous_page = this.current_page;

                    var val = $(e.currentTarget).attr("value");

                    if(val == "next" && this.current_page<this.calculatePages())
                          this.current_page = parseInt(this.current_page, 10)+1;
                    else if(val == "before")
                          this.current_page = parseInt(this.current_page, 10)-1;
                    else{

                         if(val == "next"  && this.previous_page == undefined)
                            this.current_page = this.calculatePages();
                         else if(val == "before" && this.previous_page == undefined)
                            this.current_page = 1;
                         else if(this.current_page == this.previous_page && val == "next")
                            return;
                         else
                            this.current_page = val;

                    } 
                        

                      
                    this.$("ul").children("li").removeClass("active");
                    $(e.currentTarget).parent().addClass("active");

                    if(this.current_page>this.calculatePages())
                        return ;



                    var listHours = new horasCollectionView({
                            collection: this.collection,
                            page : this.current_page
                     });
                  

                     $("#mostrar").empty().append(listHours.render().el);

                }  



		    });
		   
		    return PaginatorView; 
});