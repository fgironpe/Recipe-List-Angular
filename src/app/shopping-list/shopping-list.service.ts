import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class ShoppingListService {
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
      ];

      getIngredients() {
        return this.ingredients.slice();
      }
      
      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        /* push(...ingredients): añade a un array todos los elementos del array pasado como parámetro uno a uno */
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

    }