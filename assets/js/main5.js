
 
 var i = 0
  
    document.getElementById('clickme1').addEventListener('click', () =>{
        document.getElementById("demo").innerHTML = "Wir haben die " + (i++ )+" mal geändert!"
     document.getElementById("body").style.background = "pink"
    } )

    
    document.getElementById('clickme2').addEventListener('click', () => {document.getElementById("demo").innerHTML = "Wir haben die " + (i++ )+" mal geändert!"
    document.getElementById("body").style.background = "purple"})

    


    
    document.getElementById('clickme3').addEventListener('click', () => {document.getElementById("demo").innerHTML = "Wir haben die " + (i++ )+" mal geändert!"

    document.getElementById("body").style.background = "orange"})

    function andernRegler(){
        let r = document.getElementById("rot").value
        let g = document.getElementById("grun").value
        let b = document.getElementById("blau").value
    
        document.getElementById("body").style.background = "#"+ farbeÄnderung(r)+farbeÄnderung(g)+farbeÄnderung(b)
        document.getElementById("demo").innerHTML ="rgb(" + r + ","+ g+","+b+") = "+ "#"+ farbeÄnderung(r)+farbeÄnderung(g)+farbeÄnderung(b)
     
     }
 
  

function farbeÄnderung(farbe) {
    let hex = Number(farbe).toString(16);
    if(hex.legnth < 2) hex = "0" +hex;
    return hex;
    }
    
    



    
    




 