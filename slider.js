let img = [];
var indice = 0
var slid
img[0] = 'imagenes/1.jpg'
img[1] = 'imagenes/2.jpg'
img[2] = 'imagenes/3.jpg'
img[3] = 'imagenes/4.jpg'
img[4] = 'imagenes/5.jpg'
img[5] = 'imagenes/6.jpg'
img[6] = 'imagenes/7.jpg'
img[7] = 'imagenes/8.jpg'
img[8] = 'imagenes/9.jpg'
img[9] = 'imagenes/10.jpg'
img[10] = 'imagenes/11.jpg'

function cambiarImagen(int) {
    if (int == 1) {
        if (indice < img.length - 1) {
            indice++
        } else {
            indice = 0
        }
    } else {
        if (indice > 0) {
            indice--
        } else {
            indice = img.length - 1
        }
    }
    document.getElementById("img").src = img[indice]
}
function startSlide() {
    let btn = document.getElementById("start")
    if (btn.value == 'Iniciar') {
        slid = setInterval(cambiarImagen, 1000)
        btn.value = 'Parar'
    } else {
        clearInterval(slid)
        btn.value = 'Iniciar'
    }
}


