document.getElementById("my-select").addEventListener("change", e => {
document.getElementById("option-selected").innerHTML = "Sie haben ausgewählt " + e.target.value
})