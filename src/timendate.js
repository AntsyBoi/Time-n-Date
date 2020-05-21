function setup() {
    createCanvas(windowWidth, windowHeight);
}
/**1.5.3 Fixed
/**1.5.3a (I think) Partially permanentally fixed placement */

function draw() {
    var h = hour();
    var m = minute()
    var mo = month()
    var s = second()
    var d = day()
    if (hour() > 12) {
        h = hour() - 12;
    }

    if (minute() < 9) {
        m = "0" + minute()
    }

    if (month() < 9) {
        mo = "0" + month()
    }

    if (second() < 9) {
        mo = "0" + second()
    }

    if (day() < 9) {
        mo = "0" + day()
    }
    //Global section
    background(40) //Sets the background color for the project
    fill(200); //Sets the color for all of the text.
    //Credits section
    textAlign(CENTER, TOP); //Aligns the text for the credits
    textSize(25) //Sizes the text for the credits
    text("Created by Charles Rinehart", 0, 10, width) //Displays the credits
    //Time and date section
    textSize(125); //Defines size for the text of the time and date
    textAlign(CENTER, CENTER); //Aligns the text
    text(h + ":" + m + ":" + s, 0, windowWidth / 2 - 200, width) //Displays the current time
    text(d + " / " + mo + " / " + year(), 0, windowHeight / 2, width)//Displays the current date
    //Timer section
    textSize(10) //Sizes the text for the timer part
    textAlign(CENTER, BASELINE); //Aligns the text for the counter part
    text("To show you how much time you've wasted I have this counter " + ~~(millis() / 1000), 0, windowHeight / 4 * 3, width) //Displays the timer
}