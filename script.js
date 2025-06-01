let display = document.getElementById("display");

//Esta es la forma antigüa de usar funciones
function appendValue(elValorQueTuApretaste) {
  console.log("El valor que llega es: " + elValorQueTuApretaste);
  display.value += elValorQueTuApretaste;
}

//Esta es la forma moderna de usar funciones
const clearDisplay = () => {
  display.value = "";
};

const calculateResult = () => {
    try{
        display.value =eval(display.value)
    } catch (error) {
    alert("hay un error en la operación");
    clearDisplay();
    }
};