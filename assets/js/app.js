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

		$('input:checkbox').screwDefaultButtons({
        		image: 'url("images/radio/checkboxSmall.jpg")',
        		width: 43,
        		height: 43
   });
})(jQuery);
