/*servicios*/
const SERVICIOS_ARRAY = [
    {
        img: "aca va img",
        id: "1",
        nombre: "Menu Desayuno", 
        caracteristicas: "Cafe, Te o Mate con Tostadas y galletitas varias",
        precio: "500",
    },
    {
        img: "aca va img",
        id: "2",
        nombre: "Menu Hamburguesa", 
        caracteristicas: "Hamburguesa carne o veggie con papas y bebida a eleccion",
        precio: "1500",
    },
    {
        img: "aca va img",
        id: "3",
        nombre: "Menu Sandwich", 
        caracteristicas: "Sandwich y bebida a eleccion",
        precio: "1300",
    },
    {
        img: "aca va img",
        id: "4",
        nombre: "Menu Pizza", 
        caracteristicas: "Dos porciones de pizza y bebida a eleccion",
        precio: "1600",
    },
]
class Menu {
    constructor(img, id, nombre, caracteristicas, precio) {
        this.img = img
        this.id = id
        this.nombre = nombre
        this.caracteristicas = caracteristicas
        this.precio = precio
    }
    obtenerInfo(){
        return `ID: ${this.id} | ${this.nombre} $${this.precio}`;
    }
    obtenerPrecio(){
        return `${this.nombre} = $${this.precio}`; 
    }

}

const carrito = []

const obtenerInfoProductos =(productosArray) => {
    return productosArray.map((elemento) => elemento.obtenerInfo()).join('\n')
}
const agregarAlCarritoById = (productos) => {
   const infoProductos = obtenerInfoProductos(productos);
   const id = prompt("Ingrese el ID del menu que desea agregar al carrito:\n" + infoProductos)
   const producto = productos.find((producto) => producto.id === id);
   if (!producto) return;
   carrito.push(producto);
   alert("Menu agregado al carrito");
}

const imprimirCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto)=> {
        console.log(producto.obtenerPrecio());
    });
}


const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio;
    });
    return total;
};

const productos = SERVICIOS_ARRAY.map(producto => new Menu (
    producto.img,
    producto.id,
    producto.nombre,
    producto.descripcion,
    producto.precio,
)
);

agregarAlCarritoById(productos);
agregarAlCarritoById(productos);
agregarAlCarritoById(productos);

imprimirCarrito(carrito);
console.log("Total: $" + obtenerTotal(carrito));