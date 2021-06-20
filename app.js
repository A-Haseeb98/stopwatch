var hour = 0;
var min = 0;
var sec = 0;
var mSec = 0;
var records = [];
var interval;

function start() {
    var state = document.getElementById('startBtn').innerText;
    if (state === 'start') {
        document.getElementById('startBtn').innerText = 'stop'
        document.getElementById('startBtn').style.backgroundColor = 'red'
        interval = setInterval(() => {

            mSec++;

            if (mSec === 100) {
                sec++;
                mSec = 0;
            }
            if (sec === 60) {
                min++;
                sec = 0;
            }
            if (min === 60) {
                hour++;
                min = 0;
            }
            if (sec <10 ){
                
            }
            document.getElementById('watch').innerHTML = ` <span>${min}</span>m : <span>${sec}</span>s : <span>${mSec}</span>m `
        }, 10)
    }
    else {
        console.log('else')
        clearInterval(interval)
        document.getElementById('startBtn').innerText = 'start'
        document.getElementById('startBtn').style.backgroundColor = 'green'


    }
}

function save() {
    records.push(`${hour}h : ${min}m : ${sec}s : ${mSec}m`)
    document.getElementById('list').innerHTML = ""

    for (var i = 0; i < records.length; i++) {
        document.getElementById('list').innerHTML += " <li>" + records[i] + "</li>"
    }
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    mSec = 0;

    clearInterval(interval);
    document.getElementById('watch').innerHTML = `<span>${hour}</span>h : <span>${min}</span>m : <span>${sec}</span>s : <span>${mSec}</span>m `
}