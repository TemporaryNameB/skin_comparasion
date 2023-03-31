// Получаем все нужные элементы со страницы
const imageSelect_flat = document.getElementById("image-select-flat");
const imageSelect_r301 = document.getElementById("image-select-r301");
const imageSelect_pk = document.getElementById("image-select-pk");
const imageSelect_wg = document.getElementById("image-select-wg");
const imageSelect_r99 = document.getElementById("image-select-r99");
const imageSelect_car = document.getElementById("image-select-car");
const images = document.querySelectorAll(".image");
const compareButton = document.getElementById("compare-button");

// Обработчик нажатия на кнопку "Сравнить"
compareButton.addEventListener("click", () => {
    // Получаем выбранные значения из списка
    const selectedValues_flat =   Array.from(imageSelect_flat.selectedOptions, option => option.value);
    const selectedValues_r301 =   Array.from(imageSelect_r301.selectedOptions, option => option.value);
    const selectedValues_pk =     Array.from(imageSelect_pk.selectedOptions, option => option.value);
    const selectedValues_wg =     Array.from(imageSelect_wg.selectedOptions, option => option.value);
    const selectedValues_r99 =    Array.from(imageSelect_r99.selectedOptions, option => option.value);
    const selectedValues_car =    Array.from(imageSelect_car.selectedOptions, option => option.value);


    // Скрываем все изображения
    images.forEach(image => {
        image.style.display = "none";
        image.style.zIndex = '-1';
    });

    // Показываем выбранные flat изображения
    selectedValues_flat.forEach(value => {
    const image = document.querySelector(`[alt="Картинка ${value}"]`);
    image.style.display = "block";
    });

    // Показываем выбранные r301 изображения
    selectedValues_r301.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });

    // Показываем выбранные pk изображения
    selectedValues_pk.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });

    // Показываем выбранные wg изображения
    selectedValues_wg.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });

    // Показываем выбранные r99 изображения
    selectedValues_r99.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });

    // Показываем выбранные car изображения
    selectedValues_car.forEach(value => {
        const image = document.querySelector(`[alt="Картинка ${value}"]`);
        image.style.display = "block";
    });

});
