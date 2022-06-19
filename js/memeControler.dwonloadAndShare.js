'use strict'

var elLink

function download() {
    //protect the image soo attacker could not download imgs from diff domain
    const data = elCanvas.toDataURL()// for security reason you can`t do toDataUrl on tainted canvas
    
    console.log('data: ', data)
    elLink.href = data

    console.log('data: ', data)
    elLink.download = 'my-img.jpg'
}

function downloadCanvas(link) {
    elLink = link
    console.log('elLink:', elLink)
    
    clearFrame()
    setTimeout(download, 5000);
    
    

}