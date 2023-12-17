const themeToggle = document.getElementById("toggle");

let getCurrentTheme = () => {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("theme")
    ? (theme = localStorage.getItem("theme"))
    : null;
  return theme;
};

function toggleTheme() {
  isDarkMode = !isDarkMode;
  console.log(window.MediaQueryList);
}

const loadTheme = (theme) => {
  const root = document.querySelector(":root");
  root.setAttribute("colors", `${theme}`);
};

themeToggle.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  console.log(theme);
  localStorage.setItem("theme", `${theme}`);
  loadTheme(theme);
});

const showTime = () => {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  document.getElementById("hourHand").style.transform = `rotate(${(h * 30) + 45}deg)`
  document.getElementById("minHand").style.transform = `rotate(${(m * 6) + 45}deg)`
  document.getElementById("secHand").style.transform = `rotate(${(s * 6) + 45}deg)`

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hourNumber").innerText = h;
  document.getElementById("minNumber").innerText = m;
  document.getElementById("secNumber").innerText = s;

  setTimeout(showTime, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
  showTime();
});
