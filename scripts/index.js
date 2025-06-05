//  Scroll function
function seatSelectingSection() {
  const seatSection = document.getElementById("ticket-section");
  seatSection.scrollIntoView({ behavior: "smooth" });
}

// all Seat function

let totalSelectedSeat = [];
let seats = document.getElementsByClassName("seat");
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    totalSelectedSeat.push(seat);
    if (totalSelectedSeat.length > 4) {
      alert(
        `One Person cannot purchase more than a maximum of four(4) ticket's. Thank You.`
      );
      return;
    }
    // Change the color and text style after the seat selected
    seat.classList.add(
      "bg-dd100",
      "font-inter",
      "text-lg",
      "font-medium",
      "text-white",
      "hover:bg-dd100"
    );
    // Decrease from total seats
    let totalSeatText = document.getElementById("total-seat").innerText;
    let totalSeat = parseInt(totalSeatText);
    totalSeat = totalSeat - 1;
    setInnerText("total-seat", totalSeat);
    // Increase to select your seat
    let SelectYourSeatText = document.getElementById("seat-count").innerText;
    let selectYourSeat = parseInt(SelectYourSeatText);
    selectYourSeat = selectYourSeat + 1;
    setInnerText("seat-count", selectYourSeat);
    // Show the selected seat details to select your seat section
    const seatInfo = document.getElementById("seat-info");
    const seatNumber = event.target.innerText;
    const seatClass = "Economy";
    const seatPrice = 550;
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "text-base",
      "font-inter",
      "font-normal"
    );
    const p1 = document.createElement("p");
    p1.innerText = seatNumber;
    const p2 = document.createElement("p");
    p2.innerText = seatClass;
    const p3 = document.createElement("p");
    p3.innerText = seatPrice;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    seatInfo.appendChild(div);
    // Show the total price;
    let totalPriceText = document.getElementById("total-price").innerText;
    let totalPrice = parseInt(totalPriceText);
    totalPrice = totalPrice + parseInt(seatPrice);
    setInnerText("total-price", totalPrice);
    // Grand total
    setInnerText("grand-total", totalPrice);
    // you can apply the Coupon

    // Enable the apply coupon section
    if (totalSelectedSeat.length === 4) {
      document.getElementById("coupon-input").removeAttribute("disabled");
      document.getElementById("coupon-button").removeAttribute("disabled");
    }
    document
      .getElementById("coupon-button")
      .addEventListener("click", function () {
        const couponValueText = document
          .getElementById("coupon-input")
          .value.trim();
        const couponValue = couponValueText;
        if (couponValue == "NEW15") {
          const TotalPriceValue =
            document.getElementById("total-price").innerText;
          const TotalPrice1 = parseInt(TotalPriceValue);
          let coupon15 = 15 / 100;
          let grandTotalValue = TotalPrice1 * coupon15;
          let grandTotal = TotalPrice1 - grandTotalValue;
          setInnerText("grand-total", grandTotal);
          document
            .getElementById("discount-section")
            .classList.remove("hidden");
          setInnerText("discount-show", grandTotalValue);
          document.getElementById("alert").classList.add("hidden");
          document.getElementById("coupon-section").classList.add("hidden");
        } else if (couponValue == "Couple 20") {
          const TotalPriceValue =
            document.getElementById("total-price").innerText;
          const TotalPrice1 = parseInt(TotalPriceValue);
          let coupon20 = 20 / 100;
          let grandTotalValue = TotalPrice1 * coupon20;
          let grandTotal = TotalPrice1 - grandTotalValue;
          setInnerText("grand-total", grandTotal);
          document
            .getElementById("discount-section")
            .classList.remove("hidden");
          setInnerText("discount-show", grandTotalValue);
          document.getElementById("alert").classList.add("hidden");
          document.getElementById("coupon-section").classList.add("hidden");
        } else {
          document.getElementById("alert").classList.remove("hidden");
        }
      });

    // Enable next button
    document
      .getElementById("phone-number")
      .addEventListener("input", function () {
        const phoneNumber = document.getElementById("phone-number").value;
        if (totalSelectedSeat.length >= 1 && phoneNumber.length >= 1) {
          document.getElementById("next-button").removeAttribute("disabled");
        }
      });
    document
      .getElementById("next-button")
      .addEventListener("click", function () {
        document.getElementById("page-one").classList.add("hidden");
        document.getElementById("page-two").classList.remove("hidden");
      });
    document.getElementById("continue").addEventListener("click", function () {
      document.getElementById("page-two").classList.add("hidden");
      document.getElementById("page-one").classList.remove("hidden");
      window.location.href = "index.html?clear=true";
    });

    // remove the click event from the selected seat
    seat.removeEventListener("click", arguments.callee);
  });
}

// Utility function's

function setInnerText(elementID, value) {
  document.getElementById(elementID).innerText = value;
}
