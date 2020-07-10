var milisec = 0;
var sec = 0;
var mins = 0;

var docMili = document.getElementById("milisecs")
var docsec = document.getElementById("secs")
var docmins = document.getElementById("mins")

var interval;
var btn = document.querySelector("#startTag");

function callSetInterval() {
    interval = setInterval(function() {
        milisec += 1;
        docMili.innerHTML = milisec;
        if (milisec == 100) {
            milisec = 0;
            sec += 1;
            docsec.innerHTML = sec;
        } else if (sec == 60) {
            sec = 0;
            mins += 1;
            docmins.innerHTML = mins;
        }
    }, 10)

    btn.disabled = true;
}

function pauseTimer() {
    clearInterval(interval)
    btn.disabled = false;
}

function reset() {
    milisec = 0;
    sec = 0;
    mins = 0;
    docMili.innerHTML = "00";
    docmins.innerHTML = "00";
    docsec.innerHTML = "00";
    btn.disabled = false;

}