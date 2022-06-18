'use strict'
renderGallery()


function renderGallery() {
    // creat the images in html
    let elImagesContainer = document.querySelector('.images-container')
    var innerHtml = ''
    for (var i = 1; i < 7; i++) {
        innerHtml += `<div class="image-item ${i}" onclick="onImgSelect( ${i})"></div>`
    }
    elImagesContainer.innerHTML = innerHtml

    // render the images to gallery
    let elImages = document.querySelectorAll('.image-item')
    console.log(elImages)
    elImages.forEach((image, idx) => {
        image.style.backgroundImage = `url(meme-imgs-s/${idx + 1}.jpg)`
    })

}

function onImgSelect(imgNum) {
    setImg(imgNum)

}