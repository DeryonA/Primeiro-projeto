var setaLeft = window.document.getElementById("seta-left")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDir = window.document.getElementById("seta-dir")

function moverDir() {
    leonardo.style = "display: none"
    bruna.style = "display: flex"
    setaDir.style = "display: none"
    setaLeft.style = "display: flex; margin-top: 55px"
}
function moverLeft() {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaDir.style = "display: flex"
    setaLeft.style = "display: none"
}