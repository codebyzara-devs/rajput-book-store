function renderCart(){
 const cart=getCart(); const box=document.getElementById("cart-content");
 if(!cart.length){box.innerHTML=`<div class="empty"><h2>Your cart is empty</h2><p>Add a book to get started.</p><a class="btn" href="products.html">Browse Books</a></div>`;return}
 let total=0;
 const rows=cart.map(item=>{const b=books.find(x=>x.id===item.id);const sub=b.price*item.qty;total+=sub;return `<div class="cart-row"><div><h3>${b.title}</h3><small>${b.author}</small></div><div>${money(b.price)} × ${item.qty}</div><button class="remove" onclick="removeItem(${b.id})">Remove</button></div>`}).join("");
 box.innerHTML=`<div class="cart-layout"><div>${rows}</div><aside class="summary"><h2>Order Summary</h2><div class="summary-line"><span>Subtotal</span><span>${money(total)}</span></div><div class="summary-line"><span>Delivery</span><span>PKR 200</span></div><div class="summary-line total"><span>Total</span><span>${money(total+200)}</span></div><button class="btn" style="width:100%" onclick="checkout()">Proceed to Checkout</button></aside></div>`;
}
function removeItem(id){saveCart(getCart().filter(i=>i.id!==id));renderCart()}
function checkout(){alert("Demo checkout: your order has been received.");localStorage.removeItem("rajputCart");updateCartCount();renderCart()}
document.addEventListener("DOMContentLoaded",renderCart);