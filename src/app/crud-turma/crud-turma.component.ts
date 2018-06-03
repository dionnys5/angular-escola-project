import {Component, OnInit, ViewChild} from '@angular/core';
import {DisciplinasService} from '../disciplinas.service';
import {ProfessoresService} from '../professores.service';
import {AlunosService} from '../alunos.service';
import {TurmasService} from '../turmas.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crud-turma',
  templateUrl: './crud-turma.component.html',
  styleUrls: ['./crud-turma.component.css']
})

export class CrudTurmaComponent implements OnInit {

  API_URL = 'http://127.0.0.1:8000';
  ListaTurmas = null;
  listaDisciplinas = null;
  listaProfessores = null;
  listaAlunos = null;
  alunosTurma = [];
  alunos = null;

  disciplina = null;
  professor = null;
  alunoSelect = null;
  ano = 2018;

  salvar_ok = null;
  salvar_erro = null;
  status_lista = null;
  turma_excluida = null;

  constructor(private disciplinasService: DisciplinasService,
              private professoresService: ProfessoresService,
              private alunosService: AlunosService,
              private turmasService: TurmasService,
              private http: HttpClient) {
      this.atualizaDisciplinas();
      this.atualizaProfessores();
      this.atualizaAlunos();
      this.atualizaTurma();
  }


  ngOnInit() {
      this.alunosService = this.listaAlunos;
  }

  deletarTurma(turma) {
      if (confirm('A turma será excluida permanentemente, deseja continuar?')) {
          this.turmasService.deleteTurma(turma)
              .subscribe(turmaExcluida => {
                  this.turma_excluida = true;
                  this.atualizaTurma();
                  alert('Turma excluida com sucesso!');
              }, () => alert('Erro ao excluir disciplina')
      );
      }
  }

  editarTurma(turma) {
      this.professor = turma.professor;
      this.disciplina = turma.disciplina;
      this.ano = turma.ano;
      this.alunosTurma = turma.aluno;
  }

  salvarTurma() {
        const turma = {
            professor: this.API_URL + '/professores/' + this.professor.id + '/',
            disciplina: this.API_URL + '/disciplinas/' + this.disciplina.id + '/',
            aluno: this.alunos,
            ano: this.ano
        }
        this.turmasService.salvarTurma(turma).subscribe( turma => {
                this.salvar_ok = true;
                alert('Turma cadastrada!');
                this.atualizaTurma()
                this.limpar();
                this.status_lista = true;
                }, () => {
            this.salvar_erro = true;
            this.status_lista = false;
            alert('Erro, verifique os inputs');
          }
        );
  }

  atualizaTurma() {
      this.turmasService.todasTurmas()
          .subscribe(
              turmas => {
                  this.ListaTurmas = turmas;
              }, () => alert('Erro ao carregar as turmas')
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
            }, () => alert('Erro ao carregar alunos')
        );
  }

  adicionaAluno() {
      const aluno = this.listaAlunos.pop(this.alunoSelect);
      this.alunos = [];
      this.alunos.push(this.API_URL + '/alunos/' + aluno.id + '/');
      this.alunosTurma.push(aluno);
  }

  limpar() {
      this.ano = null;
      this.professor = null;
      this.disciplina = null;
      this.alunosTurma = null;
      this.alunoSelect = null;
      this.atualizaAlunos();
  }
}
