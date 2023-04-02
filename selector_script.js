const selectFlat = document.getElementById("image-select-flat");
const selectR301 = document.getElementById("image-select-r301");
let select_pk = document.getElementById("image-select-pk");
let select_wg = document.getElementById("image-select-wg");
let select_r99 = document.getElementById("image-select-r99");
let select_car = document.getElementById("image-select-car");

function toggleOptionSelection(e) {
    e.preventDefault();
    if (e.target.tagName === "OPTION") {
        e.target.selected = !e.target.selected;
    }
}

selectFlat.addEventListener("mousedown", toggleOptionSelection);
selectR301.addEventListener("mousedown", toggleOptionSelection);
select_pk.addEventListener("mousedown", toggleOptionSelection);
select_wg.addEventListener("mousedown", toggleOptionSelection);
select_r99.addEventListener("mousedown", toggleOptionSelection);
select_car.addEventListener("mousedown", toggleOptionSelection);
