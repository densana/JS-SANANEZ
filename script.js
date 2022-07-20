/*Saludo de Inicio*/
let saludo = prompt("Hola, quien sos?")
let nombre = "BRUNO";
if (saludo == nombre) {
    let pregunta = prompt("Hola Bruno! Queres jugar?");
if ((pregunta == "SI") || (pregunta == "si")) {
    let juego = prompt("selecciona una opcion de la A a la D")
while (juego != "ESC") {
    switch (juego) {
        case "A":
            let acumulador = 0

            for(let i = 0; i<5 ; i++) {
                let tazas = parseInt(prompt("Ingrese la cantidad de tazas de cafe por día de los últimos 5 días"))
                acumulador += tazas
            }
            alert("El promedio de tazas x dia es " + (acumulador / 5))
            break;
        case "B":
            let acumulador2 = 0

            for(let i = 0; i<5 ; i++) {
                let agua = parseInt(prompt("Ingrese la cantidad de litros de agua que tomo por día en los últimos 5 días"))
                acumulador2 += agua
            }
            alert("El promedio de litros de agua x dia es " + (acumulador2 / 5))
            break;
        case "C":
            let acumulador3 = 0

            for(let i = 0; i<5 ; i++) {
                let agua = parseInt(prompt("Ingrese la cantidad de cuadras que caminó por día en los últimos 5 días"))
                acumulador3 += agua
            }
            alert("El promedio de cuadras caminadas x dia es " + (acumulador3 / 5))
            break;
        case "D":
            let acumulador4 = 0

            for(let i = 0; i<5 ; i++) {
                let agua = parseInt(prompt("Ingrese la cantidad de horas de Netflix que miró por día, los últimos 5 días"))
                acumulador4 += agua
            }
            alert("El promedio de hs de Netflix x dia es " + (acumulador4 / 5))
            break;
        default:
            alert("Error");
            break;
    }
    juego = prompt("Selecciona opción de la A a la E")
}
} else {
    alert("Aburrido, responde si!")
}
} else {
    alert("Hola! Ingresa el nombre BRUNO si queres continuar");
}