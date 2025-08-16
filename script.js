const mainContent = document.getElementById("mainContent");
const profileCards = document.querySelectorAll(".profile-card");
const modal = document.getElementById("profileModal");
const modalDetails = document.getElementById("modalDetails");
const modalContent = modal.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-btn");

profileCards.forEach(card => {
card.addEventListener("click", () => {
// Kuhanin yung glassy background at border ng card
const bgColor = getComputedStyle(card).backgroundColor;
const borderColor = getComputedStyle(card).borderColor;

// Apply sa modal background at border  
modalContent.style.background = bgColor;  
modalContent.style.backgroundClip = "padding-box";  
modalContent.style.webkitBackdropFilter = "blur(12px)";  
modalContent.style.backdropFilter = "blur(12px)";  
modalContent.style.border = `2px solid ${borderColor}`;  

// Kopyahin details ng card papunta sa modal  
modalDetails.innerHTML = card.innerHTML;  

// Ipakita modal + blur  
modal.style.display = "flex";  
mainContent.classList.add("blur");

});
});

// Close button
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
mainContent.classList.remove("blur");
});


window.addEventListener("click", (event) => {
if (event.target === modal) {
modal.style.display = "none";
mainContent.classList.remove("blur");
}
});
