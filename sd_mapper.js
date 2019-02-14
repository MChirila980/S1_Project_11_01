'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Melinda Chirila
   Date:  2/14/2019 

*/

var thisTime = new Date();

var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

// when using the thisTime it means that im getting the thisHour from the thisTIme if that makes sense.
var thisHour = thisTime.getHours();
// you would do the same for the months too,your getting the month number from the thisTime variable.
var thisMonth = thisTime.getMonth();
// 
var mapNum = (2 * thisMonth + thisHour) % 24;
// 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
// 
document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);