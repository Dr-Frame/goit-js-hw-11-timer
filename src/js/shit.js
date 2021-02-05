const refs = {
  secondsRef: document.querySelector('span[data-value="secs"]'),
  minutesRef: document.querySelector('span[data-value="mins"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  daysRef: document.querySelector('span[data-value="days"]'),
};

class Timer {
  constructor(targetDate) {
    this.targetDate = targetDate;
  }

  updateCountDown(time) {
    const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    this.handleTimerData(secs, mins, hours, days);
  }

  handleTimerData(secs, mins, hours, days) {
    refs.secondsRef.textContent = `${secs}`;
    refs.minutesRef.textContent = `${mins}`;
    refs.hoursRef.textContent = `${hours}`;
    refs.daysRef.textContent = `${days}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  padDays(value) {
    return String(value).padStart(3, "0");
  }
  timerData() {
    const startTime = Date.now();
    const deltaTime = this.targetDate - startTime;
    this.updateCountDown(deltaTime);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

refs.secondsRef.textContent = "00";
refs.minutesRef.textContent = "00";
refs.hoursRef.textContent = "00";
refs.daysRef.textContent = "000";

const timer = new Timer(new Date("Mar 17, 2021"));

const interval = setInterval(timer.timerData, 1000);
