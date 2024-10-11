import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @Input('val') 
  value:number=0;
  @Output() sai=new EventEmitter();
  add(){
    this.value++;
    this.sai.emit(this.value)

  }
}
