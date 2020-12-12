/*========burger=========*/


$(document).ready(function () {
  $('.burger__wrap_left').click(function(event) {
    $('.burger__wrap_left,.burger__span_left,.burger-menu__wrap').toggleClass('active');
  });
});



$(document).ready(function () {
  $('.filter-burger__wrap').click(function(event) {
    $('.filter-burger__wrap,.filter-burger__span,.sorting__wrap,.filter-title').toggleClass('active');
  });
});
