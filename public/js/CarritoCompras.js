// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso precionando Agregar al Carrito

    listaCursos.addEventListener('click', agregarCurso);//arreglotext

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // muestra los cursos del local Storage

    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        console.log('desde vaciar carrito');
        articulosCarrito = []; // resetear el arreglo
        limpiarHTM(); // eliminar todo el HTML del carrito

    })

}

// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log('Agregando al carrito');
        //console.log(e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado);
    }

}

function eliminarCurso(e) {

    if (e.target.classList.contains('borrar-curso')) {
        /* console.log('desde eliminar curso')
        console.log(e.target.getAttribute('data-id')); */

        const cursoId = e.target.getAttribute('data-id');

        //Elimina del Arrego articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        carritoHTML(); // actualiza el HTML del carrito
        console.log(articulosCarrito);
    }
}



// funcion que lee el contenido del HTML al que le dimos Click y estrae la informacion del curso

function leerDatosCurso(curso) {
    //console.log(curso);

    //Crear Objeto con el contenido del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento que se va a agregar al carrito ya existe
    // .some permite validar si ya existe un elemento en el vector 
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    console.log(existe);

    if (existe) {
        //Actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            //el .map crea un nuevo arreglo
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos no duplicados 
            }
        });

        // le pasa a el arreglo de articulos de cursos el nnuevo arreglo con los datos actualizados
        articulosCarrito = [...cursos];
    } else {
        // Agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }



    console.log(articulosCarrito)
    carritoHTML();
}


//Muestra el carrito de compras en el HTML

function carritoHTML() {
    // Limipiar el HTML 
    limpiarHTM();
    //Recorre 
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        /*  row.innerHTML = `
         <td><img src="${curso.imagen}" width="100"></td>
         <td>${curso.titulo}</td>
         <td>${curso.precio}</td>
         <td>${curso.cantidad}</td>
         <td>
             <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
         </td>
     `; */
        //optimizado

        row.innerHTML = `
    <td><img src="${imagen}" width="100"></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
    </td>
    `;



        // Agrega el HTML al tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar al al local Storage 
    sincronizarStorage();


}

function sincronizarStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}


// eliminar los cursos de tbody
function limpiarHTM() {
    // forma optimizada
    /*  while (contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild)
     } */


    // forma lenta 
    contenedorCarrito.innerHTML = '';
}