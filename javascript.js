let input = document.getElementById("getLink")
let iframe = document.getElementById('iframe')
let span = document.getElementById('span')

var date = new Date()

function load() {
    var textVerify = "https://youtu.be/"
    var textVerify2 = "https://www.youtube.com/watch?v="
    iframe.innerHTML = '<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=' + input.value + '" width="100%" height="100%" scrolling="no"  allowtransparency="true"" style="border:none"></iframe>'
}

function redirect(){
    window.location.href = "https://github.com/matthew-asuncion/"
}

span.innerHTML = ' <span id="span">Desenvolvido por: João Luiz - ' + date.getFullYear() + ' - Créditos: matthew-asuncion <img src="github-icon.png" alt="Github Icon" onclick="redirect()"></span>'