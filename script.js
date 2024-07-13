let h1Element = document.querySelector("h1");
let h2Element = document.querySelector("h2");
let h3Element = document.querySelector("h3");
let h4Element = document.querySelector("h4");
let h5Element = document.querySelector("h5");
let h6Element = document.querySelector("h6");

let h1_styles = getComputedStyle(h1Element);
let h2_styles = getComputedStyle(h2Element);
let h3_styles = getComputedStyle(h3Element);
let h4_styles = getComputedStyle(h4Element);
let h5_styles = getComputedStyle(h5Element);
let h6_styles = getComputedStyle(h6Element);

let violet = h1_styles.getPropertyValue("--v");
let indigo = h2_styles.getPropertyValue("--i");
let blue = h3_styles.getPropertyValue("--b");
let green = h4_styles.getPropertyValue("--g");
let yellow = h4_styles.getPropertyValue("--y");
let orange = h4_styles.getPropertyValue("--o");
let red = h4_styles.getPropertyValue("--r");

let theme = 0;

function ThemeSwitch() {
  if (theme === 0) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function darkTheme() {
  console.log("Dark Theme", theme);

  h1Element.style.setProperty("--v", "#ff0000");
  h2Element.style.setProperty("--i", "#ff7f00");
  h3Element.style.setProperty("--b", "#ffff00");
  h4Element.style.setProperty("--g", "#00ff00");
  h5Element.style.setProperty("--y", "#0000ff");
  h6Element.style.setProperty("--o", "#4b0082");
  h6Element.style.setProperty("--r", "#9400d3");

  theme = 1;
}

function lightTheme() {
  console.log("Light THeme", theme);

  h1Element.style.setProperty("--v", "#9400d3");
  h2Element.style.setProperty("--i", "#4b0082");
  h3Element.style.setProperty("--b", "#0000ff");
  h4Element.style.setProperty("--g", "#00ff00");
  h5Element.style.setProperty("--y", "#ffff00");
  h6Element.style.setProperty("--o", "#ff7f00");
  h6Element.style.setProperty("--r", "#ff0000");

  theme = 0;
}
