import { Component, EventEmitter, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ChildComponent) child!:ChildComponent;
  title = 'angular1';
 checkChild:number=0;
  value:number=0;
  incre(){
   this. value++;
  }
  decre(){
    if(this.value<=0){
      alert('Counter is at Zero')
    }else{
      this.value--;
    }
  }
  reset(){
    if(this.value<=0){
      alert('Counter is not started')
    }else{
      this.value=0;
    }
    

  }
  fromChild(){
    this.checkChild=this.child.value;
  }
  get(val:number){
      this.value=val;
      
  }
}
