//Sets up variables so then they will display 0s when displaying
const Time = new Date();
var m = Time.getMinutes()
var s = Time.getSeconds()
var mo = Time.getMonth()
var d = Time.getDay()
//Declares if they will have a 0 before the number
if(Time.getMinutes() < 10){
m = "0" + Time.getMinutes()
}
if(Time.getSeconds() < 10){
s = "0" + Time.getSeconds()
}
