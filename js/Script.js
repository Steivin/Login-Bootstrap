console.log("Hola profe")



// ############################ VARIABLES EN JS ###############################

// let, var y const
const edad = 18; // constante que no se puede alterar
let edad_dos = 18; // variable para bloques
var nombre = "Steivin Cardenas"; // variable global

// ############################ TIPOS DE DATOS #############################
var entero = 20;
var decimal = 20.5;
var string = "Mi nombre es: Steivin";
var boolean = true //false
var array = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var array_numerico = [1,2,3,4,5,6,7];
var array_mixto = [1,2,3,"Lun","Mar","Mie",true,false];


// ##################### OPERADORES ARITMETICOS ###########################

var suma = entero + decimal;
var resta = decimal - entero;
var multi = decimal * entero;
var divi = decimal / entero;
var modulo = decimal % 2;


// ##################### ESTRUCTURAS LOGICAS
for (let i=0; i <array.length; i++){
    console.log(array [i])
}
Swal.fire("BIENVENIDO");


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // evitar que el formulario se envíe y recargue la página
  
      Swal.fire({
        title: "CAMPOS INCOMPLETOS",
        text: "Completa los campos antes de continuar",
        icon: "error"
      });
    });
  });
//console.log(multi);