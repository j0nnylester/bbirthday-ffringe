let isDark = false
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark = true;
}
document.body.setAttribute('data-theme', `${isDark ? 'dark' : 'light'}`);

const setActive = (day) => {
  document.querySelector('.day-tab.active').classList.remove("active");
  document.querySelector('.planner.active').classList.remove("active");
  document.querySelector(`#${day}-tab`).classList.add("active");
  document.querySelector(`#${day}-planner`).classList.add("active");
};

const showMenu = () => {
  if (document.querySelector('#menu').classList.contains('active')) {
    document.querySelector('#menu').classList.remove('active')
  } else {
    document.querySelector('#menu').classList.add('active')
  }
};