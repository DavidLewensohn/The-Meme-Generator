'use strict'

var gMeme = {
    imgSrc: '',
    text: '',
    color: '',
    fontSize: '90',
    fontFamily: 'Arial',
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.text = text
    console.log(gMeme.text.value)
}

function setLineColor(color) {
    gMeme.color = color
    console.log(gMeme.color.value)
    
}



function setImg(imgNum) {
    gMeme.imgSrc = `meme-imgs-s/${imgNum}.jpg`
    console.log(gMeme.imgSrc)
    renderMeme()
}

function setLineSizelarger() {
    gMeme.fontSize = +gMeme.fontSize + 5
}

function setLineSizeSmaller() {
    gMeme.fontSize = +gMeme.fontSize - 5

}