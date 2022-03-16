
const quote = document.getElementById("quote")
const auth = document.getElementById("auth")
const output = document.getElementById("output")

const btn = document.getElementById("run")
btn.addEventListener("click", () => {

    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then(data => {
        quote.textContent = "";
        output.textContent = "";
        auth.textContent = "";
        quote.innerHTML = `${data.quote}`;
        auth.innerHTML = `${data.author}`;
        const img = document.createElement("img")
        img.src = data.photo;
        output.appendChild(img)
    })
})
