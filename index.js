const root = document.querySelector(':root');
const body = document.body;
const themeButton = document.querySelector('#theme-button');

const changeTheme = () => {
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeButton.textContent = 'light'
  } else {
    body.setAttribute('data-theme', 'light')
    themeButton.textContent = 'dark'
  }
};

const setTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute('data-theme', 'dark');
    themeButton.textContent = 'light'
  } else {
    body.setAttribute('data-theme', 'light');
    themeButton.textContent = 'dark'
  }
}

const days = [
  {
    day: 'friday',
    color: '0, 255, 255',
    date: '2021-08-13'
  },
  {
    day: 'saturday',
    color: '255, 0, 255',
    date: '2021-08-14'
  },
  {
    day: 'sunday',
    color: '255, 255, 0',
    date: '2021-08-15'
  }
];

const setActive = () => {
  const today = new Date().setHours(0, 0, 0, 0);
  const closest = days.reduce((a, b) => Math.abs(new Date(a.date) - today) < Math.abs(new Date(b.date) - today) ? a : b);

  root.style.setProperty('--active', closest.color);
  document.querySelector(`#${closest.day}-tab`).classList.add("active");
  document.querySelector(`#${closest.day}-whatson`).classList.add("active");
};

const changeActive = (day) => {
  document.querySelector('.day-tab.active').classList.remove("active");
  document.querySelector('.whatson.active').classList.remove("active");
  root.style.setProperty('--active', days[day].color);
  document.querySelector(`#${days[day].day}-tab`).classList.add("active");
  document.querySelector(`#${days[day].day}-whatson`).classList.add("active");
};

window.addEventListener('beforeinstallprompt', (event) => {});
