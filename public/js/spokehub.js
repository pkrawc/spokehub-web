$(function() {
  var $we = $('.we');
  $we.on('click', function() {
    if ($we.hasClass('open')) {
      var $question = $('.conversation-title');
      $question.textTailor({
        maxFont: 72
      });
    };
  });
});
