const urlParams = new URLSearchParams(window.location.search);
const getId = urlParams.get('id');
const url = 'http://localhost:8090/api/carros/' + getId;

function atualizarCampos() {
  // Dados do carro a serem atualizados
  var carroAtualizado = {
    Id: getId,
    Fabricante: "VW",
    Ano: 2000,
    Marca: "Kombi",
    Cidade: "São Paulo",
    Imagem: "https://th.bing.com/th/id/R.e063f43692aa301a932f00b0abb72d37?rik=l9zeng6INECn9Q&pid=ImgRaw&r=0"
  };

  // Criar objeto de requisição
  var xhttp = new XMLHttpRequest();

  // Configurar requisição
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        // Atualização bem-sucedida
        alert("Carro atualizado com sucesso!");
      } else {
        // Erro na atualização
        alert("Erro ao atualizar o carro. Status: " + this.status);
      }
    }
  };

  // Abrir conexão e enviar requisição para atualizar o carro
  xhttp.open("PATCH", "http://localhost:8090/api/carros/");
  xhttp.setRequestHeader("Content-type", "application/json");

  // Enviar os dados para atualização
  xhttp.send(JSON.stringify(carroAtualizado));
}

async function getOneCar ()
{
  let cars = document.querySelector('.cars');
  let description, price, title, year, image, data, response;

  data = await fetch(url );
  response = await data.json();
  description = response[0].Cidade;
  price = response[0].Ano;
  title = response[0].Marca;
  year = response[0].Ano;
  image = response[0].Imagem;

  cars.innerHTML += 
  `<div class="cars_itens px-4 justify-content: center">
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
          <img src="https://cdn.onlinewebfonts.com/svg/img_216744.png" alt="" class="cart-icon">
      </button>
      <button class="add-cart" onclick="atualizarCampos()">
          <img src="https://th.bing.com/th/id/OIP.d1sTN41laBxAg-Uy_pXvmgHaHx?pid=ImgDet&rs=1" alt="" class="cart-icon">
      </button>
  </div>`;
}

getOneCar();