'use strict'

renderMeme()


function renderMeme() {
    let gElCanvas = document.querySelector('canvas')
    let gCtx = gElCanvas.getContext('2d')
    console.log(gCtx);

    var img = new Image()
    img.src = 'meme-imgs-s/2.jpg'


    //     renering image:
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        console.log('img.onload:', img.onload);

        //     rendering text:

        var meme = getMeme()
        var y = 100, x = 100, text = meme.text
        gCtx.font = meme.font
        gCtx.fillStyle = meme.color
        gCtx.fillText(text, x, y)
        gCtx.strokeText(text, x, y)

    }



}

function onInput(ev) {
    ev.preventDefault()
    let elTextInput = document.querySelector('[name=text-input]')
    setLineTxt(elTextInput.value)
    console.log(elTextInput.value)
    renderMeme()
}



