
const url = "https://api.nasa.gov/planetary/apod?api_key=7FLys5J22vYLWTT0ZlQ8Z5ujJZfsbUxqds5S7jSl&count=15"

async function listaImagenes() {

    try {
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach(elemento => {

            const contenido = `
                <li class="card">
                    <img class="card__image" src="${elemento.url}" alt="imagen">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>
            `;

            card.innerHTML += contenido
        })

    }
    catch (error) {
        console.log(error)
    }
}

listaImagenes()


// then y catch
/* function listaImagenes(){
    fetch(url)
    .then( response => response.json())
    .then( datosImagenes => {
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach( elemento => {
            const contenido =`<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
        </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch( error => console.log(error))
}

listaImagenes() */