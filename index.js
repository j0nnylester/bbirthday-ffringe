if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.setAttribute('data-theme', 'dark');
  document.querySelector('#theme-button').textContent = 'light'
} else {
  document.body.setAttribute('data-theme', 'light');
  document.querySelector('#theme-button').textContent = 'dark'
}

const changeTheme = () => {
  if (document.body.getAttribute('data-theme') === 'light') {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('#theme-button').textContent = 'light'
  } else {
    document.querySelector('#theme-button').textContent = 'dark'
    document.body.setAttribute('data-theme', 'light')
  }
};

const setActive = (day) => {
  document.querySelector('.day-tab.active').classList.remove("active");
  document.querySelector('.whatson.active').classList.remove("active");
  document.querySelector(`#${day}-tab`).classList.add("active");
  document.querySelector(`#${day}-whatson`).classList.add("active");
};
