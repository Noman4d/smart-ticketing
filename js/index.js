const allBtn = document.getElementsByClassName('btn-select');

let leftSeat = 40 ; 
let addSeat = 0;

for (const btn of allBtn) {
    btn.addEventListener('click',function () {
        const btnColor = "#1DD100";
        btn.style.backgroundColor = btnColor;
        leftSeat = leftSeat - 1 ; 
        const leftseats = document.getElementById('left-seat');
        leftseats.innerText=leftSeat;
        addSeat = addSeat + 1;
        document.getElementById('add-seat').innerText=addSeat;
    })
}