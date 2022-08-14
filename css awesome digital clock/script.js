let hr = document.querySelector('.hr');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.ampm');

let hrCircle = document.querySelector('.hr-circle');
let minCircle = document.querySelector('.min-circle');
let secCircle = document.querySelector('.sec-circle');

let hrDot = document.querySelector('.hr-dot');
let minDot = document.querySelector('.min-dot');
let secDot = document.querySelector('.sec-dot');

let timeHandler = setInterval(clock);

function clock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ap = (h>= 12) ? 'Pm' : 'Am';

    s -= (s>=60) ? 60 : 0;
    m -= (m>=60) ? 60 : 0;
    h -= (h>=12) ? 12 : 0;

    hr.innerHTML = `${h}<br><span>Hours</span>`;
    min.innerHTML = `${m}<br><span>Minutes</span>`;
    sec.innerHTML = `${s}<br><span>Seconds</span>`;
    ampm.innerHTML = ap;

    let hrCircleOffset = 440 - ((440 * h)/12);
    let minCircleOffset = 440 - ((440 * m)/60);
    let secCircleOffset = 440 - ((440 * s)/60);

    hrCircle.style.strokeDashoffset = hrCircleOffset;
    minCircle.style.strokeDashoffset = minCircleOffset;
    secCircle.style.strokeDashoffset = secCircleOffset;

    let hrDotRotateDeg = (360/12) * h;
    let minDotRotateDeg = (360/60) * m;
    let secDotRotateDeg = (360/60) * s;

    hrDot.style.transform = `rotate(${hrDotRotateDeg}deg)`;
    minDot.style.transform = `rotate(${minDotRotateDeg}deg)`;
    secDot.style.transform = `rotate(${secDotRotateDeg}deg)`;
}