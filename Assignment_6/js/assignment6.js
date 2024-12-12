// 1. Develop a basic calculator with addition, subtraction, multiplication, and division in js, don't copy the code from any online source, and develop with your own logic.

const display = document.getElementById("display");

function addToDisplay(input) {
  display.textContent += input;
}

function clearDisplay() {
  display.textContent = "";
}
function result() {
  try {
    if (display.textContent.length == 0 || display.textContent == "Error") {
      display.textContent = "Error";
    } else {
      let rslt = eval(display.textContent);
      display.innerHTML = `<h3>${rslt}</h3>`;
    }
  } catch (e) {
    display.textContent = "Error";
  }
}
