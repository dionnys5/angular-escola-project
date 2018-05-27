import { Component, OnInit } from '@angular/core';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-crud-aluno',
  templateUrl: './crud-aluno.component.html',
  styleUrls: ['./crud-aluno.component.css']
})
export class CrudAlunoComponent implements OnInit {
  nome = null;
  curso = null;
  ListaAlunos = null;

  salvar_ok = null;
  salvar_erro = null;
  status_lista = null;

  constructor(private alunosService: AlunosService) {
      this.atualizarListaAlunos();
  }

  ngOnInit() {
  }

  salvarAluno() {
    this.alunosService.salvarAluno({
        nome: this.nome,
        curso: this.curso,
    })
        .subscribe(aluno => {
          alert('FUNCIONAAAAAAAAAA');
          this.salvar_ok = true;
          this.atualizarListaAlunos();
          this.limpar();
          }, () => {
          this.salvar_erro = true;
          });
  }

  atualizarListaAlunos() {
    this.alunosService.todosAlunos()
        .subscribe(
            alunosTodos => {
              this.ListaAlunos = alunosTodos;
              this.status_lista = true;
            }, () => this.status_lista = false
        );
  }

  limpar() {
    this.nome = null;
    this.curso = null;
  }
}
