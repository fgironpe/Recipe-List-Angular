import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe1', 'test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('A test recipe2', 'test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('A test recipe3', 'test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg')
  ];

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  public recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
