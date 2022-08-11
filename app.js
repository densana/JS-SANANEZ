/*reservas*/
class User {
    constructor(username, mail, number){
        this.username = username
        this.mail = mail
        this.number = number
    }
}

const formulario = document.getElementById('formularioReservas');

const users = []

formulario.addEventListener('click', () => {
    const username = document.getElementById('InputName').value;
    const mail = document.getElementById('InputMail').value;
    const number = document.getElementById('InputNumber').value;
    const checkIn = document.getElementById('InputIndia').value;
    const checkOut = document.getElementById('InputInout').value;
    const nroPersonas = document.getElementById('InputPersonas').value;
    
    console.log(username, mail, number)
    console.log(checkIn, checkOut, nroPersonas)

    const user = new User(username, mail, number)

    users.push(user)

    formulario.reset()
    console.log(users)
});


/*menues*/

class Menu {
    constructor(img, id, nombre, caracteristicas, precio) {
        this.img = img
        this.id = id
        this.nombre = nombre
        this.caracteristicas = caracteristicas
        this.precio = precio
    }
}

const menu1 = new Menu ("/images/comer.png","1", "Menu Desayuno", "Cafe, Te o Mate con Tostadas y galletitas varias", "$500")
const menu2 = new Menu ("/images/hamburguesa-con-queso.png","2", "Menu Hamburguesa", "Hamburguesa carne o veggie con papas y bebida a eleccion", "$1500")
const menu3 = new Menu ("/images/comer.png","3", "Menu Pizza", "2 porciones pizza a eleccion + bebida a elección", "$1000")
const menu4 = new Menu ("/images/comer.png","4", "Menu Sandwich", "de choripan o veggie + bebida a elección", "$500")


const menues = [menu1, menu2, menu3, menu4]


/*servicios + carrito*/
const servicios = document.querySelector('#contenedorServicios')

const tBodyCarrito = document.querySelector('#tBodyCarrito')

const carrito = []

menues.forEach(arrayServicios => {
    servicios.innerHTML += `
    <div class="col-sm-3">
            <div class="card style="width: 18rem;">
              <div class="card-body">
                <img class="img-menu" src="${arrayServicios.img}" alt="icon">
                <h5 class="card-title">${arrayServicios.nombre}</h5>
                <p class="card-text">${arrayServicios.caracteristicas}</p>
                <button type="button" class="btn btn-primary">Agregar menu ${arrayServicios.id}</button>
              </div>
            </div>
          </div>
    `
    const botonesComprar = document.querySelectorAll('.btn')
    botonesComprar.forEach((botonDeCompra) => {
    botonDeCompra.addEventListener('click', () => {
        agregarAlCarrito()
    })
})
});

/*carrito*/

const agregarAlCarrito = (menuId) => {
    const item = menues.find((servicio) => servicio.id === menuId)
    carrito.push(item);
    estadoCarrito();
    console.log(carrito);
}

const estadoCarrito = () => {

    carrito.forEach(servicio => {
       tBodyCarrito.innerHTML += `
       <tr>
       <th scope="row">${servicio.id}</th>
       <td>${servicio.nombre}</td>
       <td>${servicio.caracteristicas}</td>
       <td>${servicio.precio}</td>
       </tr>
       `
  })
}

