console.log("meow meow");

fetch("https://catfact.ninja/fact")
.then(response => response.json())
.then(result => {
    const catFactsDiv = document.getElementById("cat-facts");
    catFactsDiv.innerText = result.fact;
});
