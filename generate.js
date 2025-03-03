function generate() {
    Math.random([pancake(), ])
}
function pancake()
{
    const pancakes = {
        "Name": "Pancakes",
        "Difficulty": "Difficulty: Easy",
        "Ingredients": "Ingredients: 1 cup all-purpose flour, 2 tablespoons granulated sugar, 1 tablespoon baking powder, a pinch of salt, 1 cup milk, 1 large egg, 2 tablespoons melted butter or vegetable oil, 1 teaspoon vanilla extract (optional)",
        "Steps": "Instructions: Combine flour, sugar, baking powder, and salt in a bowl. In a separate bowl, whisk milk, egg, melted butter, and vanilla. Pour wet ingredients into dry and stir until just combined. Heat a greased pan over medium heat. Pour one fourth cup of batter per pancake. Cook until bubbles form and edges set, about two to three minutes. Flip and cook another one to two minutes until golden. Repeat with remaining batter. Serve warm with toppings."
    }

    const recipeName = document.getElementById("recipe-name");
    const recipeDifficulty = document.getElementById("recipe-difficulty");
    const instructions = document.getElementById("instructions");
    const recipeIngredients = document.getElementById("ingredients")
    const image = document.getElementById("image")

    recipeName.innerHTML = pancakes.Name;
    recipeDifficulty.innerHTML = pancakes.Difficulty;
    recipeIngredients.innerHTML = pancakes.Ingredients;
    instructions.innerHTML = pancakes.Steps;
    image.src = '/recipeImages/pancake1.jpg'
    image.style.width = "600px"
}

function cookies() 
{
    const cookies = {
        "Name": "Cookies",
        "Difficulty": "Medium",
        "Ingredients": ""
    }
}