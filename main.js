//-----------------------Listado de productos-----------------------

const guitarras = [
    {
        id: 1, 
        nombre: "Gibson Les Paul", 
        precio: 175000,
        cantidad: 0,
        subtotal: 5000,
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

let cartProducts 
let cartProductsLS = localStorage.getItem("cartProducts") 
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
    addToCartButton ()
    removeFromCartButton ()
    totalCompra ()
}
renderTarjeta(guitarras)

//-----------------------Agregar productos al carrito-----------------------

function addToCartButton () {
    let addbutton = document.querySelectorAll(".productoAgregar")
    console.log("Addtocart", addbutton)
    addbutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            let indexOfGuitarra = guitarras.findIndex(viola => viola.id == productId);
            const selectedGuitar = guitarras.find (guitarra => guitarra.id == productId)

            let indexOfCarrito = cartProducts.findIndex(productoExistente => productoExistente.id == productId);
            if (indexOfCarrito >= 0) {
                cartProducts[indexOfCarrito].cantidad++
            }
            else {
                cartProducts.push(selectedGuitar)
            }
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))    
        }
    })
}

//-----------------------Quitar productos del carrito----------------------- 

function removeFromCartButton () {
    let removebutton = document.querySelectorAll(".productoQuitar")
    console.log("Removetocart", removebutton)
    removebutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            let indexOfGuitarra = guitarras.findIndex(viola => viola.id == productId);
            const selectedGuitar = guitarras.find (guitarra => guitarra.id == productId)
            if (guitarras[indexOfGuitarra].cantidad > 0) {
            }
            let indexOfCarrito = cartProducts.findIndex(productoExistente => productoExistente.id == productId);
            if (indexOfCarrito >= 0 && cartProducts[indexOfCarrito].cantidad > 0) {
                cartProducts[indexOfCarrito].cantidad--
            }
            if (indexOfCarrito >= 0 && cartProducts[indexOfCarrito].cantidad == 0) {
                cartProducts.splice(indexOfCarrito, 1);
            }

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))    
        }
    })
} 

//-----------------------Calcular total compra----------------------- 

function totalCompra() {
    cartProductsLS.forEach((productST, index) => {
        productST.subtotal = productST.precio * productST.cantidad
        cartProductsLS[index].subtotal = productST.subtotal 
    })
    console.log(cartProductsLS)
}
