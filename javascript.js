let input = document.getElementById("getLink")
let iframe = document.getElementById('iframe')
let span = document.getElementById('span')

var date = new Date()

function load() {
    var textVerify = "https://youtu.be/"
    var textVerify2 = "https://www.youtube.com/watch?v="
    iframe.innerHTML = '<iframe id="buttonApi" src="https://yt-download.org/api/button/mp3?url=' + input.value + '" width="100%" scrolling="no"  allowtransparency="true"></iframe>'

}

span.innerHTML = ' <span id="span">Desenvolvido por: João Luiz - ' + date.getFullYear() + '</span>'