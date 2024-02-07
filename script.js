const api = "https://api.quotable.io/random"

const quote = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("btn")

const getQuote = () => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`
      author.innerHTML = `- ${data.author}`
    })
    .catch((err) => {
      console.error("Error:", err)
    })
}

btn.addEventListener("click", getQuote)
