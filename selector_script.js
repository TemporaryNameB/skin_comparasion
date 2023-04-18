function toggleOptionSelection(e) {
    e.preventDefault();
    if (e.target.tagName === "OPTION") {
        e.target.selected = !e.target.selected;
    }
}

const select = document.getElementsByClassName("image-select");
select[0].addEventListener("mousedown", toggleOptionSelection);
select[1].addEventListener("mousedown", toggleOptionSelection);
select[2].addEventListener("mousedown", toggleOptionSelection);
select[3].addEventListener("mousedown", toggleOptionSelection);
select[4].addEventListener("mousedown", toggleOptionSelection);
select[5].addEventListener("mousedown", toggleOptionSelection);