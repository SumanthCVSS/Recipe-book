
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{
  ingredientsChanged= new Subject<Ingredients[]>();
  startedEditing=new Subject<number>();
  private ingredients:Ingredients[]=[
    new Ingredients('burger',3),
    new Ingredients('mocktail',2)
  ];
getIngredients(){
  return this.ingredients.slice();
}
getIngredient(index:number){
return this.ingredients[index];
}

addIngredients(ingredient:Ingredients){
this.ingredients.push(ingredient);
this.ingredientsChanged.next(this.ingredients.slice());
}

AddIngredients(ingredients:Ingredients[]){
// for(let ingredient of ingredients){
// this.addIngredients(ingredient);
// }
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
}

updatIngredient(index:number,newIngredient:Ingredients){
this.ingredients[index]=newIngredient;
this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredient(index:number){
  this.ingredients.splice(index,1);
  this.ingredientsChanged.next(this.ingredients.slice());
}

}
