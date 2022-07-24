import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        /* push(...ingredients): añade a un array todos los elementos del array pasado como parámetro uno a uno */
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

    }
