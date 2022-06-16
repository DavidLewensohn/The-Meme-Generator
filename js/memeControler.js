'use strict'

renderMeme()


function renderMeme() {
    let elCanvas = document.querySelector('canvas')
    let ctx = elCanvas.getContext('2d')

    var img = new Image()
    var meme = getMeme()
    img.src = meme.imgSrc


    //     renering image:
    img.onload = () => {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)

        //     rendering text: '90px Arial'

        var y = 100, x = 100, text = meme.text
        ctx.font =  `${meme.fontSize}px ${meme.fontFamily}`
        ctx.fillStyle = meme.color.value
        ctx.fillText(text, x, y)
        ctx.strokeText(text, x, y)

    }



}

function onTextInput(ev) {
    ev.preventDefault()
    let elTextInput = document.querySelector('[name=text-input]')
    setLineTxt(elTextInput.value)
    console.log(elTextInput.value)
    renderMeme()
}

function onColorInput(ev) {
    ev.preventDefault()
    let elColorInput = document.querySelector('[name=color-input]')
    setLineColor(elColorInput)
    console.log(elColorInput)
    renderMeme()
}

function onLargeText() {
    setLineSizelarger()
    renderMeme()
}
function onSmallText() {
    setLineSizeSmaller()
    renderMeme()
}


