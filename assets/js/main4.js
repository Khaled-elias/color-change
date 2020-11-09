document.addEventListener("keydown",function(ele){
    document.getElementById("Key").innerHTML = ele.key
    document.getElementById("Code").innerHTML = ele.keyCode
    document.getElementById("KeyCode").innerHTML = ele.keyCode
    document.getElementById("result").innerHTML = `Key ${ele.key}`
})