/* const tokenAuth = {
    prueba: "Monitor 24 Pulgadas"
}

const tokenString = JSON.stringify(tokenAuth);
localStorage.setItem(tokenString) 



const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);
 */

const token = document.querySelector('#token')

console.log(token.textContent);
localStorage.setItem('token', token.textContent);
sessionStorage.setItem('token', token.textContent);

localStorage.getItem('token')
console.log(`Get del Local Storage token = ${localStorage.getItem('token')}`)

/* 
console.log('prueba desde carpeta js')
localStorage.setItem('nombre', 'Juan');
sessionStorage.setItem('nombre', 'Pablo'); */