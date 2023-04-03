// Получаем все нужные элементы со страницы
const imageSelect_flat = document.getElementById("image-select-flat");
const imageSelect_r301 = document.getElementById("image-select-r301");
const imageSelect_pk =  document.getElementById("image-select-pk");
const imageSelect_wg =  document.getElementById("image-select-wg");
const imageSelect_r99 = document.getElementById("image-select-r99");
const imageSelect_car = document.getElementById("image-select-car");

const images =          document.querySelectorAll(".image");
const compareButton =   document.getElementById("compare-button");

// обработчик нажатия на кнопку "Сравнить"
compareButton.addEventListener("click", () => {
    // получаем выбранные значения из и записываем в Array
    const selectedValues_flat =   Array.from(imageSelect_flat.selectedOptions, option => option.value);
    const selectedValues_r301 =   Array.from(imageSelect_r301.selectedOptions, option => option.value);
    const selectedValues_pk =     Array.from(imageSelect_pk.selectedOptions, option => option.value);
    const selectedValues_wg =     Array.from(imageSelect_wg.selectedOptions, option => option.value);
    const selectedValues_r99 =    Array.from(imageSelect_r99.selectedOptions, option => option.value);
    const selectedValues_car =    Array.from(imageSelect_car.selectedOptions, option => option.value);

    // соединяем все значения в один Array
    var selectedValues = selectedValues_flat.concat(selectedValues_r301);
    selectedValues = selectedValues.concat(selectedValues_pk);
    selectedValues = selectedValues.concat(selectedValues_wg);
    selectedValues = selectedValues.concat(selectedValues_r99);
    selectedValues = selectedValues.concat(selectedValues_car);


    // Скрываем все изображения
    images.forEach(image => {
        image.style.display = "none";
        image.style.zIndex = '-1';
    });

    selectedValues.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });
});
