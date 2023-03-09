const formInput = document.querySelector('.form-input')
const input = document.querySelector('.input')

const street = document.querySelector('.street')
const district = document.querySelector('.district')
const city = document.querySelector('.city')
const state = document.querySelector('.state')
const description = document.querySelector('.description')
const col = document.querySelector('.col')

const fetchApi = async (searchValue) => {
    
    const apiResponse = await fetch(`https://viacep.com.br/ws/${searchValue}/json/`) 

    if (apiResponse.status == 200){
        const data = apiResponse.json();
        return data
    }
    else if (apiResponse.status == 400){
        const error = console.log(error)
        return error
    }


}

const render = async (search) => {
    
    const data = await fetchApi(search)
    const error = await fetchApi(search)

    if(data) {
        street.innerHTML = data['logradouro']
        district.innerHTML = data['bairro']
        city.innerHTML = data['localidade']
        state.innerHTML = data['uf']
    }
    else{
        street.innerHTML = 'cep invalido'
        district.innerHTML = 'cep invalido'
        city.innerHTML = 'cep invalido'
        state.innerHTML = 'cep invalido'
    }
    

}


formInput.addEventListener('submit', (event) => {
    event.preventDefault();

    street.innerHTML = 'loading...'
    district.innerHTML = 'loading...'
    city.innerHTML = 'loading...'
    state.innerHTML = 'loading...'


    render(input.value)

    input.value = ''

})

render();