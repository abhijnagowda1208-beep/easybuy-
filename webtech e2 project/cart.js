function diaplayCart() {
    let productConatiner = document.getElementById('product-container')
    console.log(productConatiner)
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    let total = 0;
    productConatiner.innerHTML = cart.map((item, index) => {
        total = total + item.price
        return `
        <aside class="product-card">
            <img src="${item.image}" alt="">
            <h3>${item.name}</h3>
            <p>₹ ${item.price}</p>
            <button onclick="removeItem(${index})">Remove Item</button>
        </aside>
        `
    })
    document.getElementById('total').innerText = `₹${total}/-`
    console.log(total)
}
diaplayCart()


function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    let ans = confirm("Are u sure u want to remove an item from the cart")
    if (ans) {
        cart.splice(id, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        diaplayCart()
    }
}

function checkout() {
    alert("Thank you for shopping with us❤️, Order Again")
    localStorage.setItem('cart', JSON.stringify([]))
    window.location.href = './Products.html'

}
function clearCart() {
    let ans = confirm("Are u sure u want to remove all products from the cart?")
    if (ans) {
        localStorage.setItem('cart', JSON.stringify([]))
        window.location.href = './Products.html'
    }
}