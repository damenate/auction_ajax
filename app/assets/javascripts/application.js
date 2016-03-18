// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

function ajaxCall() {
      var itemId = $("#bid_item_id").attr("value")
     $.get('/refresh/' + itemId, function(data)
     {
         $('#highest-bid').html(data);
     });
  }
$(document).ready(function($){
  window.setInterval('ajaxCall()', 10*1500);
});


//
// function ajaxCall( {
//   response = $.ajax({
//     url: "/refresh/",
//   })
// })
//
// function() {
//   if ($("#highest-bid").length > 0) {
//     window.SetInterval('ajaxCall()', 15000);
// }
//   $(document).foundation();
// });
