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

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('InputName').value;
    const mail = document.getElementById('InputMail').value;
    const number = document.getElementById('InputNumber').value;
    
    console.log(username, mail, number)

    const user = new User(username, mail, number)

    users.push(user)

    formulario.reset()
    console.log(users)
});


/*servicios*/

class Menu {
    constructor(img, id, nombre, caracteristicas, precio) {
        this.img = img
        this.id = id
        this.nombre = nombre
        this.caracteristicas = caracteristicas
        this.precio = precio
    }
}

const menu1 = new Menu ("aca va img","1", "Menu Desayuno", "Cafe, Te o Mate con Tostadas y galletitas varias", "$500")
const menu2 = new Menu ("aca va img","2", "Menu Hamburguesa", "Hamburguesa carne o veggie con papas y bebida a eleccion", "$1500")
const menu3 = new Menu ("aca va img","3", "Menu Pizza", "2 porciones pizza a eleccion + bebida a elección", "$1000")
const menu4 = new Menu ("aca va img","4", "Menu Sandwich", "de choripan o veggie + bebida a elección", "$500")


const menues = [menu1, menu2, menu3, menu4]

const servicios = document.querySelector('#contenedorServicios')

menues.forEach(arrayServicios => {
    servicios.innerHTML += `
    <div class="col-sm-3">
            <div class="card style="width: 18rem;">
              <div class="card-body">
                <img src="${arrayServicios.img}" alt="icon">
                <h5 class="card-title">${arrayServicios.nombre}</h5>
                <p class="card-text">${arrayServicios.caracteristicas}</p>
                <button id="add" class="btn btn-primary">Agregar a carrito</button>
              </div>
            </div>
          </div>
    `

    const boton = document.getElementById("add")

    boton.addEventListener('click', () => {
        /*agregarAlCarrito(arrayServicios.id)*/
        console.log("cucu")
    })

});

/*carrito*/

const carrito = []

const agregarAlCarrito = (menuId) => {
    const item = menues.find((prod) => prod.id === menuId)
    carrito.push(item);
    console.log(carrito);
}

