Promise.all([
fetch("partials/header.html").then(res => res.text()),
fetch("partials/footer.html").then(res => res.text())
]).then(([headerHtml, footerHtml]) => {
const headerContainer = document.getElementById("site-header")
const footerContainer = document.getElementById("site-footer")

if (headerContainer) {
headerContainer.outerHTML = headerHtml
}

if (footerContainer) {
footerContainer.innerHTML = footerHtml
}

window.addEventListener("scroll", function() {

const header = document.getElementById("site-header")

if (!header) {
return
}

if (window.scrollY > 50) {
header.classList.add("scrolled")
} else {
header.classList.remove("scrolled")
}

})

document.dispatchEvent(new CustomEvent("layoutLoaded"))
}).catch(() => {
document.dispatchEvent(new CustomEvent("layoutLoaded"))
})
