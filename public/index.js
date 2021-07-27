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

const themes = {
  dark: 'light',
  light: 'dark'
};

const root = document.querySelector(':root');
const body = document.body;
const themeButton = document.querySelector('#theme-button');

const updateTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  themeButton.textContent = themes[theme];
}

const setActiveColor = () => {
  const today = new Date().setHours(0, 0, 0, 0);
  const closest = days.reduce((a, b) => Math.abs(new Date(a.date) - today) < Math.abs(new Date(b.date) - today) ? a : b);
  root.style.setProperty('--active', closest.color);
  return closest;
};

const setActiveDay = () => {
  const closest = setActiveColor();
  document.querySelector(`#${closest.day}-tab`).classList.add("active");
  document.querySelector(`#${closest.day}-whatson`).classList.add("active");
};

const changeTheme = () => {
  localStorage.setItem('theme', themes[body.getAttribute('data-theme')])
  updateTheme(themes[body.getAttribute('data-theme')]);
};

const changeActive = (day) => {
  document.querySelector('.day-tab.active').classList.remove("active");
  document.querySelector('.whatson.active').classList.remove("active");
  root.style.setProperty('--active', days[day].color);
  document.querySelector(`#${days[day].day}-tab`).classList.add("active");
  document.querySelector(`#${days[day].day}-whatson`).classList.add("active");
};

const setThemeOnLoad = () => {
  if ('theme' in localStorage) {
    updateTheme(localStorage.getItem('theme'))
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateTheme('dark');
  } else {
    updateTheme('light');
  }
  root.style.setProperty('--transition', '0.2s');
};

const scrollForiOS = () => {
  if (['iPad', 'iPhone'].includes(navigator.platform)) {
    window.scrollTo(0, 1);
  };
};

const setServiceWorkerOnLoad = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  };
};

setThemeOnLoad();
setActiveColor();
scrollForiOS();
setServiceWorkerOnLoad()

