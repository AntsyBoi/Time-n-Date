// Sets up variables so then they will display 0s when displaying
const Time = new Date();
var m = Time.getMinutes()
var s = Time.getSeconds()
var mo = Time.getMonth()
var d = Time.getDay()
var killswitch // Just incase
window.onload = function () {
    while (true === true) {
        if (killswitch = true) {
            break;
        } // Just incase you need to kill the infinite loop
        // Declares if they will have a 0 before the number
        if (Time.getMinutes() < 10) {
            m = "0" + Time.getMinutes()
        }
        if (Time.getSeconds() < 10) {
            s = "0" + Time.getSeconds()
        }
        document.getElementById("time").innerHTML = "New text!";
        document.getElementById("date").innerHTML = "New text!";
        document.getElementById("timer").innerHTML = "New text!";
    }
}