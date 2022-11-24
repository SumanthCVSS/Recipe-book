import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredients[];
  private subscription:Subscription;
  // =[
  //   new Ingredients('burger',3),
  //   new Ingredients('mocktail',2)
  // ];
  constructor(private shoppingListService: ShoppingListService) { }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
   this.subscription=this.shoppingListService.
      ingredientsChanged
      .subscribe((ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      })
  }

  onEditItem(index:number){
this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
