const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    // hide all images
    images.forEach(image => {
        image.style.display = "none";
        image.style.zIndex = '-1';
    })

    let temp = Array.from(select[0].options);
    for (var i = 1; i < 5; i++) {
        temp = temp.concat(Array.from(select[i].options));;
    }

    //remove the selection
    for(var i = 0; i < temp.length; i++){
        temp[i].selected = false;
    }
});
