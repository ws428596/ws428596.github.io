// $(".smoothscroll").on("click", function(e) {
//   $("body").animate({ "margin-top": -1400 + "px" }, 10);
//   console.log(e.originalEvent.screenY);
  
// });
// var y = 0
// $('body').on('wheel', function (e) {
//   console.log(e.originalEvent.deltaY);
//   y += e.originalEvent.deltaY
// })

$('.menu .move').eq(0).addClass('actives')
$('.menu nav a').on('click',function(){
  $('.menu .move').eq($(this).index()).addClass('actives').siblings().removeClass('actives')
  $(this).addClass('active').siblings().removeClass('active');
  $('.menu .move')
})

$('.tabbable li').eq(0).addClass('active')
$('.tabbable li').on('click',function(){
  $(this).addClass('active').siblings().removeClass('active')
})


$('.chefc .nav li').eq(0).addClass('actives')
$('.chefc .nav li').on('click',function(){
  $(this).addClass('actives').siblings().removeClass('actives')
  $('.chefc .tab-pane').eq($(this).index()).addClass('active').siblings().removeClass('active')
})