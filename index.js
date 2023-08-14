function orden() {
    alert("Bienvenidos a GAMBOA, bar de vinos y pastas");
}

function pedido() {
    const hacerpedido = prompt("¿Quieres realizar un pedido? S/N").toUpperCase();
    if (hacerpedido === "S") {
        const solicitud = prompt("¿Qué desea pedir? \n 1-Comida \n 2-Bebida \n 3-Postre").toLowerCase();
        let comida = "";
        let bebida = "";
        let postre = "";

        if (solicitud === "1") {
            comida = prompt("¿Qué desea para comer? \n 1-Pastas $3400 \n 2-Carne c/ guarnición $5000 \n 3-Ensalada completa $3000");
        } else if (solicitud === "2") {
            bebida = prompt("¿Qué desea para beber? \n 1-Gaseosa línea Coca $1200 \n 2-Agua sin gas $1000 \n 3-Agus saborizada $1100");
        } else {
            postre = prompt("¿Qué desea de postre? \n 1-Flan con dulce de leche $2100 \n 2-Bocha de helado $1000 \n 3-Ensalada de frutas $1500");
        }

        const solicitud2 = prompt("¿Desea pedir algo mas? S/N").toUpperCase();
        if (solicitud2 === "S") {
            const solicitud2 = prompt("¿Qué desea pedir? \n 1-Bebida \n 2-Postre");
            if (solicitud2 === "1") {
                bebida = prompt("¿Qué desea para beber? \n 1-Gaseosa línea Coca $1200 \n 2-Agua sin gas $1000 \n 3-Agua saborizada $1100");
            } else {
                postre = prompt("¿Qué desea de postre? \n 1-Flan con dulce de leche $2100 \n 2-Bocha de helado $1000 \n 3-Ensalada de frutas $1500");
            }
        }

        const solicitud3 = prompt("¿Desea pedir algo mas? S/N").toUpperCase();
        if (solicitud3 === "S") {
            const solicitud3 = prompt("¿Qué desea pedir? \n 1-Postre");
            if (solicitud3 === "1") {
                postre = prompt("¿Qué desea de postre? \n 1-Flan con dulce de leche $2100 \n 2-Bocha de helado $1000 \n 3-Ensalada de frutas $1500");
            }
        }

        const pedido = `Pedido ordenado: ${pedidoordenado1(comida)}, ${pedidoordenado2(bebida)}, ${pedidoordenado3(postre)}`;
        alert(pedido);
    } else {
        alert("Gracias por visitarnos!");
    }
}

function pedidoordenado1(opcion) {
    switch (opcion) {
        case "1":
            return "Pastas";
        case "2":
            return "Carne c/ guarnición";
        case "3":
            return "Ensalada completa";
        
        default:
            return "Sin pedido";
    }
}
function pedidoordenado2(opcion) {
    switch (opcion) {
        case "1":
            return "Gaseosa línea Coca";
        case "2":
            return "Agua sin gas";
        case "3":
            return "Agua saborizada";
        
        default:
            return "Sin pedido";
    }
}

function pedidoordenado3(opcion) {
    switch (opcion) {
        case "1":
            return "Flan con dulce de leche";
        case "2":
            return "Bocha de helado";
        case "3":
            return "Agua saborizada";
        
        default:
            return "Ensalada de frutas";
    }
}
orden();
pedido();