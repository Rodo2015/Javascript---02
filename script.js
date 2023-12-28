// Capturamos el  nombre del estudiante
let nombre;
nombre = prompt("Introduce tu nombre: ");

// Funcion para calcular las notas
function calcular() {

    // input del estudiante para cada variable
    let quimica = document.querySelector("#quimica").value;
    let ingles = document.querySelector("#ingles").value;
    let matematica = document.querySelector("#matematica").value;
    let fisica = document.querySelector("#fisica").value;
    let notas = "";

    let totalNotas = parseFloat(quimica) +
        parseFloat(ingles) +
        parseFloat(matematica) +
        parseFloat(fisica);

    // Funcion para que la nota del estudiante se valore en un porcentaje
    let porcentaje = (totalNotas / 4);
    if (porcentaje <= 20 && porcentaje >= 17) {
        notas = "Alta";
    } else if (porcentaje < 17 && porcentaje >= 15) {
        notas = "Media";
    } else if (porcentaje < 15 && porcentaje >= 10.5) {
        notas = "Baja";
    } else {
        notas = "Desaprobado";
    }

    // Checkeo por datos vacios
    if (quimica == "" || ingles == ""
        || matematica == "" || fisica == "") {
        document.querySelector("#mostrarDatos").innerHTML
            = "Ingrese datos correctos";
    } else {

    // Checkear si la condicion pasa o falla
        if (porcentaje >= 10.5) {
            document.querySelector(
                "#mostrarDatos"
            ).innerHTML =
                ` Obtuviste ${totalNotas} de un total de 80.<br>
                ${nombre} tu nota promedio es ${porcentaje}. <br>
                Calificación es ${notas}.<br>
                Resultado Aprobaste. `;
        } else {
            document.querySelector(
                "#mostrarDatos"
            ).innerHTML =
                ` Obtuviste ${totalNotas} de un total de 80.<br>
                ${nombre} tu nota promedio es  ${porcentaje}. <br>
                Calificación es ${notas}.<br> 
                Resultado Desaprobaste. `;
        }
    }
}
