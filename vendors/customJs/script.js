'use strict';

// const rent = document.querySelector("#forRent");
// const sale = document.querySelector("#forSale");
// const booking = document.querySelector("#forBooking");


// booking.addEventListener("click", () => {
//     console.log("My name rejoan")
// })

const btnList = document.querySelectorAll(".tab__btn");
const tabBody = document.querySelectorAll(".tab__body");

function hideAll() {
    tabBody.forEach((item, index) => {
        item.style.display = "none";
    })
}


btnList.forEach((item, index) => {
    item.addEventListener("click", () => {
        hideAll()
        tabBody[index].style.display = 'flex'
    })
})

