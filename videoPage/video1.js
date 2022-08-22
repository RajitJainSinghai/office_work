$(function() {

  // when the modal is shown
  $('#myModal').on('show.bs.modal', function(e) {
    var $modal = $(this);

    // find the trigger button
    var $button = $(e.relatedTarget);

    // find the hidden div next to trigger button
    var $notifications = $button.siblings('div.hidden');

    // transfer content to modal body
    $modal.find('.modal-body').html($notifications.html());
  })
});


/******************************************* */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}