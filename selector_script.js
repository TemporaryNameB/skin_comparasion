let select_flat = document.getElementById("image-select-flat");
select_flat.addEventListener("mousedown", function(e) {
  e.preventDefault();
  let option = e.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});

let select_r301 = document.getElementById("image-select-r301");
select_r301.addEventListener("mousedown", function(e) {
  e.preventDefault();
  let option = e.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});

let select_pk = document.getElementById("image-select-pk");
select_pk.addEventListener("mousedown", function(e) {
  e.preventDefault();
  let option = e.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});

let select_wg = document.getElementById("image-select-wg");
select_wg.addEventListener("mousedown", function(e) {
  e.preventDefault();
  let option = e.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});

let select_r99 = document.getElementById("image-select-r99");
select_r99.addEventListener("mousedown", function(e) {
  e.preventDefault();
  let option = e.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});

let select_car = document.getElementById("image-select-car");
select_car.addEventListener("mousedown", function(d) {
  d.preventDefault();
  let option = d.target;
  if (option.tagName === "OPTION") {
    option.selected = !option.selected;
  }
});
