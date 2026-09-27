const books = [
 {id:1,title:"The Silent Library",author:"A. Rahman",category:"Fiction",price:1200,description:"A thoughtful story about books, memories and the people we meet between the pages."},
 {id:2,title:"Modern Web Development",author:"S. Ahmed",category:"Technology",price:1850,description:"A practical introduction to HTML, CSS, JavaScript and the foundations of modern websites."},
 {id:3,title:"The Art of Focus",author:"M. Khan",category:"Self Help",price:950,description:"Simple ideas and habits for building focus, consistency and better study routines."},
 {id:4,title:"Data Structures Made Easy",author:"H. Ali",category:"Academic",price:1600,description:"Beginner-friendly explanations of arrays, linked lists, stacks, queues, trees and graphs."},
 {id:5,title:"Around the World",author:"N. Shah",category:"Fiction",price:1100,description:"An adventurous journey through unfamiliar places, friendships and unexpected discoveries."},
 {id:6,title:"C++ Programming Basics",author:"R. Malik",category:"Technology",price:1450,description:"A clear introduction to variables, functions, classes, objects and core C++ concepts."},
 {id:7,title:"Study Smarter",author:"F. Iqbal",category:"Self Help",price:800,description:"Practical study methods for students who want to organize time and learn efficiently."},
 {id:8,title:"Discrete Mathematics",author:"T. Hassan",category:"Academic",price:1750,description:"Essential concepts including logic, sets, relations, graphs, trees and mathematical reasoning."}
];

function getCart(){return JSON.parse(localStorage.getItem("rajputCart")||"[]")}
function saveCart(cart){localStorage.setItem("rajputCart",JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const count=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll("#cart-count").forEach(e=>e.textContent=count)}
function addToCart(id,qty=1){
 const cart=getCart(); const item=cart.find(i=>i.id===id);
 if(item)item.qty+=qty; else cart.push({id,qty});
 saveCart(cart); alert("Book added to your cart.");
}
function money(n){return "PKR "+n.toLocaleString()}
function card(book){
 return `<article class="book-card">
   <a href="detail.html?id=${book.id}"><div class="book-art">${book.title}</div></a>
   <div class="book-info"><span class="tag">${book.category}</span><h3>${book.title}</h3><p>by ${book.author}</p>
   <div class="price"><strong>${money(book.price)}</strong><button class="mini-btn" onclick="addToCart(${book.id})">Add to cart</button></div></div>
 </article>`;
}
document.addEventListener("DOMContentLoaded",updateCartCount);
