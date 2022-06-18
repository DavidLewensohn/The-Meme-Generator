'use strict'
var gImgs = createGImg()

renderGallery()

function renderGallery() {
    // creat the images in html
    let elImagesContainer = document.querySelector('.images-container')
    var innerHtml = ''
    gImgs.forEach(img => {
        innerHtml += `<div class="image-item ${img.id}" onclick="onImgSelect( ${img.id})"></div>`    
    }) 
    
    elImagesContainer.innerHTML = innerHtml

    // render the images to gallery
    let elImages = document.querySelectorAll('.image-item')
    console.log(elImages)
    elImages.forEach((image) => {
        image.style.backgroundImage = `url(meme-imgs-s/${image.classList[1]}.jpg)`
    })

}

function onImgSelect(imgNum) {
    creatMeme()
    document.querySelector('.main-gallery-container').style.display = 'none'
    document.querySelector('.main-meme-maker').style.display = 'flex'
    setImg(imgNum)

}

function onRandomMeme(ev) {
    ev.preventDefault()
    setRandomMeme()
    document.querySelector('.main-gallery-container').style.display = 'none'
    document.querySelector('.main-meme-maker').style.display = 'flex'
    setImg(getRandomIntInclusive(0, 17))
}

function onSearch(ev) {
    ev.preventDefault()
    createGImg()
    const elSearchInput = document.querySelector('[name=search]')
    const searchWord = elSearchInput.value
    if (!searchWord){
        createGImg()
        renderGallery()
        return
    }
    gImgs =  gImgs.filter((img) => {
        return (img.keywords.includes(searchWord)) 
    })
    renderGallery()

}

function createGImg() {
    gImgs = [
        { id: 1, url: 'meme-imgs-s/1.jpg', keywords: ['funny', 'Trump'] },
        { id: 2, url: 'meme-imgs-s/2.jpg', keywords: ['funny', 'dog', 'cute'] },
        { id: 3, url: 'meme-imgs-s/3.jpg', keywords: ['funny', 'dog', 'cute'] },
        { id: 4, url: 'meme-imgs-s/4.jpg', keywords: ['funny', 'dog', 'cute', 'baby'] },
        { id: 5, url: 'meme-imgs-s/5.jpg', keywords: ['funny', 'baby', 'cute', 'strong'] },
        { id: 6, url: 'meme-imgs-s/6.jpg', keywords: ['funny'] },
        { id: 7, url: 'meme-imgs-s/7.jpg', keywords: ['funny', 'baby', 'cute'] },
        { id: 8, url: 'meme-imgs-s/8.jpg', keywords: ['funny', 'cute',] },
        { id: 9, url: 'meme-imgs-s/9.jpg', keywords: ['funny', 'baby', 'cute'] },
        { id: 10, url: 'meme-imgs-s/10.jpg', keywords: ['funny', 'Obama', 'cute'] },
        { id: 11, url: 'meme-imgs-s/11.jpg', keywords: ['funny', 'fite'] },
        { id: 12, url: 'meme-imgs-s/12.jpg', keywords: ['funny', 'zsadik', 'cute'] },
        { id: 13, url: 'meme-imgs-s/13.jpg', keywords: ['funny', 'de caprio', 'cute'] },
        { id: 14, url: 'meme-imgs-s/14.jpg', keywords: ['funny', 'metrix', 'cute'] },
        { id: 15, url: 'meme-imgs-s/15.jpg', keywords: ['funny', 'baby', 'cute'] },
        { id: 16, url: 'meme-imgs-s/16.jpg', keywords: ['funny', 'baby', 'cute'] },
        { id: 17, url: 'meme-imgs-s/17.jpg', keywords: ['funny', 'Putin', 'cute'] },
        { id: 18, url: 'meme-imgs-s/18.jpg', keywords: ['funny', 'baby', 'cute'] },
    
    ]
    return gImgs
}