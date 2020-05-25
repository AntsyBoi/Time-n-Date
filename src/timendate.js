function setup() {
    createCanvas(windowWidth, windowHeight);
}
/**1.5.3 Fixed //not even close
/**1.5.3a (I think) Partially permanently fixed placement */ //nope
/** USE 997 WHEN DECODING THE DIVISION*/
function draw() {

    //console.log(windowHeight)
    
    var preh = hour()    
    var m = minute()
    var mo = month()
    var s = second()
    var d = day()
    
    if (hour() > 12) {
        preh = hour() - 12
    }
    var h = preh
    if (preh < 9) {
        h = "0" + preh
    }
    
    if (minute() < 9) {
        m = "0" + minute()
    }

    if (month() < 9) {
        mo = "0" + month()
    }

    if (second() < 9) {
        s = "0" + second()
    }

    if (day() < 9) {
        d = "0" + day()
    }
    
    //Global section
    background(40) //Sets the background color for the project
    fill(200) //Sets the color for all of the text.
    //Credits section
    textAlign(CENTER, TOP) //Aligns the text for the credits
    textSize(windowHeight / 39.88) //Sizes the text for the credits
    text("Created by Charles Rinehart", 0, windowHeight / 99.7, width) //Displays the credits
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