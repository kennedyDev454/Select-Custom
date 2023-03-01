const arrowSelect = document.querySelector('.bx-chevron-down')
const content = document.querySelector('.content')
const cities = document.querySelector('.city')
const nameCity = document.querySelector('header p')
const search = document.querySelector('input')

let countries = ['brazil','espanha','united states','rome','italy','france','lisboa',
'budapeste','lyon','toulouse','málaga','braga','copenhague','belfast','zurique']


const randomCity = () =>{
    countries.forEach(countrie => {
        cities.innerHTML += `<p data-name="${countrie}">${countrie}</p>`
    })
}

const selectCity = (e) => {
    const cityname = e.target.dataset.name
    if(cityname){
        nameCity.textContent = cityname
        content.classList.remove('active')
        arrowSelect.classList.remove('active')
        search.value = ''
         randomCity()
    }
}

const filterCity = () => {
    const name = search.value.toLowerCase()
    let newCity = []
    newCity =  countries.filter(item => {
        return item.includes(name)
    }).map(item => {
        return `<p data-name="${item}">${item}</p>`
    }).join('')

    cities.innerHTML = newCity

    

   

    
  

   
}

search.addEventListener('input',filterCity)
cities.addEventListener('click',selectCity)

arrowSelect.addEventListener('click',() => {
    arrowSelect.classList.toggle('active')
     content.classList.toggle('active')
 })
 
randomCity()


