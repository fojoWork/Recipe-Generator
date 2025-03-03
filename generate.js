function generate() {
    spaghettiCarbonara()
}
function pancake()
{
    const pancakes = {
        "Name": "Pancakes",
        "Difficulty": "Easy",
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
    image.src = 'pancake1.jpg'
    image.style.width = "600px"
}

function spaghettiCarbonara()
{
    const spaghettiCarbonara = {
        
            "Name": "Spaghetti Carbonara",
            "Difficulty": "Medium",
            "Ingredients": "Spaghetti, eggs, parmesan cheese, pancetta, garlic, salt, pepper",
            "Steps": "Boil spaghetti until al dente. In a separate pan, cook pancetta until crispy. In a bowl, whisk eggs and parmesan. Drain pasta, saving some water. Quickly mix pasta with egg mixture and pancetta, adding reserved water if needed to make it creamy. Season with salt and pepper."
    }
    
    const recipeName = document.getElementById("recipe-name");
    const recipeDifficulty = document.getElementById("recipe-difficulty");
    const instructions = document.getElementById("instructions");
    const recipeIngredients = document.getElementById("ingredients")
    const image = document.getElementById("image")

    recipeName.innerHTML = spaghettiCarbonara.Name;
    recipeDifficulty.innerHTML = spaghettiCarbonara.Difficulty;
    recipeIngredients.innerHTML = spaghettiCarbonara.Ingredients;
    instructions.innerHTML = spaghettiCarbonara.Steps;
    image.src = '/spaghettiCarbonara.jpg';
    image.style.width = '600px';
}
