let countHome = 0
let countGuest = 0
let homePoints = document.getElementById('home-points')
let guestPoints = document.getElementById('points') 

let boxNumHome1 = document.getElementById('boxNum-home1').addEventListener("click", ()=> {
    countHome = countHome += 1
    homePoints.innerHTML = countHome
})
let boxNumHome2 = document.getElementById('boxNum-home2').addEventListener("click", ()=> {
    countHome = countHome += 2
    homePoints.innerHTML = countHome
})
let boxNumHome3 = document.getElementById('boxNum-home3').addEventListener("click", ()=> {
    countHome = countHome += 3
    homePoints.innerHTML = countHome
})
let boxNum1 = document.getElementById('boxNum1').addEventListener("click", ()=> {
    countGuest = countGuest += 1
    guestPoints.innerHTML = countGuest
})

let boxNum2 = document.getElementById('boxNum2').addEventListener("click", ()=> {
    countGuest = countGuest += 2
    guestPoints.innerHTML = countGuest
})

let boxNum3 = document.getElementById('boxNum3').addEventListener("click", ()=> {
    countGuest = countGuest += 3
    guestPoints.innerHTML = countGuest
})

let reset = document.getElementById('reset-btn').addEventListener("click", () => {
    countGuest = 0
    countHome = 0
    guestPoints.innerHTML = countGuest
    homePoints.innerHTML = countHome
    
})

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById('clock').innerHTML = date.toLocaleTimeString();
}





// function increment() {
//     boxNum.adEventListener('click', ()=> {
//         count = count++
//     })
// }
// increment()

        



    