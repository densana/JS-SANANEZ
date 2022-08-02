/*servicios*/

class Bebidas {
    constructor(producto, caracteristicas, precio) {
        this.producto = producto
        this.caracteristicas = caracteristicas
        this.precio = precio
    }
}

const bebida1 = new Bebidas("agua", "2,5 lts", "300")
const bebida2 = new Bebidas("Gaseosa", "2,5 lts", "500")
const bebida3 = new Bebidas("Jugo", "1,5 lts", "340")


console.log(bebida1)
console.log(bebida2)
console.log(bebida3)

let comidas = [
    {
        producto:"Pastas con salsa",
        caracteristicas:"Fideos, Ravioles o Ñoquis",
        precio: 1000,
},
    {
        producto:"Choripan",
        caracteristicas:"Acompañado con Papas",
        precio: 800,
},
    {
        producto:"Sandwich de Milanesa",
        caracteristicas:"Opción de Carne o Veggie",
        precio: 950,
},
    {
        producto:"Hamburguesa",
        caracteristicas:"Opción de carne o veggie con tomate, lechuga y queso",
        precio: 1000,
}
]

let kiosko = [
    {
        producto:"Yerba",
        caracteristicas:"1 kl",
        precio: 1000,
},
    {
        producto:"Café en saquitos",
        caracteristicas:"Caja de 25 unidades",
        precio: 500,
},
    {
        producto:"Té Negro",
        caracteristicas:"Caja de 25 unidades",
        precio: 450,
},
    {
        producto:"Alfajores",
        caracteristicas:"Chocolate",
        precio: 400,
},
    {
        producto:"Galletitas",
        caracteristicas:"Dulces o Saladas",
        precio: 400,
},
]

console.log(comidas)
console.log(kiosko)
