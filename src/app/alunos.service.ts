import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  todosAlunos() {
    return this.http.get(this.API_URL + '/alunos/');
  }

  salvarAluno(aluno): Observable<any> {
    const editando = null;
    if (editando) {
      return this.http.patch(this.API_URL + '/alunos/' + editando.id, aluno);
    } else {
      return this.http.post(this.API_URL + '/alunos/', aluno);
    }
  }
}
