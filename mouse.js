var micanvas = document.getElementById("areaDeDibujo");
papel = micanvas.getContext("2d");
var btnAmarillo = document.getElementById("botonAmarillo");
var btnRojo = document.getElementById("botonRojo");
var btnVerde = document.getElementById("botonVerde");
var btnAzul = document.getElementById("botonAzul");
var btnNegro = document.getElementById("botonNegro");
var btnBorrar = document.getElementById("botonBorrar");
var xi,yi;
var toque = false;
var borrador = false;
var colorLinea = "black";
var ancho = 4;
var alto = 4;

dibujarLinea(colorLinea, 0, 0, 300, 0);
dibujarLinea(colorLinea, 300, 0, 300, 300);
dibujarLinea(colorLinea, 300, 300, 0, 300);
dibujarLinea(colorLinea, 0, 300, 0, 0);

micanvas.addEventListener("mousedown" , botonPresionado);
micanvas.addEventListener("mouseup" , botonLibre);
micanvas.addEventListener("mousemove" , dibujarOBorrar);
btnAmarillo.addEventListener("click" , lineaAmarilla);
btnRojo.addEventListener("click" , lineaRoja);
btnAzul.addEventListener("click" , lineaAzul);
btnVerde.addEventListener("click" , lineaVerde);
btnNegro.addEventListener("click" , lineaNegra);
btnBorrar.addEventListener("click" , borrarDibujo);

function borrarDibujo()
{
borrador = true;

}

function lineaAmarilla()
{
  colorLinea = "yellow";
  borrador= false;
  console.log(colorLinea);
}

function lineaRoja()
{
  colorLinea = "red";
    borrador= false;
}

function lineaVerde()
{
  colorLinea = "green";
    borrador= false;
}

function lineaAzul()
{
  colorLinea = "blue";
    borrador= false;
}

function lineaNegra()
{
  colorLinea = "black";
    borrador= false;
}

function botonPresionado(evento)
{
  toque = true;
  xi = evento.layerX;
  yi = evento.layerY;
}

function botonLibre()
{
  toque = false;

}

function dibujarOBorrar(evento)
{
  if (borrador == true)
  {
    if (toque == true)
    {
      papel.clearRect(evento.layerX , evento.layerY , ancho , alto);
    }
  }else
    {
      dibujarMouse(evento);
    }
}

function dibujarMouse(evento)
{

  if (toque == true)
   {
      dibujarLinea(colorLinea, xi, yi, evento.layerX, evento.layerY);
      xi = evento.layerX;
      yi = evento.layerY;
   }

}



function dibujarLinea(color, xinicial,yinicial,xfinal,yfinal)
{
  papel.beginPath(); //indicamos que comenzamos el trazo
  papel.strokeStyle = color;// color del trazo
  papel.moveTo(xinicial,yinicial); //punto inicial del trazo
  papel.lineTo(xfinal,yfinal); // posicion final del trazo
  papel.stroke();//se dibuja el trazo
  papel.closePath();//se finaliza el trazo
}
