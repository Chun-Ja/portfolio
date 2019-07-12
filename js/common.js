// $(function(){
//   $("#one02").on("mouseover",function(){
//       $('.chart').easyPieChart({
//         //your configuration goes here
//         size:200,
//         lineWidth:20,
//       });
//   });
// });

$(function() {
  $('.chart').easyPieChart({
    size:200,
    lineWidth:20,
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent)+'%');
    }
  });
  // var chart = window.chart = $('.chart').data('easyPieChart');
  $('#one02').on('mouseover', function() {
    $('.chart01').data('easyPieChart').update(80);
    $('.chart02').data('easyPieChart').update(80);
    $('.chart03').data('easyPieChart').update(60);

  });
  $('#one02').on('mouseleave', function() {
    $('.chart01').data('easyPieChart').update(0);
    $('.chart02').data('easyPieChart').update(0);
    $('.chart03').data('easyPieChart').update(0);
  });
});