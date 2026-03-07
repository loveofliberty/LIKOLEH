Promise.all([
fetch("partials/header.html").then(res => res.text()),
fetch("partials/footer.html").then(res => res.text())
]).then(([headerHtml, footerHtml]) => {
const headerContainer = document.getElementById("site-header")
const footerContainer = document.getElementById("site-footer")

if (headerContainer) {
headerContainer.innerHTML = headerHtml
}

if (footerContainer) {
footerContainer.innerHTML = footerHtml
}

document.dispatchEvent(new CustomEvent("layoutLoaded"))
}).catch(() => {
document.dispatchEvent(new CustomEvent("layoutLoaded"))
})