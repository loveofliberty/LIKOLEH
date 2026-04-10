const isProjectPage = window.location.pathname.includes("/projects/")
const basePath = isProjectPage ? "../" : ""

Promise.all([
fetch(`${basePath}partials/header.html`).then(res => res.text()),
fetch(`${basePath}partials/footer.html`).then(res => res.text())
]).then(([headerHtml, footerHtml]) => {
const headerContainer = document.getElementById("site-header")
const footerContainer = document.getElementById("site-footer")

if (headerContainer) {
headerContainer.outerHTML = headerHtml
}

if (footerContainer) {
footerContainer.innerHTML = footerHtml
}

// Fix image paths for project subpages
if (isProjectPage) {
const header = document.querySelector("header")
if (header) {
const imgs = header.querySelectorAll(".logo img, .flags img, .language-switcher img")
imgs.forEach(img => {
const src = img.getAttribute("src") || ""
if (src.startsWith("assets/") && !src.startsWith("../assets/")) {
img.setAttribute("src", `../${src}`)
}
})
}
}

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-container")

if (toggle && nav) {
toggle.addEventListener("click", function(e) {
e.stopPropagation()
nav.classList.toggle("active")
})

nav.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function() {
nav.classList.remove("active")
})
})

window.addEventListener("resize", function() {
if (window.innerWidth > 768) {
nav.classList.remove("active")
}
})

document.addEventListener("click", function(e) {
if (!nav.contains(e.target) && e.target !== toggle) {
nav.classList.remove("active")
}
})
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
