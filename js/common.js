$(function(){
  $(window).on("scroll",function(){
    if($(window).scrollTop()>=800 && $(window).scrollTop()<=1600){
      $('.chart').easyPieChart({
        //your configuration goes here
        size:200,
        lineWidth:20,
      });
    }
  });
});