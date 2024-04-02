let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<table width="100%"><tr><td class="namebold" width="80%">${producto.nombre}</td><td width="20%">${'$'+producto.precio}</td></tr></table>`
        cartContainer.appendChild(cart)
    })
}

renderCarrito(cartStorage)
