$(document).ready(function () {
//find div
var div = $('div.covers');
//find ul width
var liNum = $(div).find('ul').children('li').length;
var speed = 1000;
var containerWidth = 848;
var itemWidth = 140;
//Remove scrollbars
console.log(liNum);
$(div).css({overflow: 'hidden'});
$('.right-arrow').click(function(e){	
if(($(div).scrollLeft()+containerWidth)<(liNum*itemWidth)){
$(div).animate({
scrollLeft: '+='+containerWidth
}, speed);
}
});	
$('.left-arrow').click(function(e){	
if(($(div).scrollLeft()+containerWidth)>containerWidth){
$(div).animate({
scrollLeft: '-='+containerWidth
}, speed);
}
});
});