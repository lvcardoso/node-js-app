const url = 'http://localhost:8090/api/carros/';
async function getOnecar ()
{
    let cars = document.querySelector('.cars')
    let data = await fetch(url);

    let response = await data.json();

    for(let i = 0; i < 8; i++)
    {
        let description = response[i].Cidade;
        let price = response[i].Ano;
        let title = response[i].Marca;
        let year = response[i].Ano;
        let carId = response[i].Id;
        let image = response[i].Imagem;

        cars.innerHTML += 
        `<div class="cars_itens">
            <img src="${image}" alt="" class="car-img">
            <div class="cars-area">
                <h2 class="car-title">
                    ${title.length > 10 ? title.substring(0, 10).concat('...'):title}
                </h2>
                <p class="car-desc">
                    ${description.length > 80 ? description.substring(0, 50).concat('...'):description}
                </p>
            </div>
            <p class="price-cars">
                $${price}
            </p>
            <button class="add-cart">
                <a href="detalhes.html?id=${carId}"><img src="https://cdn.onlinewebfonts.com/svg/img_216744.png" alt="" class="cart-icon"></a>
            </button>
        </div>`;
    }
}

getOnecar();