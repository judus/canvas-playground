function scoreMeter(I) {
	I = I || {};
	I.player = I.player || null;
	I.E = $('#character-panel').find('.stat.score span.value');
	I.update = function() {
		if (I.player != null) {	
			I.E.text(I.player.score);
		}
	} 
	return I;
}

$(document).ready(function() {
	$('.collapse-child').each(function() {
		var wrapper = $(this);
		var hideable = wrapper.find('.'+wrapper.data('child'));

		wrapper.find('h4').click(function() {
			if (hideable.is(':visible') == true) {
				hideable.hide();
			} else {
				hideable.show();
			}
		}).css('cursor', 'pointer');

	});

	$('.canvas-overlay, .canvas-overlays').each(function() {
		$(this).width(CANVAS_WIDTH);
		$(this).height(CANVAS_HEIGHT);
	});

	$("[data-panel-action]").each(function() {
		var button = $(this);
		
		button.click(function() {
			var panel = $($(this).data('panel-action'));
			
			var toggle = function() {
				if (panel.is(':visible') == true) {
					canvasElement.show();
					panel.hide("slide", { direction: "right" }, 200);
				} else {
					panel.show("slide", { direction: "right" }, 200, function() {
						canvasElement.hide();
					});
				
				}
			};


			var closePanel = function(panel, callback) {
					console.log($('.canvas-overlay:visible').length);
					$('.canvas-overlay:visible').hide("slide", { direction: "right" }, 200, callback(panel));
			}

			var openPanel = function(panel, callback) {
				panel.show("slide", { direction: "right" }, 200, callback(panel));
			}

			closePanel(panel, function() {
				if ('#'+panel.id != button.data('panel-action')) {
					openPanel(panel, function() {
						//canvasElement.hide();
					});
				}

			})

		}).css('cursor', 'pointer');

	})

});

