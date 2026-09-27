function render(){
 const q=document.getElementById("search").value.toLowerCase().trim();
 const cat=document.getElementById("category").value;
 const list=books.filter(b=>(cat==="all"||b.category===cat)&&(!q||b.title.toLowerCase().includes(q)||b.author.toLowerCase().includes(q)));
 document.getElementById("all-books").innerHTML=list.length?list.map(card).join(""):`<div class="empty"><h2>No books found</h2><p>Try another search or category.</p></div>`;
}
document.addEventListener("DOMContentLoaded",()=>{render();document.getElementById("search").addEventListener("input",render);document.getElementById("category").addEventListener("change",render);});