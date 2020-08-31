// OnInstall handler
chrome.runtime.onInstalled.addListener(details => {
  console.log(details)
})

document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("submit")

  button.addEventListener("click", (e) => {
    console.log(e)
  })
})
