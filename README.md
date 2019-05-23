# Galeria
•	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes.

 CODIGO
 <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Archivos/Imagenes.css">
    <script src="slider.js"></script>

    <title>GALERIA</title>
</head>

<body>

    <div class="edicion">
       
        <div class="img">
            <img src="imagenes/1.jpg" alt="" id="img">
        </div>
        <div >
            <input class="boton_personalizado" type="button" value="Anterior" onclick="cambiarImagen(0)" >
            <input  class="boton_personalizado"type="button" id="start" value="Iniciar" onclick="startSlide()">
            <input  class="boton_personalizado" type="button" value="Siguente" onclick="cambiarImagen(1)">
        </div>
    </div>

</body>

</body>

</html>

SLIDER
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

ARCHIVOS CSS
*{
    margin: 0;
    padding: 0;
}
body .edicion{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.edicion .img{
    width: 50%;
    height:85%;
}
.edicion .img img{
    width: 100%;
    height: 100%;
}
.boton_personalizado{
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #1883ba;
    border-radius: 6px;
    border: 2px solid #0016b0;
  }
  .boton_personalizado:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
  button{
    text-align: center;
    margin-left: 190px;
    background-color: rgb(173, 173, 173);
    font-size: 40px;
   
}
body{
    background-color: rgb(41, 63, 83);
}


