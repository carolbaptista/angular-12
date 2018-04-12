import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicoService } from '../services/servico.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 // importar o ReactiveFormsModule
 formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private ClienteService: ServicoService) { 

    this.formGroup = this.formBuilder.group({
     
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    

    })
  }

  ngOnInit() {
  }

cadastrar(){
this.ClienteService.getServico()
  .subscribe(response => {
    console.log("Cadastrado com sucesso");
 }, error => {
   console.log("Erro ao cadastrar");
 })
console.log(this.formGroup.value);
}
}