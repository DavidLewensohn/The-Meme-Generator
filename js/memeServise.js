'use strict'

var gMeme



function creatMeme() {
   gMeme = {
        imgSrc: '',
        selectedLineIdx: 0,
        lines: [
            {
                text: '',
                color: 'white',
                pos: { y: 100, x: 225 },
                fontSize: 50,
                fontFamily: 'Impact',
                isDrag: false,
            }
        ]
    }
    return gMeme
}

function setImg(imgNum) {
    gMeme.imgSrc = `meme-imgs-s/${imgNum}.jpg`
    console.log('hi',gMeme.imgSrc)
    renderMeme()
}

function getMeme() {
    return gMeme
}

function setLineTxt(text, xPos) {
    gMeme.lines[gMeme.selectedLineIdx].text = text
    gMeme.lines[gMeme.selectedLineIdx].pos.x = xPos
    console.log(gMeme.lines[gMeme.selectedLineIdx].text)
}

function setLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    console.log(gMeme.lines[gMeme.selectedLineIdx].color)

}

function setLineSizelarger() {
    gMeme.lines[gMeme.selectedLineIdx].fontSize += 5
}

function setLineSizeSmaller() {
    gMeme.lines[gMeme.selectedLineIdx].fontSize -= 5

}

function switchLine(req) {
    console.log('swiching line:', req)

    if (req == 'add') {
        gMeme.selectedLineIdx++
        addLine()
    } else if (req === 'line-up') {
        if (gMeme.selectedLineIdx >= 1) gMeme.selectedLineIdx--
    }
    else if (req === 'line-down') {
        console.log(gMeme.selectedLineIdx, gMeme.lines.length);
        if (gMeme.selectedLineIdx < gMeme.lines.length - 1) gMeme.selectedLineIdx++
    }

    console.log(gMeme.selectedLineIdx)
    resetTextInput(gMeme.lines[gMeme.selectedLineIdx].text)
    console.log(gMeme.lines[gMeme.selectedLineIdx].text)
}

function addLine() {
    gMeme.lines[gMeme.selectedLineIdx] = {
        text: '',
        color: 'white',
        pos: { y: 100, x: 225 },
        fontSize: 50,
        fontFamily: 'Impact',
        isDrag: false,
    }
    console.log(gMeme)
}

function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
}

function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
    console.log(isDrag);
}

function setRandomMeme() {
    var text = getRandomSentence()
    var textWid = ctx.measureText(text).width
    var x = elCanvas.width / 2 - (textWid / 2)
    console.log('textWidth', textWid);
    console.log(x);
    gMeme = {
        imgSrc: String(getRandomIntInclusive(0, 18)),
        // selectedLineIdx: getRandomIntInclusive(0,2),
        selectedLineIdx: 0,
        lines: [
            {
                text,
                color: getRandomColor(),
                pos: { y: 100, x },
                fontSize: getRandomIntInclusive(25, 75),
                fontFamily: 'Impact',
                isDrag: false,
            }
        ]
        
    }


}
