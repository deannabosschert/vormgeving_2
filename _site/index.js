function clickButton() {
  var callToAction = document.getElementById("call-to-action");
  if (callToAction.classList.contains("clickedButton")) {
    callToAction.classList.remove("clickedButton")
  } else {
    callToAction.classList.add("clickedButton")
  }
}
