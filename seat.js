var text = "";
var k = 0;
for (var i = 0; i < 9; i++) {
  text =
    text +
    "<div class='seatRow'>" +
    /////////////COLUMN - A //////////////////////////
    "<input onclick='color(id)' type='button' class='rowA' id='" +
    (k += 1) +
    "' value='A" +
    (i + 1) +
    "'/>" +
    //////////////COLUMN - B /////////////////////////
    "<input onclick='color(id)' type='button' class='rowB' id='" +
    (k += 1) +
    "' value='B" +
    (i + 1) +
    "'/>" +
    //////////////COLUMN -C //////////////////////////
    "<input onclick='color(id)' type='button' class='rowC' id='" +
    (k += 1) +
    "' value='C" +
    (i + 1) +
    "'/>" +
    "</div>";
}
document.getElementById("seatA").innerHTML = text;
var text2 = "";
for (var i = 0; i < 9; i++) {
  text2 =
    text2 +
    "<div class='seatRow'>" +
    ///////////////COLUMN - A /////////////////////////
    "<input onclick='color(id)' type='button' class='rowA' id='" +
    (k += 1) +
    "' value='D" +
    (i + 1) +
    "'/>" +
    //////////////COLUMN - B /////////////////////////
    "<input onclick='color(id)' type='button' class='rowB' id='" +
    (k += 1) +
    "' value='E" +
    (i + 1) +
    "'/>" +
    //////////////COLUMN - C ////////////////////////
    "<input onclick='color(id)' type='button' class='rowC' id='" +
    (k += 1) +
    "' value='F" +
    (i + 1) +
    "'/>" +
    "</div>";
}
document.getElementById("seatB").innerHTML = text2;

//COLORING DIV ELEMENT WHILE BOOKING A SEAT....................................
var ticket = 0;
var seats = [];
function color(id) {
  var element = document.getElementById(id);
  if (ticket < 6) {
    if (element.style.backgroundColor == "green") {
      element.style.backgroundColor = "gray";
      ticket -= 1;
      var index = seats.indexOf(document.getElementById(id).value);
      seats.splice(index, 1);
    } else {
      element.style.backgroundColor = "green";
      ticket += 1;
      //console.log("seat no:" + document.getElementById(id).value);
      seats.push(document.getElementById(id).value);
    }
  } else if (ticket == 6 && element.style.backgroundColor == "green") {
    element.style.backgroundColor = "gray";
    ticket -= 1;
    var index = seats.indexOf(document.getElementById(id).value);
    seats.splice(index, 1);
  } else {
    alert("Maximum No. of seats allowed to book are SIX(6) only!!");
  }
  console.log(seats);
}

//////////////CANCEL ALERT BOX/////////////////////////////////////
function cancel() {
  let confirm = window.confirm("Do you want to Cancel the Booking?");
  if (confirm) {
    window.location.href = "Book.html";
  }
}
///////////////BOOKNOW ALERT BOX/////////////////////////////////
var pnrNo;
var database;
function book() {
  if (ticket != 0) {
    var pnrid = Math.floor(Math.random() * 100000);
    pnrNo = pnrid;
    alert(
      "YOUR PNR NO. IS :" +
        pnrid +
        "\n SEAT :" +
        seats +
        "\n No. Of tickets:" +
        seats.length
    );
    document.write(
      "<div style='margin:10% 30% 10% 30%;padding:2%; background-color:LightGray; border:2px solid gray;border-radius:5px'>" +
        "<h3 style='text-align:center;color:green'>BOOKING SUCCESSFULL</h3>" +
        "<div style='margin:0rem 5rem 1rem 2rem'><label style='font-weight:700'>PNR No. </label>:" +
        "<h5>" +
        pnrNo +
        "</h5></div>" +
        "<div style='margin:0rem 4rem 1rem 2rem'><label style='font-weight:700'>Seat Numbers </label>:" +
        "<h5>" +
        seats +
        "</h5></div>" +
        "<div style='margin:0rem 3rem 1rem 2rem'><label style='font-weight:700'>No. Of Tickets </label>:" +
        "<h5>" +
        seats.length +
        "</h5></div>" +
        "<div><button onclick='window.print()'>Print</button>" +
        " " +
        "<button onclick=location.href='index.html'>Return to Home Page</button></div>" +
        "</div>"
    );
    database = [];
    var bookings = {
      pnrNo: pnrNo,
      seats: seats,
      tickets: seats.length,
    };
    database.push(bookings);
  } else {
    alert("Select Minimum of 1 seat to proceed");
  }
}
//document.getElementById("pnr").innerHTML = pnrNo;
//console.log(pnrNo);

/////////////////////////   DATABASE OF BOOKINGS /////////////////////////////////
