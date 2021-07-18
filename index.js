const root = document.querySelector(':root');
const body = document.body;
const themeButton = document.querySelector('#theme-button');

const colors = {
  friday: '0, 255, 255',
  saturday: '255, 0, 255',
  sunday: '255, 255, 0'
};


root.style.setProperty('--active', colors.friday);
document.querySelector(`#friday-tab`).classList.add("active");
document.querySelector(`#friday-whatson`).classList.add("active");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.setAttribute('data-theme', 'dark');
  themeButton.textContent = 'light'
} else {
  body.setAttribute('data-theme', 'light');
  themeButton.textContent = 'dark'
}

const changeTheme = () => {
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeButton.textContent = 'light'
  } else {
    body.setAttribute('data-theme', 'light')
    themeButton.textContent = 'dark'
  }
};

const setActive = (day) => {
  document.querySelector('.day-tab.active').classList.remove("active");
  document.querySelector('.whatson.active').classList.remove("active");
  root.style.setProperty('--active', colors[day]);
  document.querySelector(`#${day}-tab`).classList.add("active");
  document.querySelector(`#${day}-whatson`).classList.add("active");
};
