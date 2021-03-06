import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/technics/';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor()
  {
    return 1;
  }

  getCurtirCurso()
  {
    return true;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  botaoClicado()
  {
    alert('Botão clicado!');
  }
  
  oneKeyUp(evento: KeyboardEvent)
  {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
  
  onMouseOverOut()
  {
    this.isMouseOver = !this.isMouseOver;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
