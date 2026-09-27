document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("account-form").addEventListener("submit",e=>{
  e.preventDefault(); document.getElementById("form-message").textContent="Account created successfully (demo).";
  e.target.reset();
 });
});
