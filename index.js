let isDark = false
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark = true;
}
document.body.setAttribute('data-theme', `${isDark ? 'dark' : 'light'}`);

const setActive = (day) => {
  document.querySelector('.date-tab.active').classList.remove("active");
  document.querySelector('.planner.active').classList.remove("active");
  document.querySelector(`#${day}-tab`).classList.add("active");
  document.querySelector(`#${day}-planner`).classList.add("active");
};