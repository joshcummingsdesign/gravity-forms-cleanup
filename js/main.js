/*****************************************
* Front End Script
/****************************************/

jQuery(document).ready(function($) {

  'use strict';

  // DOM Caching
  var $email_input = $('#input_1_1');

  function showModal(type, heading, message) {
    var output = '<div id="' + type + 'Modal" class="modal fade" role="dialog">';
    output += '<div class="modal-dialog">';
    output += '<div class="modal-content">';
    output += '<div class="modal-header">';
    output += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
    output += '<h4 class="modal-title">' + heading + '</h4>';
    output += '</div>';
    output += '<div class="modal-body">';
    output += '<p>' + message + '</p>';
    output += '</div>';
    output += '<div class="modal-footer">';
    output += '<button type="button"';
    if ('success' === type) {
      output += 'class="btn btn-success"';
    } else {
      output += 'class="btn btn-danger"';
    }
    output += 'data-dismiss="modal">Close</button>';
    output += '</div></div></div></div>';
    document.getElementById('output-modals').innerHTML = output;
    $('#' + type + 'Modal').modal();
    resetForm();
  }

  function resetForm() {
    document.getElementById('gform_1').reset();
  }

  function submitForm(url){
    var inputValues = {
      input_1: $email_input.val()
    };
    var data = {
      input_values: inputValues
    };
    $.ajax({
      url: url,
      type: 'POST',
      data: JSON.stringify(data)
    })
    .done(function(response){
      // Success modal
      showModal('success', 'Thanks!', "We'll shout you a holler sometime soon!");
    })
    .fail(function(){
      // Failed modal
      showModal('failed', 'Oops!', "It looks like we are having some trouble. Please try again later.");
    });
  }

  function emailIsValid(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  $('#submit_button').click(function(e) {
    e.preventDefault();
    var email = $email_input.val();
    if (emailIsValid(email)) {
      var url = '/gravityformsapi/forms/1/submissions';
      submitForm(url);
    } else {
      // Error Modal
      showModal('error', 'Invalid Email', "The email address you entered is invalid. Please try again.");
    }
  });

});
