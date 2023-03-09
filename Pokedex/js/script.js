const pokeName = document.querySelector('.pokemon_name');
const pokeNumber = document.querySelector('.pokemon_number');
const pokeImage = document.querySelector('.pokemon_image');
const pokeModal = document.querySelector('.bg');

const form = document.querySelector('.form');
const pokemon = document.querySelector('.input_search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

const pokeNameModal = document.querySelector('.pokemon_name_modal');
const pokeNumberModal = document.querySelector('.pokemon_number_modal');
const pokeImageModal = document.querySelector('.pokemon_image_modal');
const pokeTypes = document.querySelector('.tipos');
const pokeAbilitys = document.querySelector('.habilidades');
const pokeSpecie = document.querySelector('.especies');
const pokeMoves = document.querySelector('.moves');


let searchPokemon = 1

const fetchPokemon = async (pokemon) => {

        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (apiResponse.status === 200) {
            const data = await apiResponse.json();
            return data
        }
}

const renderPokemon = async (pokemon) => {
    pokeName.innerHTML = 'Loading...'

    const data = await fetchPokemon(pokemon)

    if (data){
        pokeNumber.innerHTML = data.id
        pokeName.innerHTML = data.name
        pokeImage.style.display = 'flex'
        pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        pokeImageModal.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pokeNumberModal.innerHTML = data.id
        pokeNameModal.innerHTML = data.name
        pokeTypes.innerHTML = data.types.length === 1 ? data['types']['0']['type']['name'] : [ data['types']['0']['type']['name'] , data['types']['1']['type']['name'] ]
        pokeAbilitys.innerHTML = data.abilities.length === 1 ? data['abilities']['0']['ability']['name'] : [ data['abilities']['0']['ability']['name'], data['abilities']['1']['ability']['name'] ]
        pokeSpecie.innerHTML = data['species']['name']
        pokeMoves.innerHTML = [data['moves']['0']['move']['name'], data['moves']['1']['move']['name'], data['moves']['2']['move']['name'], data['moves']['3']['move']['name']]

        
        searchPokemon = data.id
        if(data.id >= 650){
            pokeImage.src = data['sprites']['front_default']
            pokeImageModal.src = data['sprites']['front_default']
        }
    }
    else{
        pokeImage.style.display = 'none';
        pokeName.innerHTML = 'Not found :c';
        pokeNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(pokemon.value.toLowerCase())
    pokemon.value = ''

})

prev.addEventListener('click', () => {
    searchPokemon -= 1
    renderPokemon(searchPokemon)
})

next.addEventListener('click', () => {
    searchPokemon += 1
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon)

const openModal = () =>{
    pokeModal.style.display = 'block'
}

const closeModal = () =>{
    pokeModal.style.display = 'none'
}
