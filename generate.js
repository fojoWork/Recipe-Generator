// Define the html
const recipeName = document.getElementById("recipe-name");
const recipeDifficulty = document.getElementById("recipe-difficulty");
const instructions = document.getElementById("instructions");
const recipeIngredients = document.getElementById("ingredients");
const image = document.getElementById("image");

function after()
{
  var link = document.getElementById('cssLink');
  link.href = placmentAfter
}
// The function to generate/randomize results
function generate() {
    const recipes = [pancake, spaghettiCarbonara, beefWellington, grilledCheese, chickenStirFry, vegetableCurry, omlette, caesarSalad];
    const random = Math.floor(Math.random() * recipes.length)
    const display = document.getElementsByClassName("display");
    recipes[random]();
    
}
//Functions
function pancake() {
  const info = {
    "Name": "Pancakes",
    "Difficulty": "Easy",
    "Ingredients": "1 cup all-purpose flour, 2 tablespoons granulated sugar, 1 tablespoon baking powder, a pinch of salt, 1 cup milk, 1 large egg, 2 tablespoons melted butter or vegetable oil, 1 teaspoon vanilla extract (optional)",
    "Steps": "Combine flour, sugar, baking powder, and salt in a bowl. In a separate bowl, whisk milk, egg, melted butter, and vanilla. Pour wet ingredients into dry and stir until just combined. Heat a greased pan over medium heat. Pour one fourth cup of batter per pancake. Cook until bubbles form and edges set, about two to three minutes. Flip and cook another one to two minutes until golden. Repeat with remaining batter. Serve warm with toppings."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/pancake1.jpg";
}

function spaghettiCarbonara() {
  const info = {
    "Name": "Spaghetti Carbonara",
    "Difficulty": "Medium",
    "Ingredients": "Spaghetti, eggs, parmesan cheese, pancetta, garlic, salt, pepper",
    "Steps": "Boil spaghetti until al dente. In a separate pan, cook pancetta until crispy. In a bowl, whisk eggs and parmesan. Drain pasta, saving some water. Quickly mix pasta with egg mixture and pancetta, adding reserved water if needed to make it creamy. Season with salt and pepper."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/spaghettiCarbonara.jpg";
}

function beefWellington() {
  const info = {
    "Name": "Beef Wellington",
    "Difficulty": "Hard",
    "Ingredients": "Beef tenderloin, puff pastry, mushrooms, prosciutto, egg yolk, salt, pepper, mustard",
    "Steps": "Season and sear the beef. Finely chop and cook mushrooms to remove moisture. Wrap beef in prosciutto and mushroom mixture. Encase in puff pastry, brush with egg yolk, and bake until golden and internal temperature is reached. Let rest before slicing."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/beefWellington.jpg";
}

function grilledCheese() {
  const info = {
    "Name": "Grilled Cheese Sandwich",
    "Difficulty": "Easy",
    "Ingredients": "Bread, butter, cheddar cheese",
    "Steps": "Butter one side of each bread slice. Place cheese between the unbuttered sides. Heat a pan on medium and cook sandwich on both sides until golden brown and cheese is melted."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/grilledCheese.jpg";
}

function chickenStirFry() {
  const info = {
    "Name": "Chicken Stir Fry",
    "Difficulty": "Easy",
    "Ingredients": "Chicken breast, soy sauce, garlic, ginger, bell peppers, broccoli, olive oil, salt, pepper",
    "Steps": "Slice chicken and vegetables. Heat oil in a pan and cook garlic and ginger. Add chicken and stir until cooked through. Toss in vegetables and stir-fry until tender. Add soy sauce, season with salt and pepper, and mix well."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/chickenStirFry.jpg";
}

function vegetableCurry() {
  const info = {
    "Name": "Vegetable Curry",
    "Difficulty": "Medium",
    "Ingredients": "Potatoes, carrots, onions, curry powder, coconut milk, garlic, salt, pepper, olive oil",
    "Steps": "Chop vegetables evenly. Sauté onions and garlic in olive oil, then add curry powder. Add vegetables and coconut milk, and simmer until vegetables are soft. Season with salt and pepper."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/vegetableCurry.jpg";
}

function omlette() {
  const info = {
    "Name": "Omelette",
    "Difficulty": "Easy",
    "Ingredients": "Eggs, milk, salt, pepper, butter, cheese, vegetables",
    "Steps": "Beat eggs with milk, salt, and pepper. Melt butter in a pan over medium heat and pour in the egg mixture. Add cheese and chopped vegetables. Cook until set and fold the omelette in half. Serve immediately."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/omlette.jpg";
}

function caesarSalad() {
  const info = {
    "Name": "Caesar Salad",
    "Difficulty": "Easy",
    "Ingredients": "Romaine lettuce, croutons, parmesan cheese, Caesar dressing, anchovies",
    "Steps": "Chop romaine lettuce and toss with Caesar dressing. Add croutons and sprinkle with parmesan cheese and anchovies. Serve chilled."
  };

  recipeName.innerHTML = info.Name;
  recipeDifficulty.innerHTML = info.Difficulty;
  recipeIngredients.innerHTML = info.Ingredients;
  instructions.innerHTML = info.Steps;
  image.src = "/recipeImages/caesarSalad.jpg";
}
