
let seconds = 0;
let minutes = 0;
let hours = 0;
let miliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayMiliSeconds = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    miliseconds++;
     if(miliseconds / 100 === 1){
       miliseconds = 0;
       seconds++;
         if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
 
            if(minutes / 60 === 1){
               minutes = 0;
               hours++;
           }
        }
     }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(miliseconds < 100 && miliseconds >= 10) {
      displayMiliSeconds = "" + miliseconds.toString();
  }
  else{
    if(miliseconds < 10) 
    {
      displayMiliSeconds = "0" + miliseconds.toString();
  } else
      displayMiliSeconds = miliseconds;
  }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMiliSeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}