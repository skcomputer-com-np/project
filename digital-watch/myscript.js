'use strict';

let digitalWatch = () => {
  const date = new Date();
  let dWatch = document.querySelector('#dWatch');
  let amPmEle = document.querySelector('#amPm');
  let clockWithDate = document.querySelector('#clockWithDate');

  let hour = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();

  let amPm = hour >= 12 && minute >= 0 ? 'PM' : 'AM';

  if (hour > 12) {
    hour -= 12;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  const fullTime = `${hour} : ${minute} : ${sec}`;
  dWatch.textContent = fullTime;
  amPmEle.textContent = amPm;

  let local = 'hi-IN';
  let option = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
  };

  clockWithDate.textContent = date.toLocaleString(local, option);
};

// Set time interval
setInterval(digitalWatch, 1000);
