document.getElementById("anime-facts").addEventListener("click", (event) => {
    fetch("http://localhost:8080/anime")
    .then(response => response.json())
    .then(result => {
        const data = document.getElementById("box");
        // data.innerText = result.data;
        console.log(result.data);
        console.log(result);
        result.data.forEach(element => {
            const p = document.createElement("p");
            p.textContent = element.anime_name;
            data.appendChild(p);
            // data.innerText = element.anime_name;
            console.log(element.anime_name);
        });
    });
})