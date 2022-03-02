const contenedorLibros = document.getElementById('cont-libros')
const contenedorCarrito = document.getElementById('contenedor-carrito')
const precioTotal = document.getElementById('precioTotal')

const vaciar = document.getElementById('vaciarCarrito')

let carrito = []

vaciar.addEventListener('click', () => {
    carrito = []
    actualizarCarrito()
})

stockLibros.forEach((libro) => {
    
    const articulo = document.createElement('articulo')
    articulo.classList.add('card', 'col-3', 'm-2')

    articulo.innerHTML = `
        <h5 class="card-title pt-3 text-centers">${libro.nombre}</h5>
        <img src=${libro.img} class= "card-img-top" alt="...">
        <div class="card-body">
        <h5 class="text-primary"><span class="precio"> $ ${libro.precio}</span></h5>
        <button id="agregar${libro.id}" class="btn btn-primary button">Añadir</button>
        </div>
        `
    contenedorLibros.append(articulo)
    
    const boton = document.getElementById(`agregar${libro.id}`)
    boton.addEventListener('click', () => {
        añadirCarrito(libro.id)
    })

    
})

const añadirCarrito = (libroId) => {
    const item = stockLibros.find( (libros) => libros.id === libroId)
    carrito.push(item)
    
    actualizarCarrito()
    console.log(carrito)
}

const eliminarCarrito = (prodId) => {
    const item = carrito.find( (prod) => prod.id === prodId )
    const indice = carrito.indexOf(item)
    
    carrito.splice(indice, 1)
    
    actualizarCarrito()
    console.log(carrito)
} 

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach( (prod) => {
        const div = document.createElement('div')
        div.className = "libroCarrito"
        div.innerHTML = `
                  <p>${prod.nombre}</p>
                  <p>$${prod.precio}</p>
                  <tr><th scope="row"></th>
                  <td><input type="number" min="1" value="1"></td>
                  </tr>
                  <br>
                  <br> 
                  <button onclick="eliminar(${prod.id})" class="button btn btn-danger">x</button>
                  
        `
        contenedorCarrito.append(div)


    })

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

