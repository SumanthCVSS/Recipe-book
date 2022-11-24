import { Component,OnDestroy,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {

  recipes:Recipe[];
  subscription:Subscription;
// =[
//   new Recipe('test','simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg'),
//   new Recipe('Another test','simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg')
// ];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  this.subscription=  this.recipeService.recipeChanged
    .subscribe(
      (recipes:Recipe[])=>{
this.recipes=recipes;
      }
    )
    this.recipes=this.recipeService.getRecipes();
  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy() {
this.subscription.unsubscribe();
  }

}
