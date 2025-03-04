let date = new Date('May 12 2025 23:59:59');

const timerCount = () => {
  const days = document.querySelector('.timer-count__days');
  const hours = document.querySelector('.timer-count__hours');
  const minutes = document.querySelector('.timer-count__minutes');
  const seconds = document.querySelector('.timer-count__seconds');

  let now = new Date;
  let gap = date - now;
  //console.log(gap);

  const oneDay = Math.floor(gap / 1000 / 60 / 60 / 24);
  const oneHour = Math.floor((gap / 1000 / 60 / 60) % 24);
  const oneMinute = Math.floor((gap / 1000 / 60) % 60);
  const oneSecond = Math.floor((gap / 1000) % 60);

  days.innerHTML = oneDay < 10 ? "0" + oneDay : oneDay;
  hours.innerHTML = oneHour < 10 ? "0" + oneHour : oneHour;
  minutes.innerHTML = oneMinute < 10 ? "0" + oneMinute : oneMinute;
  seconds.innerHTML = oneSecond < 10 ? "0" + oneSecond : oneSecond;

  if (gap < 0) {
    return document.querySelector('.timer__items').innerText = '00 : 00 : 00 : 00';
  }
}

timerCount();

setInterval(timerCount, 1000);