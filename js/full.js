

$(function(){
  new fullpage('#fullpage', {
// autoScrolling:false,
// scrollHorizontally:false,
// navigation: true,
// navigationPosition: 'right',
anchors:['intro', 'about', 'skill', 'portfolio','call_me'],
scrollingSpeed:700,
sectionsColor:['#999', 'red', 'green', 'yellow', 'blue'],
scrollBar:true,
paddingTop: '50px',
scrollHorizontally:true,
navigation:true,
navigationPosition:'right',
});
 
});