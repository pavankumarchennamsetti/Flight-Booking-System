//////////////////////////HOME.JS JAVASCRIPT///////////////////////////////
function check() {
  var name = document.getElementById("floatingInput").value;
  var mobile = document.getElementById("floatingPassword").value;
  var date = document.getElementById("floatingDate").value;
  var presentDate = new Date();
  if (new Date(date).getTime() < presentDate.getTime()) {
    alert("Date should be greater than today!!");
    document.getElementById("floatingDate").value = "";
  } else if (name != "" && mobile != "" && date != "") {
    window.location.href = "Book.html";
    //alert(presentDate.getFullYear());
    document.getElementById("floatingInput").value = "";
    document.getElementById("floatingPassword").value = "";
    document.getElementById("floatingDate").value = "";
  } else {
    alert("Please Fill Out all Details");
  }
}

/////////////////////////////////BOOK.JS JAVASCRIPT /////////////////////////////////////
const flights = [
  {
    from: "Hyderabad",
    to: "Chennai",
    fare: "Rs. 5000/-",
    time: "06:30",
    travelTime: "1 hour 30 min",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    fare: "Rs. 4000/-",
    time: "08:20",
    travelTime: "1 hour 55 min",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    fare: "Rs. 7000/-",
    time: "11:05",
    travelTime: "1 hour 05 min",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    fare: "Rs. 4590/-",
    time: "14:15",
    travelTime: "1 hour 40 min",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    fare: "Rs. 6499/-",
    time: "17:40",
    travelTime: "1 hour 45 min",
  },
];
var textBook = "";
for (var i = 0; i < 5; i++) {
  textBook =
    textBook +
    "<div class='block'>" +
    "<div class='blockSec'><legend>From:</legend><h5>" +
    flights[i].from +
    "</h5></div><div class='blockSec'><legend>To:</legend><h5>" +
    flights[i].to +
    "</h5></div><div class='blockSec'><legend>Onboarding Time:</legend><h5>" +
    flights[i].time +
    "</h5></div><div class='blockSec'><legend>Travel Time:</legend><h5>" +
    flights[i].travelTime +
    "</h5></div><div class='blockSec'><legend>Ticket Price:</legend><h5>" +
    flights[i].fare +
    "</h5></div>" +
    "<div style='padding-top:1.5rem'><button type='button' onclick='book()' style='padding:0.5rem 1rem' class='btn btn-success'>Book Now</button>" +
    "</div>" +
    "</div>";
}
document.getElementById("area").innerHTML = textBook;
function book() {
  window.location.href = "seat.html";
}
