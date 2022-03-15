
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}
const searchButton = () => {

    const searchField = document.getElementById('search-fild')

    toggleSpinner('block')

    const searchFood = searchField.value

    // console.log(searchFood)

    const foodUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFood}`

    fetch(foodUrl)
        .then(res => res.json())
        .then(data => displayFood(data.drinks))
}
searchButton()


const displayFood = drinks => {
    document.getElementById('search-fild').value = ''
    // console.log(drinks)
    const containerDiv = document.getElementById('container')
    containerDiv.textContent = ''
    drinks.forEach(drink => {
        const div = document.createElement('div')
        div.classList.add('co')
        div.innerHTML = `
      
        <img class="w-50 mx-auto d-block py-5" src="${drink.strDrinkThumb}" alt="">
        <h2 class="text-center">${drink.strDrink}</h2>
        <p class="text-center fw-bold">ID: ${drink.idDrink}</p>
        <p class="text-center fw-bold">Category: ${drink.strCategory}</p>
        <p class="text-center">${drink.strInstructions.slice(0, 30)}</p>

        `
        containerDiv.appendChild(div)
    })
    toggleSpinner('none')

}

 /*  <div onclick="showDetails(${drink.idDrink})" class="card h-100"> */

/* const showDetails = drinkId => {

    const mealIdUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    // console.log(mealIdUrl)

    fetch(mealIdUrl)
        .then(res => res.json())
        .then(data => displayDrinkIdDetails(data.drink))
}

const displayDrinkIdDetails = drink => {
    // console.log(drink)
    const drinkDetails = document.getElementById('exampleModal')
    const div = document.createElement('div')
    div.classList.add('modal-content')
    drinkDetails.innerHTML = `  
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">New message</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>

     <div class="modal-body">
       <form>
         
       </form>
     </div>
     <div class="modal-footer">
              
     </div>
                            `
    drinkDetails.appendChild(div)
}
 */



