import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TecladoComponent } from "./components/teclado/teclado.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraComponent, TecladoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula001';
  displayprocessado: string = "";
  display: string = "";

  RecuperaNumero(num: string) {
    if (num == "C") {
      this.display = "";
    } 
    else {
      if(num=='='){
        this.calculate();
      }
      else{
        if (num != '+' && num != '-' && num != '*' && num != '/' && num != "%" && num != "%") {
          this.display += num;
        } 
        else {
          let arraynumeros: string[] = this.display.split(/(\+|\-|\*|\/)/);
          let aux = 0;

          arraynumeros.forEach(element => {
            if (element == "+" || element == '-' || element == '*' || element == '/' || element == "%") {
              this.calculate();
              aux++;
            }
          });

          if (aux == 0) {
            this.display += num;
          }
        }
      }
    }
    this.displayprocessado = this.display;
  }

  calculate() {
    try {
      let soma = eval(this.display);
      this.display = soma.toString();
      this.displayprocessado = this.display;
    } catch (e) {
      this.display = "Error";
      this.displayprocessado = "Error";
    }
  }
}
