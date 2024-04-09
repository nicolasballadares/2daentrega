//-----------------------Listado de productos-----------------------

const guitarras = [
    {
        id: 1, 
        nombre: "Gibson Les Paul", 
        precio: 175000,
        cantidad: 0,
        subtotal: 0,
    },
    {
        id: 2, 
        nombre: "Gibson SG", 
        precio: 150000,
        cantidad: 0,
        subtotal: 0,
    },
    {
        id: 3, 
        nombre: "Fender Stratocaster", 
        precio: 180000,
        cantidad: 0,
        subtotal: 0,
    },
    {
        id: 4, 
        nombre: "Fender Telecaster", 
        precio: 165000,
        cantidad: 0,
        subtotal: 0,
    },
    {
        id: 5, 
        nombre: "Fender Mustang", 
        precio: 190000,
        cantidad: 0,
        subtotal: 0,
    },
]

//-----------------------Guardar carrito en el Local Storage-----------------------

//Agregar selección de productos al Local Storage para que se guarde en el carrito
let cartProducts // Define variable para el carrito
let cartProductsLS = localStorage.getItem("cartProducts") //Define variable a almacenar en el Local Storage
if(cartProductsLS){
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}

//-----------------------Constructor de tarjetas-----------------------

let inventario = document.getElementById("lista")

function renderTarjeta(guitarras) {
    guitarras.forEach ((guitarra) => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "producto"
        tarjeta.innerHTML = `<table cellpadding="0" cellspacing="2" width="100%">
                                <tr>
                                    <td class="namebold" width="50%">${guitarra.nombre}</td>
                                    <td width="20%">${'$'+guitarra.precio}</td>
                                    <td width="10%"><button class="productoAgregar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/addtocart.png" width="20px" height="auto"></button></td>
                                    <td class="counter" id="counter" width="10%">${guitarra.cantidad}</td>
                                    <td width="10%"><button class="productoQuitar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/trashbin.png" width="20px" height="auto"></button></td>
                                </tr>
                            </table>`
        inventario.appendChild(tarjeta)
    })
    addToCartButton () // Declara la función para agregar este producto al carrito
    removeFromCartButton () // Declara la función para quitar este producto del carrito  
}
renderTarjeta(guitarras)

//-----------------------Agregar productos al carrito-----------------------

function addToCartButton () {
    let addbutton = document.querySelectorAll(".productoAgregar")
    addbutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedGuitar = guitarras.find (guitarra => guitarra.id == productId)
            cartProducts.push(selectedGuitar)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}

//-----------------------Quitar productos del carrito----------------------- 

function removeFromCartButton () {
    let removebutton = document.querySelectorAll(".productoQuitar")
    removebutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedGuitar = guitarras.find (guitarra => guitarra.id == productId)
            cartProducts.pop(selectedGuitar)

            localStorage.removeItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
} 

//-----------------------Agregar al carrito----------------------- 

function agregarCarrito(guitarraAgregar) {
    const yaExiste = cart.some((guitarra) => guitarra.id === guitarraAgregar.id)
    if (yaExiste) {
        const guitarras = cart.map((guitarra) => {
            if (guitarra.id === guitarraAgregar.id) {
                guitarra.cantidad++;
                guitarra.subtotal = guitarra.precio * guitarraCantidad;
                return guitarra;
            }
            else {
                return guitarra;
            }
        })
    }
}

console.log(agregarCarrito)






