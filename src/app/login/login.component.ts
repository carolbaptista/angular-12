import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServicoService } from '../services/servico.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private ClienteService: ServicoService) {
    
    this.formGroup = this.formBuilder.group({
      
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit() {
      }

      cadastrar(){
        this.ClienteService.getServico()
          .subscribe(response => {
            console.log("Logado com sucesso");
         }, error => {
           console.log("Erro ao cadastrar");
         })
        console.log(this.formGroup.value);
        }
        }
  

