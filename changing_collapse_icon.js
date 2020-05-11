$(document).ready( function () {
  // Collapse
  $('.collapse').on('show.bs.collapse', function(){
    $(this).parent().find('.collapse-title').find('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  }).on('hide.bs.collapse', function(){
    $(this).parent().find('.collapse-title').find('.glyphicon-chevron-up').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
  });
});