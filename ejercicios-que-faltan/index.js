/*
  Ejercicio de integración con API
  El ejercicio consiste en mostrar la respuesta de los endpoints en una interfaz gráfica.
  Consigna práctica
  Se tiene un web service que provee información sobre razas de perros. El mismo
  consta de
  dos endpoints, uno que responde un JSON con las razas, y otro que recibe la raza como
  parámetro y devuelve un JSON que contiene una imágen de la raza.
  Los endpoints son los siguientes:
  ● https://dog.ceo/api/breeds/list
  ● https://dog.ceo/api/breed/{BREED_NAME}/images/random
  Desarrollar una web en la cual se pueda ver en la vista principal un listado categorizado
  alfabéticamente por la primera letra de las razas recibidas con el endpoint /breed/list.
  Al seleccionar un ítem de la lista, se debe abrir otra vista donde se muestre el nombre
  de la
  raza, seguido de una imagen que se obtiene con el endpoint /breed/{BREED_NAME}/images/random.
*/
const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

try {
  fetch(`https://dog.ceo/api/breeds/list`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((breed) => {
      let raza = breed.message;
      console.log(raza);
      const ul1 = document.querySelector(".left ul");
      abecedario.forEach((letra) => {
        const h2 = document.createElement("h2");
        h2.innerText = letra;
        ul1.appendChild(h2);
        raza.filter((termino) => {
          if (termino[0] === letra.toLowerCase()) {
            const li = document.createElement("li");
            li.innerText = termino;
            ul1.appendChild(li);
          }
        });
      });

      let lista = document.querySelectorAll(".left li");
      let img = document.querySelector(".right img");
      let h1 = document.querySelector(".right h1");

      for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", (e) => {
          console.log(e.target.textContent);
          fetch(`https://dog.ceo/api/breed/${e.target.textContent}/images/random`)
            .then((res) => {
              console.log(res);
              return res.json();
            })
            .then((evento) => {
              img.src = evento.message;
              h1.textContent = e.target.textContent;
            }); 
        });
      }
    }
    )
  
} catch (error) {
  console.log(error);
}

