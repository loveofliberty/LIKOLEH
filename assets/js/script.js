// READ MORE

document.querySelectorAll(".read-more-btn").forEach(button => {

button.addEventListener("click", () => {

const moreText = button.previousElementSibling.querySelector(".more-text")

if(moreText.style.display === "inline"){

moreText.style.display = "none"
button.textContent = "Read more"

}else{

moreText.style.display = "inline"
button.textContent = "Show less"

}

})

})


// VIDEO MODAL

const videoCard = document.querySelector(".video-card")
const modal = document.getElementById("videoModal")
const modalVideo = document.getElementById("modalVideo")
const closeModal = document.querySelector(".close-modal")

videoCard.addEventListener("click", () => {

modal.style.display = "flex"
modalVideo.currentTime = 0
modalVideo.muted = false
modalVideo.play()

})

closeModal.addEventListener("click", () => {

modal.style.display = "none"
modalVideo.pause()

})

window.addEventListener("click", (e) => {

if(e.target === modal){

modal.style.display = "none"
modalVideo.pause()

}

})