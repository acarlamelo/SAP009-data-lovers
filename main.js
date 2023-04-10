import data from './data/harrypotter/data.js';
import { sortData, filterData, filterHouse, searchCharacters } from './data.js'


const select = document.getElementById("ordenalfa");
const filterHouseElement = document.getElementById("filter-house");
const filterGeneroElement = document.getElementById("filter-genero");
const container = document.getElementById("characters-container");
const resultadoElement = document.getElementById("resultado")
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clear-button")
export const characters = [...data.characters]; 

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  const dataFiltrada = searchCharacters(characters, searchTerm)

  showCharacters(dataFiltrada);
});

clearBtn.addEventListener("click",()=> {
  searchInput.value = "" ;
})

select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex].value;
  const filteredData = sortData(data, selectedOption);
  showCharacters(filteredData);
})

function showCharacters(characters) {
  container.innerHTML = "";

  for (const character of characters) {
    const card = document.createElement("div");
    card.classList.add('card');

    const info = document.createElement('div');
    info.classList.add('info');
    
    const name = document.createElement('div');
    name.textContent = character.name;
    name.classList.add('name');
    info.appendChild(name);

    const birthdate = document.createElement('div');
    birthdate.textContent = `Nascimento: ${character.birth}`;
    birthdate.classList.add('birthdate');
    info.appendChild(birthdate);

    const status = document.createElement('div');
    status.textContent = `Status: ${character.death}`;
    status.classList.add('status');
    info.appendChild(status);

    const ancestry = document.createElement('div');
    ancestry.textContent = `Antepassados: ${character.ancestry}`;
    ancestry.classList.add('ancestry');
    info.appendChild(ancestry);

    const species = document.createElement('div');
    species.textContent = `Espécies: ${character.species}`;
    species.classList.add('species');
    info.appendChild(species);

    const gender = document.createElement('div');
    gender.textContent = `Gênero: ${character.gender}`;
    gender.classList.add('gender');
    info.appendChild(gender);

    const house = document.createElement('div');
    house.textContent = `Casa: ${character.house}`;
    house.classList.add('house');
    info.appendChild(house);

    // const groups = document.createElement('div');
    // groups.textContent = `Grupos associados: ${character.associated_groups}`;
    // groups.classList.add('groups');
    // info.appendChild(groups);

    card.appendChild(info);
    container.appendChild(card);
  }
}


function updateCharacters() {
  const selectedOption = select.options[select.selectedIndex].value;
  const filteredData = sortData(characters, selectedOption);
  showCharacters(filteredData);
}

select.addEventListener('change', updateCharacters);

// Función para actualizar la lista de personajes cuando se selecciona una casa en el filtro de casa
function updateCharactersByHouse() {
  const selectedHouse = filterHouseElement.value;
  const filteredCharacters = filterHouse(characters, selectedHouse);
  showCharacters(filteredCharacters);

  resultadoElement.innerHTML = '';
  
  if (selectedHouse !== 'todas') {
    const resultado = filteredCharacters.reduce((accumulador, character) => {
      const casa = character.house;
      if (!accumulador[casa]) {
        accumulador[casa] = { male: 0, female: 0 };
      }
      if (character.gender === 'Male') {
        accumulador[casa].male++;
      } else if (character.gender === 'Female') {
        accumulador[casa].female++;
      }
      return accumulador;
    }, {});

    const resultadoTexto = Object.keys(resultado).map(casa => {
      const male = resultado[casa].male;
      const female = resultado[casa].female;
      return `${casa}: ${male} masculinos e ${female} femininos`;
    }).join(', ');

    const parrafo = document.createElement('p');
    parrafo.textContent = `A casa ${resultadoTexto}`;
    resultadoElement.appendChild(parrafo);
  }
}  


filterHouseElement.addEventListener("change", updateCharactersByHouse);

// Función para actualizar la lista de personajes cuando se selecciona un género en el filtro de género
function updateCharactersByGender() {
  const selectedGenero = filterGeneroElement.value;
  const filteredCharacters = filterData(characters, selectedGenero);
  showCharacters(filteredCharacters);
}

filterGeneroElement.addEventListener("change", updateCharactersByGender);

// Llamamos a las funciones de actualización de listas al cargar la página
updateCharacters();
updateCharactersByHouse();
updateCharactersByGender();





// console.log(data.characters);


