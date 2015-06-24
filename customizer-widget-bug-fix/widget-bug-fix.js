jQuery(document).ready( function($) {
	
	$( document ).on( 'widget-added', function(event, widget) {
		var $saveBtn = $(widget).find('.widget-control-save');
		// let's check if the control for this widget is ready... 
		if ($saveBtn.closest('.control-section').is(':visible')) {
			// if the control for this widget is ready, let's hit apply...
			$saveBtn.click();
			widget.data('new', true);
		}
	});
	
	// update the content of the widget....
	$( document ).on( 'widget-synced', function(e,widget ,form) {
		var _widget = $('#' + widget[0].id);
		if (_widget.data('new') == true) {
			var origFocus = document.activeElement.id;
			_widget.find('.widget-content').html(form);
			document.getElementById(origFocus).focus();
			_widget.data('new', false);	
		}
	});

});
