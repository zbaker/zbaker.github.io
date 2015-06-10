// My Scripts


// Click Photography
$('.ps').click( function() {
  
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
  $('.illustrator').addClass('hide');

});

// Click Illustration
$('.ai').click( function() {
  
    if ( $('img').hasClass('hide') ) {
    	$('img').removeClass('hide'); 
    }
    $('.photoshop').addClass('hide');
  
});

// Show All 
$('.all').click( function() {
  
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  };
  
});

