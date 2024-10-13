import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular4';
  
  id:number=0
  recipes!:any[];
  constructor(){
    fetch('https://dummyjson.com/recipes').then((res)=>res.json()).then((data)=>this.recipes=data.recipes);
  }
  api(url:string):void{
    fetch(url).then(res=>res.json()).then(res=>alert(res.name +" is ordered successfully"));
  }
  cart(){
     
    this.api(`https://dummyjson.com/recipes/${this.id}`)
   
    
  }
}
