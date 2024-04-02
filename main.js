//-----------------------Listado de productos-----------------------

const productos= [
    {
        id: 1, 
        nombre: "Gibson Les Paul", 
        precio: 175000
    },
    {
        id: 2, 
        nombre: "Gibson SG", 
        precio: 150000
    },
    {
        id: 3, 
        nombre: "Fender Stratocaster", 
        precio: 180000
    },
    {
        id: 4, 
        nombre: "Fender Telecaster", 
        precio: 165000
    },
    {
        id: 5, 
        nombre: "Fender Mustang", 
        precio: 190000
    },
]
//-----------------------Guardar carrito en el Local Storage-----------------------

//Agregar selección de productos al Local Storage para que se guarde en el carrito
let cartProducts // Define variable para el carrito
let cartProductsLS = localStorage.getItem("cartProducts") //Define variable a almacenar en el Local Storage
// Recorre el JS para alma 
if(cartProductsLS){
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}

//-----------------------Renderizar de productos en el HTML-----------------------

let productsContainer = document.getElementById("products-container") //Le apunta al ID en el HTML donde vamos a colocar nuestros productos

function renderProducto(productsArray) {
    productsArray.forEach (producto => {
        const card = document.createElement("div") // Crea un DIV para el producto
        card.innerHTML = `<table cellpadding="0" cellspacing="2" width="100%"><tr><td class="namebold" width="60%">${producto.nombre}</td><td width="20%">${'$'+producto.precio}</td><td class="addtocart" width="10%"><button class="productoAgregar" id="${producto.id}"><img id="addtocart" style="vertical-align: middle;" src="./img/addtocart.png" width="20px" height="auto"></button></td><td width="10%"><button class="productoQuitar" id="${producto.id}"><img id="trashbin" style="vertical-align: middle;" src="./img/trashbin.png" width="20px" height="auto"></button></td></tr></table>`
                          productsContainer.appendChild(card) //Adjunta el producto renderizado en la ubicación indicada en el HTML
    })
    addToCartButton () // Declara la función para agregar este producto al carrito
    removeFromCartButton () // Declara la función para quitar este producto del carrito
}
renderProducto(productos) // Renderiza el listado de productos en la página HTML

//-----------------------Agregar productos al carrito-----------------------

function addToCartButton () {
    let addbutton = document.querySelectorAll(".productoAgregar")
    addbutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find (producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            // console.log(cartProducts)

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
            const selectedProduct = productos.find (producto => producto.id == productId)
            cartProducts.pop(selectedProduct)
            // console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}