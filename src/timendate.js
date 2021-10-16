function setup() {
    createCanvas(windowWidth, windowHeight);
}
/** USE 997 WHEN DECODING THE DIVISION*/
function draw() {
    resizeCanvas(windowWidth, windowHeight);
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
    //Global section
    background(40) //Sets the background color for the project
    fill(200) //Sets the color for all of the text.
    //Time and date section
    textSize(windowHeight / 8) //Defines size for the text of the time and date
    textAlign(CENTER, BOTTOM) //Aligns the text
    text(Time.getHours() + ":" + m + ":" + s, 0, (windowHeight/2), width) //Displays the current time
    textAlign(CENTER, BASELINE)
    text(Time.getDate() + " / " + (Time.getMonth()+1) + " / " + Time.getFullYear(), 0, (windowHeight/2), width) //Displays the current date
    //Timer section
    textSize(windowHeight / 40) //Sizes the text for the timer part
    textAlign(CENTER, BOTTOM); //Aligns the text for the counter part
    //console.log(windowHeight + height)
    text("To show you how much time you've spent, I have this timer " + ~~(millis() / 1000), 0, windowHeight, width) //Displays the timer
}
