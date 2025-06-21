function time() {
  // Sets up variables so then they will display 0s when displaying
  let Time = new Date();
  let m = Time.getMinutes();
  let s = Time.getSeconds();
  let mo = Time.getMonth() + 1;
  let d = Time.getDate();

  // Declares if they will have a 0 before the number
  if (Time.getMinutes() < 10) {
    m = "0" + Time.getMinutes();
  }
  if (Time.getSeconds() < 10) {
    s = "0" + Time.getSeconds();
  }

  // Displays the text in the respective elements
  let time = document.getElementById("time");
  let date = document.getElementById("date");
  let timer = document.getElementById("timer");

  // Sets the text
  time.innerHTML = Time.getHours() + ":" + m + ":" + s;
  date.innerHTML = d + " / " + mo + " / " + Time.getFullYear();
  

  // Makes the website not crash
  setTimeout("time()", 1)
}
time();

function message(Message){
  timer.innerHTML = Message; // Makes the top text have something in it, maybe write a love note or something.
}

/*I loved working on this project.
I originally started working on it as an experiment to test
something out in processingJS when I was learning it on Khan
Academy (man that was a mistake, KhanAcademy is amazing for a 
lot but not learning how to code), this funny enough was also
first introductiont to fucntions. Then this project took 5
years of my life (2017-2022) working on it off and on just 
trying to perfect it, and I finally think it's time for me
to be done with it. I might occasionally update it with
dependency updates but other than that I want to work on
other things. And with the 100th commit on GitHub for this
project I want to finally have this project sail off into 
the sunset, I loved every second of working on this project
and I hope other people get that same amount of joy working
on their projects. I know this project is stupid but I love
it. It taught me so much and I want to now use that somewhere
else. I love you Time&Date, and I hope that this project won't
just fade into a free code void somewhere. Maybe someone will
find it in 5 years from now and read this note. This note is
getting me emotional just writing it but I hope this marks
the next era of my coding passion and won't be the end. 
*/
