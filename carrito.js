let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach (guitarra => {
        const cart = document.createElement("div")
        cart.innerHTML = `<table cellpadding="0" cellspacing="2" width="100%">
                                <tr>
                                    <td class="namebold" width="35%">${guitarra.nombre}</td>
                                    <td width="20%">${'$'+guitarra.precio}</td>
                                    <td width="10%"><button class="productoAgregar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/addtocart.png" width="20px" height="auto"></button></td>
                                    <td class="counter" id="counter" width="10%">${guitarra.cantidad}</td>
                                    <td width="10%"><button class="productoQuitar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/trashbin.png" width="20px" height="auto"></button></td>
                                    <td class="counter" id="counter" width="15%">${guitarra.subtotal}</td>
                                </tr>
                            </table>`
        cartContainer.appendChild(cart)
    })
}

renderCarrito(cartStorage)

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
            else {
                cartProducts.splice(indexOfCarrito, 1);
            }
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))    
        }
    })
} 
