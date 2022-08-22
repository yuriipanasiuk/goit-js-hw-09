import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  distance: '30px',
  position: 'center-top',
});

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', startTimer);
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
    }
    if (selectedDates[0] >= options.defaultDate) {
      refs.startBtn.disabled = false;
    }
  },
};

const library = flatpickr(refs.input, options);
let timerId = null;

function startTimer() {
  timerId = setInterval(() => {
    updateTimer();

    refs.input.disabled = true;
    refs.startBtn.disabled = true;
  }, 1000);
}

function updateTimer() {
  const currentTime = new Date();
  const setTime = new Date(refs.input.value);
  const deltaTime = setTime - currentTime;
  const { days, hours, minutes, seconds } = convertMs(deltaTime);

  refs.days.textContent = addLeadingZero(`${days}`);
  refs.hours.textContent = addLeadingZero(`${hours}`);
  refs.minutes.textContent = addLeadingZero(`${minutes}`);
  refs.seconds.textContent = addLeadingZero(`${seconds}`);

  if (deltaTime < 1000) {
    clearInterval(timerId);
    refs.body.style.backgroundColor = 'red';
    Notiflix.Notify.success('timer stoped');
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
