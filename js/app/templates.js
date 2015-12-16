define([
  'underscore',
  'bootstrap',
  'jquery'
  ], 
  function( _ , $) {
    // 'use strict';

    var Templates = {};

    Templates['inicio'] = [
      
             '<td id="hourIn"><span><b><%=hourIn%></b></span></td>',
             '<td id="hourOut"><b><%=hourOut%></b><td>',
             '<td><%=date%></td>',         
             '<td id="borrar" class="noshow"><a href="#">',
               '<span id="doit" class="glyphicon glyphicon-remove"></span>',
             '</a></td>',
      
      ].join('');

      Templates['tasks'] = [

      
          '<td id="tachar">',
              '<span>',
               '<% if (isWrap){ %>',
                 '<strike><%=name%></strike>',
               '<% }else{ %>',
                  '<%=name%>',
                  '<%}%>',
      
               '</span>',
             '</td>',          
            '<td><span id="doit" class="glyphicon glyphicon-ok"></span></td>',
            '<td><span id="delete" class="glyphicon glyphicon-remove"></span></td>',
            
      ].join('');

      Templates['hoursNoView'] = [
             '<td id="hourIn"> <span><b><%=hourIn%></b></span></td>',
             '<td id="hourOut"><b><%=hourOut%></b><td>',
             '<td><%=date%></td>',
             '<td id="timeFromNow"></td>',
             '<td id="borrar" class="noshow"><a href="#">',
               '<span id="doit" class="glyphicon glyphicon-remove"></span>',
             '</a></td>',
      ].join('');

    for (var tmpl in Templates) {
    	    if (Templates.hasOwnProperty(tmpl)) {
    	        Templates[tmpl] = _.template(Templates[tmpl]);
    	    }
    	}

      return Templates;
});  