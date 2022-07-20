// Сохраняем API адрес (баззу данных) в переменую APPI
const API = "http://localhost:8000/trip";

//Сохраням в переменные все инпуты и кнопки для ввода данных

let inpTitle = document.getElementById('inpTitle');
let inpDesc = document.getElementById('inpDesc');
let inpImg = document.getElementById('inpImg');
let inpPrice = document.getElementById('inpPrice');
let btnAdd = document.getElementById('btnAdd');


// Навешиваем события на кнопку btnAdd
btnAdd.addEventListener('click', () => {
    if(!inpTitle.value.trim() || !inpDesc.value.trim() || !inpImg.value.trim() || !inpPrice.value.trim()){
        return alert("Error, please enter all inputs")
    }
    let newTrip = {
        tripTitle: inpTitle.value,
        tripDesc: inpDesc.value,
        tripImg: inpImg.value,
        tripPrice: +inpPrice.value
    }
createTrip(newTrip)
})

//! ======= CCREATE =========
function createTrip(tripObj){
    fetch(API,{
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(tripObj)
    })

    inpTitle.value = "";
    inpDesc.value = "";
    inpImg.value = "";
    inpPrice.value = "";

}