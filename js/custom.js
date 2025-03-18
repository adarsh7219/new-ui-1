

// read more start
  $(".toggle_btn").click(function(){
     $(this).toggleClass("active");
    $(".show-more-income-wrapper .show-more-outer").toggleClass("active");

    if($(".toggle_btn").hasClass("active")){
      $(".toggle_text").text("Show Less");
    }
    else{
      $(".toggle_text").text("Show More");
    }
  });
  // read more end


  $(document).ready(function(){
    $("#myModal").modal('show');
});

if($('.cookie-notice').length) {
	$('.accept-cookies').on('click', function () {
		// Following code can be placed in AJAX .done		
		width = $('.cookie-notice').width();
		$('.cookie-notice').animate({
			left: '-=' + width
		}, 250, 'linear', function() {
			// animation is complete, remove element from DOM
			$(this).remove();
		});		
	});
}


// hide show attributes page start

$(document).ready(function(){
  //after load will check the checkbox is checked or not
  var check = $("#yes").prop("checked");
  if(check){
    $("#first").addClass("activeTab");
  }
  
  //click on yes
  $("#yes").on("click", function(){
    check = $(this).prop("checked");
    $("#second").removeClass("activeTab");
    $("#first").addClass("activeTab");
    
  })
  //click on No
  $("#no").on("click", function(){
    check = $(this).prop("checked");
    $("#first").removeClass("activeTab");
    $("#second").addClass("activeTab");
    console.log(check);
  })
});

// hide show attributes page end

