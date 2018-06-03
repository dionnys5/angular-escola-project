import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  API_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  todasTurmas() {
    return this.http.get(this.API_URL + '/turmas/');
  }

  salvarTurma(turma) {
    return this.http.post(this.API_URL + '/turmas-salvar/', turma);
  }

  editarTurma(turma) {
    return this.http.patch(this.API_URL + '/turmas/' + turma.id, turma);
  }

  deleteTurma(turma) {
    return this.http.delete(this.API_URL + '/turmas/' + turma.id);
  }
}
