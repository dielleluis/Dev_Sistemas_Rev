function CurSec(id) {
    className = document.getElementById(id).getAttribute('class')

    if(className!="active") {
           
        var x = document.getElementsByClassName("active");
        x[0].className="";
        document.getElementById(id).className = "active";
    } 
}