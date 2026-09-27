document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("featured-books").innerHTML=books.slice(0,4).map(card).join("");
});
