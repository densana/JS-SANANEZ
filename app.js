/*reservas*/

const formulario = document.getElementById('formularioReservas');
const inputs = document.querySelectorAll('formularioReservas input');

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.getElementById('inputName');
    const mail = document.getElementById('inputMail');
    const contacto = document.getElementById('inputContacto');
}

formulario.addEventListener('submit', validarFormulario() );

/*servicios*/

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

const menu1 = new Menu ("aca va img","1", "Menu Desayuno", "Cafe, Te o Mate con Tostadas y galletitas varias", "$500")
const menu2 = new Menu ("aca va img","2", "Menu Hamburguesa", "Hamburguesa carne o veggie con papas y bebida a eleccion", "$1500")
const menu3 = new Menu ("aca va img","3", "Menu Pizza", "2 porciones pizza a eleccion + bebida a elección", "$1000")
const menu4 = new Menu ("aca va img","4", "Menu Sandwich", "de choripan o veggie + bebida a elección", "$500")


const menues = [menu1, menu2, menu3, menu4]
console.log(menues)

const servicios = document.querySelector('#cardServicios')

menues.forEach(arrayServicios => {
    servicios.innerHTML += `
    <img src="${arrayServicios.img}" class="card-img-top" alt="menu-img">
    <div class="card-body">
      <h5 class="card-title">${arrayServicios.nombre}</h5>
      <p class="card-text">${arrayServicios.caracteristicas}</p>
      <a href="#" class="btn btn-primary">Agregar a carrito</a>
    </div>`
});