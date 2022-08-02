/*datos de la reserva */
function datos() {
    const persona1 = {
        nombre: parseInt(prompt("Ingrese su nombre")),
        mail: parseInt(prompt("Ingrese su mail")),
        cel: parseInt(prompt("Ingrese su número de contacto")),
    }
}

datos()

/*reserva*/

function reservas() {
    let reserva = prompt("Selecciona para cuantas carpas queres reservar:")
    while (reserva != "ESC") {
        switch (reserva) {
            case "1":
                    let personas = parseInt(prompt("Ingrese la cantidad de personas por carpa"))
                alert("Reserva de una carpa para " + personas)
                break;
            case "2":
                let acumulador2 = 0
        
                for(let i = 0; i<2 ; i++) {
                    let personas2 = parseInt(prompt("Ingrese la cantidad de personas por carpa"))
                    acumulador2 += personas2
                }
                alert("Reserva de dos carpas para " + acumulador2)
                break;
                case "3":
                    let acumulador3 = 0
        
                    for(let i = 0; i<3 ; i++) {
                        let personas3 = parseInt(prompt("Ingrese la cantidad de personas por carpa"))
                        acumulador3 += personas3
                    }
                    alert("Reserva de tres carpas para " + acumulador3)
                    break;
                case "4":
                    let acumulador4 = 0
            
                    for(let i = 0; i<4 ; i++) {
                        let personas4 = parseInt(prompt("Ingrese la cantidad de personas por carpa"))
                        acumulador4 += personas4
                    }
                    alert("Reserva de cuatro carpas para " + acumulador4)
                    break;
            default:
                alert("Error");
                break;
            }
            reservas2()
            break;
        }
    }

    function reservas2() {
        let reserva2 = prompt("Desea hacer otra reserva?")
        if ((reserva2 == "SI") || (reserva2 == "si")) {
            reservas()
        }else { alert("Gracias, tu reserva ha sido guardada")}
    }

let pregunta = prompt("Desea hacer una reserva");
if ((pregunta == "SI") || (pregunta == "si")) {
    reservas()
}else { alert("En otro momento los esperamos!")}