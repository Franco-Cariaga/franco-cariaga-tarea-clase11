let topping = "Oreo";
let precio = 0;
let precioFinal;
let helado = 1200;

if (topping == "Oreo") {
  precio = 10;
} else if (topping == "KitKat") {
  precio = 15;
} else if (topping == "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}

precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal);




// 1)

let menu;

switch (menu) {
  case "carne":
    console.log("vino tinto");
    break;
  case "pescado":
    console.log("vino blanco");
    break;
  case "verdura":
    console.log("agua");
    break;
  default:
    console.log("elija carne, pescado o verdura");
    break;
}

// 2)

const datos = [12, 24, 3, "Franco", "Matias", "Pablo", true, false];

for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}



datos.push("Perro");

for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}

// 3)

let x = 0;

while (x < 11) {
  console.log("El número es más chico que 11");
  x++;
}
