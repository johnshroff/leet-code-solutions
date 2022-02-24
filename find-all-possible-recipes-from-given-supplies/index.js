/**
 * You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. Ingredients to a recipe may need to be created from other recipes, i.e., ingredients[i] may contain a string that is in recipes.
 * You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.
 * Return a list of all the recipes that you can create. You may return the answer in any order.
 * Note that two recipes may contain each other in their ingredients.
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const s_map = {};
    const completed = [];
    for (const supply of supplies) {
        s_map[supply] = true;
    }
    const canMakeRecipe = (x) => {
        for (const y in ingredients[x]) {
            const ingredient = ingredients[x][y];
            if (s_map[ingredient] === undefined) {
                return false;
            } else {
                delete ingredients[x][y];
            }
        }
        return true;
    };
    let recipesMade = 0;
    do {
        recipesMade = 0;
        for (const x in recipes) {
            if (canMakeRecipe(x)) {
                ++recipesMade;
                completed.push(recipes[x]);
                s_map[recipes[x]] = true;
                delete recipes[x];
            }
        }
    } while (recipesMade > 0 && recipes.length > 0);
    return completed;
};