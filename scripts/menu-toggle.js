$(document).ready(function(){
	$('#nav-toggle').click(function(){
		$(this).toggleClass('open');
		$(".sidebar").toggleClass('open');
		$("body").toggleClass('body--fixed');
	});
});

$(".sidebar_link").on("click", function(event){
  event.preventDefault();
  $("#nav-toggle").toggleClass('open');
  $(".sidebar").toggleClass('open');
  $("body").toggleClass('body--fixed');
  let $this = $(this);
  let blockId = $this.attr('href');
  let headerHeight = $(".header").outerHeight();
  let blockOffset = $(blockId).offset().top - headerHeight;

  $("html, body").animate({
    scrollTop: blockOffset
  }, 500);
})

