import { Component, VERSION, Input } from '@angular/core';
import { Itemdone } from './item.done';

@Component({
  selector: 'app-selecao',
  templateUrl: './appselecao.component.html',
  styleUrls: [ './appselecao.component.css' ]
})
export class AppSelecaoComponent  {
@Input() opcoes: Itemdone[] = [{description:'', done: false}];
@Input() escolhaAte: number
@Input() titulo: string
teste: any
valor: number=0
selecionado: string = ' (1 selecionado)'
selecionado2: string=' (2 selecionados)'
selecionado3: string=' (3 selecionados)'


increment(){
  this.valor++;
}

increment2(){
  this.valor++;
  
  if(this.valor<2){
    this.selecionado= ' (1 selecionado)';
  }else if(this.valor<3){
    this.selecionado= ' (2 selecionados)';
  }else{
    this.selecionado= ' (3 selecionados)';
  }


}



}