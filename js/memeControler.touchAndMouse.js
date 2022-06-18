'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos


function addListeners() {
    elCanvas.addEventListener('mousemove', onMove)
    elCanvas.addEventListener('mousedown', onDown)
    elCanvas.addEventListener('mouseup', onUp)


    elCanvas.addEventListener('touchmove', onMove)
    elCanvas.addEventListener('touchstart', onDown)
    elCanvas.addEventListener('touchend', onUp)

    window.addEventListener('resize', () => {

    })
}

function getEvPos(ev) {

    //gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not triger the mouse ev
        ev.preventDefault()
        //gets the first touch point
        ev = ev.changedTouches[0]
        //calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function onDown(ev) {
    console.log('down', ev)
    // get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    // if (!isCircleClicked(pos)) return

    setLineDrag(true)
    // save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    console.log('move', ev)
    const meme = getMeme()
    if (meme.lines[meme.selectedLineIdx].isDrag) {
        const pos = getEvPos(ev)
        //calc the delta , the diff we moved
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy)
        //saved the last pos , we remember wqere weve been and move accordingly
        gStartPos = pos
        //the canvas is render agian after every move
        renderMeme()
    }
}

function moveLine(dx, dy) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].pos.x += dx
    meme.lines[meme.selectedLineIdx].pos.y += dy

}

function onUp() {
    console.log('up')
    setLineDrag(false)

    document.body.style.cursor = 'grab'
}

