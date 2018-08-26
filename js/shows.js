(function($) {
  "use strict"; // Start of use strict

function generateShowHtml(data) {
    var html = '<div class="row">';
    var rowCount = 0;
    if(typeof(data[0]) === 'undefined' || data.length == 0 ) {
      html += '<div class="col-md-12"><p class="large">Nothing Scheduled right now. Check back soon.</p></div>';
    } else {
		  $.each(data, function( index, row ) {
        if (rowCount != 0) {
          html += '<div class="w-100 hidden-md-up"></div><div class="col-md-12"><hr></div><div class="w-100 hidden-md-up"></div>';
        }
        rowCount = rowCount +1;
        html += '<div class="col-md-3">';
				html += row[0];
				html += '</div>';
				html += '<div class="col-md-8">';
				html += row[1];
        html += '&nbsp;&mdash;&nbsp';
				html += row[2];
        html += '</div>';
				html += '<div class="col-md-1"><a target="_blank" href="';
				html += row[3];
				html += '">info</a></div>';
     });
		};
		html += '</div>';
		$('#show-csv').append(html);
	}

  $(document).ready(function(){
var data;
 $.ajax({
   type: "GET",
   url: "shows.csv",
   dataType: "text",
   success: function(response) {
     data = $.csv.toArrays(response);
     generateShowHtml(data);
   },
   error: function (xhr, ajaxOptions, thrownError) {

      var html = '<div class="row"><div class="col-md-12"><p class="large">Nothing Scheduled right now. Check back soon.</p></div></div>';
		  $('#show-csv').append(html);
    }
 });
});

})(jQuery); // End of use strict
