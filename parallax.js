;(function($) {
	$.fn.parallax = function(options){
		var windowHeight = $(window).height(),
        	settings = $.extend({
            	speed: 0.15
        	}, options);
        
        return this.each(function(){
        	var $this = $(this),
				image = new Image();

			image.src = ($this.css('background-image').match(/url\s*\(["']*([^"')]+)/i) || [,])[1];

        	$(document).scroll(function(){
				var scrollTop = $(window).scrollTop(),
					offset = $this.offset().top,
					height = $this.outerHeight();

				if(offset + height <= scrollTop || offset >= scrollTop + windowHeight){
					return;
				}

				var yBgPosition = Math.round((offset - scrollTop - image.naturalHeight) * settings.speed);
    			
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
			});
		});
	}
}(jQuery));