const resetButton =   document.getElementById("reset-button");

resetButton.addEventListener("click", () => {

  // Скрываем все изображения
  images.forEach(image => {
    image.style.display = "none";
    image.style.zIndex = '-1';
  })

  //remove the selection
  let temp = Array.from(selectFlat.options);
  temp = temp.concat(Array.from(selectR301.options));
  temp = temp.concat(Array.from(select_pk.options));
  temp = temp.concat(Array.from(select_wg.options));
  temp = temp.concat(Array.from(select_r99.options));
  temp = temp.concat(Array.from(select_car.options));
  
  for(var i = 0; i < temp.length; i++){
    temp[i].selected = false;
  }

});