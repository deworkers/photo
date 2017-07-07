(function( $ ){
  $.fn.textCrop = function(options) {
    var options = $.extend( {
      'size' : '50'
    }, options);

    newsText = this.text();

    if(newsText.length > options.size){
        this.text(newsText.slice(0, options.size) + '...');
    }
  };
})( jQuery );


$(document).ready(function() {

    $('.news-one__text').each(function(){
        $(this).textCrop({
            'size' : '150'
        })
    });

});

