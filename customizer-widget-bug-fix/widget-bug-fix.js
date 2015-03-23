jQuery(document).ready( function($) {

	$( document ).on( 'widget-added', function(event, widget) {

		var $saveBtn = $(widget).find('.widget-control-save');
		// let's check if the control for this widget is ready... 
		if ($saveBtn.closest('.control-section').is(':visible')) {
			// if the control for this widget is ready, let's hit apply...
			$saveBtn.click();
		}
	});
  // update the content of the widget....
	$( document ).on( 'widget-synced', function(e,widget ,form) {
		$('#' + widget[0].id + ' .widget-content').html(form);
	});

});
