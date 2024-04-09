let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach (guitarra => {
        const cart = document.createElement("div")
        cart.innerHTML = `<table cellpadding="0" cellspacing="2" width="100%">
                                <tr>
                                    <td class="namebold" width="50%">${guitarra.nombre}</td>
                                    <td width="20%">${'$'+guitarra.precio}</td>
                                    <td width="10%"><button class="productoAgregar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/addtocart.png" width="20px" height="auto"></button></td>
                                    <td class="counter" id="counter" width="10%">${guitarra.cantidad}</td>
                                    <td width="10%"><button class="productoQuitar" id="${guitarra.id}"><img style="vertical-align: middle;" src="./img/trashbin.png" width="20px" height="auto"></button></td>
                                </tr>
                            </table>`
        cartContainer.appendChild(cart)
    })
}

renderCarrito(cartStorage)

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
            let removeQty = guitarras.cantidad ++

            localStorage.removeItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
} 




// function mostrarProductosCarrito() {
//     limpiarHTML();
//     carritoCompras. forEach((producto) => {
//         const { imagen, nombre, precio, cantidad, subtotal, id } = producto;
//         const div = document.createElement ('div');
//         div.classList. add('contenedor-producto');
//         div. innerHTML = `
//             <img src="${imagen}" width="100">
//             <p>${nombre}</p>
//             <p>$${precio}</p>
//             <p>${cantidad}</p>
//             <p>#${subtotal}</p>
//             ‹a href="#" class="eliminar-producto" id="${id}"> x </a>
//             `;
//     contenedorCarrito.appendChild(div);
//     });
//     mostrarCantidadProductos();
//     calcularTotal();
// }

