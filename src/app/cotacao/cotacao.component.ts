import {Component} from '@angular/core';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrl: './cotacao.component.scss'
})
export class CotacaoComponent {
  nomeCliente: string = '';
  produto: string = '';

  imprimirCotacao() {
    const printContents = document.getElementById('print-area')?.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents || '';
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }
}
