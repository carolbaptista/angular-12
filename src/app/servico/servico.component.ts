import { Component, OnInit } from '@angular/core';
import { Servico } from '../domain/servico';
import { ServicoService } from '../services/servico.service';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {


  servicos: Servico[];
  constructor(private servicoService: ServicoService) {
    this.getServico();
  }

  ngOnInit() {
  }

  getServico() {
    this.servicoService.getServico()
      .subscribe(response => {
        this.servicos = response;
        console.log(response);

      })

  }
}