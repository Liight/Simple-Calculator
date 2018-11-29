// On number click - add number clicked to the display
$('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#decimalPoint').click(function() {
  var v = $(this).val();
  $('#answer').val($('#answer').val() + v);
  if ($('#display').val === '') {
    $('#display').val($('#answer').val());
  } else {
    $('#display').val($('#display').val() + v);
  }
});
// All Clear Button
$('#AC').click(function() {
  $('#answer').val('');
  $('#display').val('');
  $('#operation').val('');
  $('#operation').removeClass('activeAnswer');
  $('#equals').attr('onclick', '');
});
// Plus Button
$('#plus').click(function(e) {

  if ($('#answer').val() === '') {

    $('#equals').attr('onclick', '');
    return false;
  } else if ($('#operation').attr('class') == 'activeAnswer') {
    $('#operation').val($('#operation').val() + $('#plus').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  } else {
    $('#operation').val($('#operation').val() + $('#answer').val() + $('#plus').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  }
});
// Subtract Button
$('#subtract').click(function(e) {

  if ($('#answer').val() === '') {

    $('#equals').attr('onclick', '');
    return false;
  } else if ($('#operation').attr('class') == 'activeAnswer') {
    $('#operation').val($('#operation').val() + $('#subtract').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  } else {
    $('#operation').val($('#operation').val() + $('#answer').val() + $('#subtract').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  }
});
// Divide Button
$('#divide').click(function(e) {

  if ($('#answer').val() === '') {

    $('#equals').attr('onclick', '');
    return false;
  } else if ($('#operation').attr('class') == 'activeAnswer') {
    $('#operation').val($('#operation').val() + $('#divide').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  } else {
    $('#operation').val($('#operation').val() + $('#answer').val() + $('#divide').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  }
});
// Product Button
$('#product').click(function(e) {

  if ($('#answer').val() === '') {

    $('#equals').attr('onclick', '');
    return false;
  } else if ($('#operation').attr('class') == 'activeAnswer') {
    $('#operation').val($('#operation').val() + $('#product').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  } else {
    $('#operation').val($('#operation').val() + $('#answer').val() + $('#product').val());
    $('#answer').val('');
    $('#display').val($('#display').val() + $(this).val());
    $('#equals').attr('onclick', '');
  }
});
// Equals Button
$('#equals').click(function() {

  if ($('#equals').attr('onclick') != 'return false') {

    var a = $('#answer').val();
    var b = $('#operation').val();
    var c = b.concat(a);
    $('#answer').val(eval(c));
    $('#operation').val(eval(c));
    $('#display').val($('#display').val() + $(this).val() + $('#answer').val());
    $('#operation').addClass('activeAnswer');
    $('#equals').attr('onclick', 'return false');

  }
});