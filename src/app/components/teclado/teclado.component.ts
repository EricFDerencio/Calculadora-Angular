import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  imports: [CommonModule],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.scss'
})
export class TecladoComponent {
  @Output() numberEmitter: EventEmitter<string> = new EventEmitter();

  arraybotoes:string[]=["1","2","3","+","4","5","6","-","7","8","9","*","C","0","=","/"];
  sendTecla(num: string) {
    this.numberEmitter.emit(num);
  }
  
}
