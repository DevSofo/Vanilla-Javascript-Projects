const API_KEY="9cad8a7f4166498391cdcaa9468b390a"

async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`);

    const data =await response.json();
    return data.recipes
}


async function init(){
    const recipes=await getRecipes()
    console.log(recipes)
}

init();