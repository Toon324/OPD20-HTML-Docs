$('[data-toggle=collapse]').click(function(){
	
  	// toggle icon
  	$(this).find("small").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
  
});

$('.collapse').on('show', function () {
    alert('test');
  	// hide open menus
  	$('.collapse').each(function(){
      if ($(this).hasClass('in')) {
          $(this).collapse('toggle');
      }
    });
  
})