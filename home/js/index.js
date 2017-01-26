// JavaScript Document
$(document).ready(function(){
    setTimeout(function() {
         $("#lft").animate({left: '-600px' },6000);
		 $("#rgt").animate({right: '-600px'},6000); 
		 $("#lft1").animate({left: '-400px' },5000);
		 $("#rgt1").animate({right: '-400px'},5000);      
    }, 2000);
});
$(document).ready(function(){
    setTimeout(function() {
        $('#st').show();      
    }, 9000);
});
$(document).ready(function(){
    setTimeout(function() {
(function( window, document, $, Modernizr ){

  var transformProp = Modernizr.prefixed('transform');
  
  function Multiplane() {
    
    this.scrolled = 0;
    this.distance3d = 3500;
    
    this.$window = $(window);
    this.$document = $(document);

    window.addEventListener( 'scroll', this, false);
  }

  Multiplane.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };
  
  Multiplane.prototype.scroll = function( event ) {

    this.scrolled = this.$window.scrollTop() / ( this.$document.height() - this.$window.height() );
    this.transformScroll( this.scrolled );
  };

  Multiplane.prototype.transformScroll = function( scroll ) {
    var style = {};
    style[ transformProp ] = 'translate3d( 0, 0,' + ( scroll * this.distance3d ) + 'px )';
    this.$content.css( style );
  };
  
  $(function(){
    var env = new Multiplane();
    env.$content = $('#content');
  });

})( window, window.document, window.jQuery, window.Modernizr );
    }, 9000);
});