function setup() {
    createCanvas(windowWidth, windowHeight);
}
/** USE 997 WHEN DECODING THE DIVISION*/
function draw() {
    resizeCanvas(windowWidth, windowHeight);
//Sets up variables so then they will display 0s when displaying
    var preh = hour()
    var m = minute()
    var mo = month()
    var s = second()
    var d = day()
//Declares if they will have a 0 before the number
    if (hour() > 12) {
        preh = hour() - 12
    }
    var h = preh
    if (preh < 10) {
        h = "0" + preh
    }

    if (minute() < 10) {
        m = "0" + minute()
    }

    if (month() < 10) {
        mo = "0" + month()
    }

    if (second() < 10) {
        s = "0" + second()
    }

    if (day() < 10) {
        d = "0" + day()
    }

    //Global section
    background(40) //Sets the background color for the project
    fill(200) //Sets the color for all of the text.
    //Credits section
    textAlign(CENTER, TOP) //Aligns the text for the credits
    textSize(windowHeight / 39.88) //Sizes the text for the credits
    //Time and date section
    textSize(windowHeight / 7.976) //Defines size for the text of the time and date
    textAlign(CENTER, CENTER) //Aligns the text
    text(h + ":" + m + ":" + s, 0, windowHeight / 2 - (windowHeight / 7.976 / 2.08333333333), width) //Displays the current time
    text(d + " / " + mo + " / " + year(), 0, windowHeight / 2 + (windowHeight / 7.976 / 2.08333333333), width) //Displays the current date
    //Timer section
    textSize(windowHeight / 39.88) //Sizes the text for the timer part
    textAlign(CENTER, BASELINE); //Aligns the text for the counter part
    //console.log(windowHeight + height)
    text("To show you how much time you've spent, I have this timer " + ~~(millis() / 1000), 0, windowHeight / 1.5952, width) //Displays the timer
}
