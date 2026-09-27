document.addEventListener("DOMContentLoaded",()=>{
 const id=Number(new URLSearchParams(location.search).get("id"))||1;
 const book=books.find(b=>b.id===id)||books[0];
 document.title=book.title+" | Rajput Book Store";
 document.getElementById("book-detail").innerHTML=`<div class="book-detail">
 <div class="detail-art">${book.title}</div>
 <div class="detail-copy"><span class="tag">${book.category}</span><h1>${book.title}</h1><p><b>Author:</b> ${book.author}</p>
 <p class="description">${book.description}</p><div class="detail-price">${money(book.price)}</div>
 <label>Quantity <input id="qty" class="qty" type="number" min="1" value="1"></label><br>
 <button class="btn" onclick="addToCart(${book.id},Number(document.getElementById('qty').value)||1)">Add to Cart</button>
 <a class="btn" href="products.html" style="margin-left:8px;background:#8b6a50">Back to Books</a></div></div>`;
});