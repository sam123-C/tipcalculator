function Calculate() {
    var billamt = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("people").value;

    if(billamt === "" || service === 0) {
        alert("please Enter value");
        return;
    }

    if(people === "" || people <= 0) {
        people = 1;

        document.getElementById("each").style.display="none";
    } else{
        document.getElementById("each").style.display="block";
    }
var total = (billamt*service)/ people;

total = Math.round(total * 100)/100;

Total = total.toFixed(2);
document.getElementById("totaltip").style.display= "block"
document.getElementById("tip").innerHTML = total;
}
document.getElementById("totaltip").style.display= "none";
document.getElementById("each").style.display= "none";

document.getElementById("btnClick").onclick= function(){
    Calculate();
}
