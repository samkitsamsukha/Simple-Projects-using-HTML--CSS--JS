// const API_key = "b8eff3da833645a7973782d31e8a95e9";
// const recipeListEl = document.getElementById("recipe-list");

// function displayRecipe(recipes){
//     recipeListEl.innerHTML = "";
//     recipes.forEach((recipe)=>{
//         const recipeItemEl = document.createElement("li");
//         recipeItemEl.classList.add("recipe-item");
//         recipeImageEl = document.createElement("img");
//         recipeImageEl.src = recipe.image;
//         recipeImageEl.alt = "Recipe Image";

//         recipeItemEl.appendChild(recipeImageEl); //add the image tag to the li tag

//         recipeListEl.appendChild(recipeItemEl); //add the li tag to the ul tag
//     });
// }

// async function getRecipes(){ //to get recipes from the API
//     const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_key}`);

//     const data = await response.json(); //json is a javascript method to convert string to json
//     return data.recipes;
// }


// async function init(){
//     const recipes = await getRecipes();
//     // console.log(recipes);
//     displayRecipe(recipes);
// }

// init(); 

const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}  
    `;

    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}
async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}
async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}
init();