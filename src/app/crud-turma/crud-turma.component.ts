import {Component, OnInit, ViewChild} from '@angular/core';
import {DisciplinasService} from '../disciplinas.service';
import {ProfessoresService} from '../professores.service';
import {AlunosService} from '../alunos.service';
import {TurmasService} from '../turmas.service';

@Component({
  selector: 'app-crud-turma',
  templateUrl: './crud-turma.component.html',
  styleUrls: ['./crud-turma.component.css']
})

export class CrudTurmaComponent implements OnInit {


  qtAlunos = null;
  ListaTurmas = null;
  listaDisciplinas = null;
  listaProfessores = null;
  listaAlunos = null;
  alunosTurma = [];
  alunos = [];

  disciplina = null;
  professor = null;
  aluno = null;
  ano = null;

  salvar_ok = null;
  salvar_erro = null;
  status_lista = null;

  constructor(private disciplinasService: DisciplinasService,
              private professoresService: ProfessoresService,
              private alunosService: AlunosService,
              private turmasService: TurmasService) {
      this.atualizaDisciplinas();
      this.atualizaProfessores();
      this.atualizaAlunos();
  }


  ngOnInit() {
  }

  salvarTurma() {
        this.turmasService.salvarTurma({
            professor: this.professor,
            disciplina: this.disciplina,
            aluno: this.alunos,
            ano: this.ano
        }).subscribe( turma => {
                this.salvar_ok = true;
                alert('Turma cadastrada!');
                this.atualizaTurma()
                this.limpar();
                this.status_lista = true;
                }, () => {
            this.salvar_erro = true;
            this.status_lista = false
            }
        );
  }

  atualizaTurma() {
      this.turmasService.todasTurmas()
          .subscribe(
              turmas => {
                  this.ListaTurmas = turmas;
                  for (let i = 0; i < this.ListaTurmas.length; i++) {
                      this.ListaTurmas[i].aluno = this.ListaTurmas[i].aluno.length;
                  }
              }, () => alert('Erro')
          );
  }

  atualizaDisciplinas() {
    this.disciplinasService.todas()
        .subscribe(
            disciplinas => {
              this.listaDisciplinas = disciplinas;
            }, () => this.listaDisciplinas = 'Erro'
        );
  }

  atualizaProfessores() {
    this.professoresService.todosProfessores()
        .subscribe(
            professores => {
              this.listaProfessores = professores;
            }, () => this.listaProfessores = 'Erro'
        );
  }

  atualizaAlunos() {
    this.alunosService.todosAlunos()
        .subscribe(
            alunos => {
              this.listaAlunos = alunos;
            }, () => this.listaAlunos = 'erro'
        );
  }

  adicionaAluno() {
      const aluno = this.listaAlunos.pop(this.aluno);
      this.alunos.push('http://127.0.0.1:8000/alunos/' + aluno.id);
      console.log(this.alunos);
      this.alunosTurma.push(aluno);
  }

  limpar(){
      this.professor = null;
      this.disciplina = null;
      this.alunosTurma = [];
      this.aluno = null;
      this.atualizaAlunos();
  }
}
