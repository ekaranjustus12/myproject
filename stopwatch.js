const startBtn = document.getElementById('start');
const stoptBtn = document.getElementById('stop');
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
let timer = null;
let timerStatus = 'stop';
function startClock() {
	// body...
	seconds++;
	if (seconds/60===1) {
		seconds = 0;
		minutes++;
	
	if (minutes/60 === 1) {
		minutes = 0;
        hours++;
	}
}
if (seconds < 10) {
	leadingSeconds = '0' + seconds.toString();
}else{
	leadingSeconds = seconds;
}
if (minutes < 10) {
	leadingMinutes = '0' + minutes.toString();
}else{
	leadingMinutes = minutes;
}
if (hours < 10) {
	leadingHours = '0' + hours.toString();
}else{
	leadingHours = hours;
}
let displayTime = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
//window.setInterval(startClock,1000);
startBtn.addEventListener('click',function(){
	if (timerStatus === 'stop') {
		timer = window.setInterval(startClock,1000);
	} else {
		window.clearInterval(timer);
	}
});
stoptBtn.addEventListener('click',function () {
	// body...
	window.clearInterval(timer);
	seconds = 0;
	minutes = 0;
	hours = 0;

})

