const allBtn = document.getElementsByClassName("btn-select");

let leftSeat = 40;
let addSeat = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function () {
    const btnColor = "#1DD100";
    btn.style.backgroundColor = btnColor;
    leftSeat = leftSeat - 1;
    const leftseats = document.getElementById("left-seat");
    leftseats.innerText = leftSeat;
    addSeat = addSeat + 1;
    document.getElementById("add-seat").innerText = addSeat;

    const ulConteiner = document.getElementById("selected-conteiner");

    const seatNumber = btn.innerText;
    const p1 = document.createElement("p");
    p1.innerText = seatNumber;

    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    const p3 = document.createElement("p");
    p3.innerText = "550";
    // const converTedp3 = parseInt(p3);

    const ticketConteiner = document.createElement("li");

    ticketConteiner.appendChild(p1);
    ticketConteiner.appendChild(p2);
    ticketConteiner.appendChild(p3);

    ulConteiner.appendChild(ticketConteiner);

    const totalCost = document.getElementById("total-cost").innerText;

    const totalCost2 = parseInt(totalCost);

    const lastTotal = document.getElementById("total-cost").innerText = totalCost2 + 550;

    let cost = document.getElementById("grand").innerText;
    let grandTotal = parseInt(cost);
    let lastGrand = document.getElementById('grand').innerText = lastTotal;

    document.getElementById('cupon-btn',addEventListener('click',
    function cupon() {
      const cupnCode = document.getElementById('coupon-field');
      if (cupnCode.value=='New 15') {
        document.getElementById('grand').innerText = lastTotal - (lastTotal*0.15);
      }
      else{
        if (cupnCode.value=='Couple 20') {
          document.getElementById('grand').innerText = lastTotal - (lastTotal*0.20);
        }
      }
    }))
  });
}

// scroll down //

  
  

  


const scroll = document.getElementById("scroll-down");


scroll.addEventListener("click", function () {
  const scrollTargett = document.getElementById("scroll-target");
  scrollTargett.scrollIntoView({ behavior: "smooth" });
});

