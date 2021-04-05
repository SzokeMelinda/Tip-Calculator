

//Custom function
function calculateTip() {

    //Store the data of inputs
   var billAmount = document.getElementById("billAmount").value;
   var serviceQuality = document.getElementById("serviceQuality").value;
   var numPeople = document.getElementById("totalPeople").value;

   //quick validation
    if(billAmount === "" || serviceQuality === 0) {
       return window.alert('Please enter some values');//this will prevent the function from continue
    }

    //check to see if this input is empty or less or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display = "block";
    }

    //do some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}



// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function

document.getElementById("calculate").onclick = function() { calculateTip(); };
