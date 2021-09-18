
/*
   hoverLink script
   hovering on and off the image also changes the color of link

   a substitute for putting image inside the <a> element
*/

var trigger = document.getElementsByClassName('hover')[0];
var change = document.querySelector('a');
// cache DOM queries

function lightOn() {
  change.style.color = "gold";
}
// hovering on element changes the color of the link

function lightOff() {
  change.style.color = "#839e37";
}
// hovering off element changes the color of the link to what it used to be



trigger.addEventListener('mouseover', lightOn);
trigger.addEventListener('mouseout', lightOff);
change.addEventListener('mouseover', lightOn);
change.addEventListener('mouseout', lightOff);
/*
   add event listener to the link itself too, since once color is changed by script,
   CSS :hover style will lose effect
   (the biggest downside)

   reccomendation: leave :hover intact for those having JavaScript disabled
*/
