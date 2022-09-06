
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

    const formLogIn = document.getElementById("formLogIn")
    const formSignUp = document.getElementById("formSignUp")


    document.querySelector("#linkSignUp").addEventListener("click", e => {
        e.preventDefault()
       formLogIn.classList.add("d-none")
       formSignUp.classList.remove("d-none")
    })
    document.querySelector("#linkLogIn").addEventListener("click", e => {
        e.preventDefault()
        formLogIn.classList.remove("d-none")
        formSignUp.classList.add("d-none")
     })

/*LOG IN*/


  class User {
    constructor(mail, password, username, number){
        this.mail = mail
        this.password = password
        this.username = username
        this.number = number
    }
}

const users = []

  formLogIn.addEventListener('submit', (e) => {
    e.preventDefault()

    const datLog = new FormData(e.target)

    const user = new User(datLog.get("mail"), datLog.get("password"))

    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))

    formLogIn.reset()

})

/*SIGN UP */

if(localStorage.getItem('users')) { 
    signUp =  JSON.parse(localStorage.getItem('users')) 
} else {
    localStorage.setItem('signUp', JSON.stringify('users')) 
}

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault()
    const datSign = new FormData(e.target)

    const user = new User(datSign.get("username"), datSign.get("mail"), datSign.get("number"), datSign.get("password"))

    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))

    formSignUp.reset()

})


/*RESERVAS*/

class Reserva {
    constructor(mail, checkin, checkout, carpa) {
        this.mail = mail
        this.checkin = checkin
        this.checkout = checkout
        this.carpa = carpa
    }
}

let reservas = []

if(localStorage.getItem('reservas')) { //String si existe / NULL si no existe
    reservas =  JSON.parse(localStorage.getItem('reservas')) //JSON.parse() pasa de JSON a objeto
} else {
    localStorage.setItem('reservas', JSON.stringify(reservas)) //JSON.stringify() pasar de objeto a JSON
}

const form = document.getElementById("idForm")
const divReservas = document.getElementById("divReservas")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const reserva = new Reserva(datForm.get("mail"), datForm.get("checkIn"), datForm.get("checkOut"), datForm.get("carpa"))
    
    reservas.push(reserva)

    localStorage.setItem('reservas', JSON.stringify(reservas))

    form.reset()

    agregarReserva()

    /*ALERTA DE RESERVA*/
    Swal.fire({
        icon: 'success',
        title: 'Gracias!',
        text: 'Su reserva ha sido generada con éxito',
        footer: '<a href="#divReservas">Ver detalle en reservas</a>'
      })
 
})

const agregarReserva = () =>  {
    const reservasStorage = JSON.parse(localStorage.getItem('reservas'))

    divReservas.innerHTML = ""

    reservasStorage.forEach((reserva, indice) => {
        
        divReservas.innerHTML += `
            <div class="card text-white bg-primary mb-3" id="reserva${indice}" style="max-width: 18rem;margin:3px;">
                <div class="card-header"><h2>Su reserva ${reserva.carpa} fue generada con exito<h2></div>
                <div class="card-body">
                    <p class="card-title">Mail de reserva:${reserva.mail}</p>
                    <p class="card-text">CheckIn:${reserva.checkin}  CheckOut:${reserva.checkout}</p>
                    <button class="btn btn-light">Cancelar Reserva</button>
                </div>
            </div>
        `
    })
    
    reservasStorage.forEach((reserva, indice) => {
        const tarjetaReserva = document.getElementById(`reserva${indice}`)

        tarjetaReserva.children[1].children[2].addEventListener('click', () => {
            tarjetaReserva.remove() //DOM
            reservas.splice(indice, 1) //Array
            localStorage.setItem('reservas', JSON.stringify(reservas)) //Local storage
            console.log(`${reservas.mail} Eliminada`)
        })
    })
}

const API_KEY = "443da7fd777769b251b07c6919030b72"

const divClima = document.getElementById('divClima')

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-37.88867978530105&lon=-57.84369295980382&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({main}) => {
        divClima.innerHTML = `
        <div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Sierra de los Difuntos, Bs As, Arg</div>
  <div class="card-body">
    <h4 class="card-title">Clima</h4>
    <p class="card-text">Temperatura ${main.temp} °C </p>
    <p class="card-text">Sensaciòn Tèrmica ${main.feels_like} °C </p>
    <p class="card-text">Humedad ${main.humidity} % </p>
  </div>
</div>`
    
    })




