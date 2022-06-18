'use strict'


let elCanvas = document.querySelector('canvas')
let ctx = elCanvas.getContext('2d')
var textWidth

function renderMeme() {
    console.log('rendering')
    addListeners()

    var img = new Image()
    var meme = getMeme()
    img.src = meme.imgSrc


    img.onload = () => {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)

        meme.lines.forEach((line, i) => {
            // ctx.direction = 'rtl'
            // ctx.textAlign = 'start'

            var y = line.pos.y * (i + 1), x = line.pos.x, text = line.text
            console.log(i, ' text:', line.text)
            ctx.font = `${line.fontSize}px ${line.fontFamily}`


            ctx.fillStyle = line.color
            console.log(i, ' color:', line.color)
            ctx.fillText(text, x, y)
            ctx.strokeText(text, x, y)
            if (i === gMeme.selectedLineIdx) {
                ctx.strokeStyle = '3px'
                ctx.textBaseline = 'middle'
                ctx.strokeRect(elCanvas.width / 2 - textWidth / 2, y - line.fontSize / 2, textWidth + 20, line.fontSize)
            }
        })
    }
}
function clearFrame() {
    var img = new Image()
    var meme = getMeme()
    img.src = meme.imgSrc


    img.onload = () => {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
        meme.lines.forEach((line, i) => {
            var y = line.pos.y * (i + 1), x = line.pos.x, text = line.text
            console.log(i, ' text:', line.text)
            ctx.font = `${line.fontSize}px ${line.fontFamily}`
            ctx.fillStyle = line.color
            console.log(i, ' color:', line.color)
            ctx.fillText(text, x, y)
            ctx.strokeText(text, x, y)
        })
    }
}



function onTextInput() {

    let elTextInput = document.querySelector('[name=text-input]')



    textWidth = ctx.measureText(elTextInput.value).width

    var xPos = elCanvas.width / 2 - textWidth / 2
    setLineTxt(elTextInput.value, xPos)
    console.log(elTextInput.value)
    renderMeme()

}

function onColorInput(ev) {
    ev.preventDefault()
    let elColorInput = document.querySelector('[name=color-input]')
    setLineColor(elColorInput.value)
    console.log(elColorInput.value)
    renderMeme()
}

function onLargeText() {
    setLineSizelarger()
    onTextInput()
}

function onSmallText() {
    setLineSizeSmaller()
    onTextInput()
}

function onSwitchLine(req) {
    switchLine(req)
    resetTextInput()
    renderMeme()

}

function resetTextInput(text) {
    let elTextInput = document.querySelector('[name=text-input]')
    console.log(text)
    // elTextInput.value = text
    elTextInput.placeholder = text

}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
}

function onMoveLineUp() {
    moveLineUp()
    renderMeme()

}
