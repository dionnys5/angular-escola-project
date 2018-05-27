import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from '../professores.service';

@Component({
  selector: 'app-crud-professor',
  templateUrl: './crud-professor.component.html',
  styleUrls: ['./crud-professor.component.css']
})
export class CrudProfessorComponent implements OnInit {
  nome = null;
  sobrenome = null;
  email = null;
  telefone = null;
  ListaProfessores = null;

  salvar_ok = null;
  salvar_erro = null;
  status_lista = null;
  constructor(private professoresService: ProfessoresService) {
    this.atualizarProfessores();
  }

  ngOnInit() {
  }

  salvarProfessor() {
    this.professoresService.salvarProfessor({
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        telefone: this.telefone
    }).subscribe( professor => {
      this.salvar_ok = true;
      alert('Professor cadastrado!');
      this.atualizarProfessores();
      this.limpar();
    }, () => this.salvar_erro = true
    );
  }


  atualizarProfessores() {
    this.professoresService.todosProfessores()
        .subscribe(
            professores => {
              this.ListaProfessores = professores;
              this.status_lista = true;
            }, () => this.status_lista = false
        );
  }

  limpar() {
    this.nome = null;
    this.sobrenome = null;
    this.email = null;
    this.telefone = null;
  }

}
