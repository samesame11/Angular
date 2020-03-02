import { Recipe } from '../recipe.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('B test Recipe', 'Descpies for B', 'https://cdn.pixabay.com/photo/2019/03/22/18/12/harry-potter-4073863_960_720.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
