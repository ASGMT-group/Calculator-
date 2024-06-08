const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}
