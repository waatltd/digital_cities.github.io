$( document ).ready(function() {
  // Open menu after clicking on hamburger.
  $( "#hamburger-trigger" ).click(function() {
      $( "#hamburger-menu" ).addClass( "is-visible" );
  });

  // Close menu after clicking on overlay.
  $( "#hamburger-close" ).click(function() {
      $( "#hamburger-menu" ).removeClass( "is-visible" )
  });
});
