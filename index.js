
const menucomida = [
    {id: 1, nombre: "Carne c/ guarnición", precio: 5000},
    {id: 2, nombre: "Pastas", precio: 3400},
    {id: 3, nombre: "Ensalada completa", precio: 3000}
]
let comida  = [];
let pedido = [];
let trueOrFalse = true;

class MenuC {
    constructor({ id, nombre, precio}){
        this.id= id;
        this.nombre = nombre; 
        this.precio = precio;
    }
}
function pushProductos() {
    for (const elemento of menucomida) {
        comida.push(new MenuC(elemento));
        console.log(comida);
    }
}
pushProductos();

function initProgram() {
    while (trueOrFalse) {
      let selectSection = parseInt(
        prompt(
          "Bienvenidos a GAMBOA, ¿Qué quieres hacer? \n 1. Ver menu \n 2. Buscar una comida \n 3. Hacer un pedido \n 4. Salir \n" 
          )
      );
  
      switch (selectSection) {
        case 1:
          verProductos();
          break;
        case 2:
            buscarUnProducto();
          break;
        case 3:
            comprarProducto();
          break;
        case 4:
            trueOrFalse = false;
            break;
      }
    }
  }

  function verProductos() {
    showProducts(comida, alert);
    alert("Fin");
    initProgram();
  }

  function showProducts(arr, fn) {
    for (const elemento of arr) {
      fn(elemento.nombre);
    }
  }
  

  function buscarUnProducto() {
    let comidaABuscar = prompt("Ingrese el nombre de la comida");
    let comidaEncontrada = comida.find((elm) => {
      return elm.nombre === comidaABuscar;
    });
    if (comidaEncontrada) {
      alert(
        comidaEncontrada.nombre +
          " " +
          comidaEncontrada.precio
      );
    } else {
      alert("La comida buscada no existe");
    }
  
    console.log(comidaEncontrada);
    initProgram();
  }
  
  
  
  function comprarProducto() {
    let comidaABuscar = prompt("Ingrese la comida del menu que desea pedir");
    let comidaEncontrada = menucomida.some((elm) => {
      return elm.nombre === comidaABuscar;
    });
    if (comidaEncontrada) {
      alert("El producto existe");
      addToCart(comidaABuscar);
    } else {
      alert("El producto no existe");
    }
  }
  function addToCart(comidaABuscar) {
    let producto = comida.find((elm) => {
      return elm.nombre === comidaABuscar;
    });
    if (producto) {
      pedido.push(producto);
      let confirmar = prompt("Desea agregar otro producto? SI/NO").toUpperCase;
      if (confirmar === "SI") {
        comprarProducto();
      } else {
        sumarPrecioTotal();
      }
    }
  }
  
  function sumarPrecioTotal() {
    let precioTotal = menucomida.reduce(
      (acumulador, producto) => acumulador + producto.precio,
      0
    );
    alert("El precio total es " + precioTotal);

    initProgram();

  }

  initProgram();