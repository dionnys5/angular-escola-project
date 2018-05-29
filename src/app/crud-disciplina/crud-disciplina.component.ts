import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-crud-disciplina',
  templateUrl: './crud-disciplina.component.html',
  styleUrls: ['./crud-disciplina.component.css']
})
export class CrudDisciplinaComponent implements OnInit {
  nome = null;
  area = null;
  descricao = null;
  ListaDisciplinas = null;
  salvar_ok = null;
  salvar_erro = null;
  status_lista = null;

  constructor(private disciplinasService: DisciplinasService) {
      this.atualizarLista();
  }

  ngOnInit() {
  }
  salvar() {
    this.disciplinasService.salvar({
        nome: this.nome,
        area: this.area,
        descricao: this.descricao
    })
        .subscribe(disciplina => {
          alert('Disciplina cadastrada com sucesso');
          this.salvar_ok = true;
          this.atualizarLista();
          this.limpar();
          }, () => {
          this.salvar_erro = true;
        });
  }

  atualizarLista() {
      this.disciplinasService.todas()
          .subscribe(disciplinasA => {
              this.ListaDisciplinas = disciplinasA;
              }, () => this.status_lista = false);
  }

  limpar() {
    this.nome = '';
    this.area = '';
    this.descricao = '';
  }
}
