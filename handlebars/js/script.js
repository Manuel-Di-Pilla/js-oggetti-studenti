$(document).ready(function () {
  $('.button').click(
    function () {
      text();
    }
  );
  $('.input').keydown(
    function () {
      if (event.keyCode == 13) {
        text();
      }
    }
  );
})

function text() {
  var messaggio = $('.input').val();
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {
    messaggio: messaggio,
  };
  var html = template(context);
  $('#chat').append(html);
  messaggio = $('.input').val('');
}
