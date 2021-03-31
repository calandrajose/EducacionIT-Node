/* 
 Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro.
 No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán.
 El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  let q = 0;
  const vocales = ['A', 'E', 'I', 'O', 'U']
  if (typeof texto !== 'string') {
    q = -1;
  } else {
    const arrayTexto = texto.toUpperCase().split('');
    for (let i = 0; i < arrayTexto.length; i++) {
      if (vocales.includes(arrayTexto[i])) {
        q++;
      }
    }
  }
  return q;
}
// 
// console.log(contarVocales(2));

/* 
Crear un repo en github y subir todo el proyecto. 
Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto)
Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return 'https://github.com/calandrajose/EducacionIT-Node.git';
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras
y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras
retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso
de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos,
si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {

  return class Es6Class{
    constructor(input){
      this.texto = input;
      Es6Class.contadorInstancias = (Es6Class.contadorInstancias || 0 ) +1
     
    }

    // static contadorInstancias

    contadorPalabras(){
      if(typeof this.texto === 'string'){
        return this.texto === '' ? 0 : this.texto.split(' ').length;
      }else{
        return -1;
      }
    }

    hayNumeros(){
      if(typeof this.texto === 'string'){
        const arrayLetras = this.texto.split('');
        for(let i = 0; i<arrayLetras.length; i++){
            if(arrayLetras[i] > '0' && arrayLetras[i] < '9'){
              return true;
            }
        }
        return false
      }else{
      return -1
    }
  }
}};

module.exports = {
  contarVocales,
  urlRepo,
  crearClase,
};
