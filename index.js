const targetDate = new Date("Mar 17, 2021");

const refs = {
  secondsRef: document.querySelector('span[data-value="secs"]'),
  minutesRef: document.querySelector('span[data-value="mins"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  daysRef: document.querySelector('span[data-value="days"]'),
};

refs.secondsRef.textContent = "00";
refs.minutesRef.textContent = "00";
refs.hoursRef.textContent = "00";
refs.daysRef.textContent = "000";

const intervalID = setInterval(() => {
  const startTime = Date.now();
  const deltaTime = targetDate - startTime;
  updateCountDown(deltaTime);
}, 1000);

function updateCountDown(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.secondsRef.textContent = `${secs}`;
  refs.minutesRef.textContent = `${mins}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.daysRef.textContent = `${days}`;
}
