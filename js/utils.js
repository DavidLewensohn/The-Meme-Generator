'use strict'

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomSentence(length = 15) {
    var idx = getRandomIntInclusive(0, length-1)
    console.log(memesSentences[idx]);
    return memesSentences[idx]


}