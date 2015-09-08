(function($){
$(document).ready(function() {

			$('#fullpage').fullpage({

				verticalCentered: true,

				sectionsColor: ['#000000', '#000000', '#000000', '#000000', '#000000']
				/*
				afterRender: function(){





					//playing the video

					$('video').get(0).play();

				}*/

			});

		});

		$('input:radio').screwDefaultButtons({
        		image: 'url("images/radio/radio.jpg")',
        		width: 85,
        		height: 85
    		});
})(jQuery);
