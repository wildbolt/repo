/*$(document).ready(function()
{
  $(".images").click(function()
  {
    $("div").fadeOut(1000); 
  });
});
*/

$(document).ready(function()
{
	$('.images img:gt(0)').hide();
	setInterval(function(){$('.images :first-child').fadeOut().next('img').fadeIn().end().appendTo('.images');}, 3000);
});
