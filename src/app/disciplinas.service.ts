import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  todas() {
    return this.http.get(this.API_URL + '/disciplinas');
  }

  salvar(disciplina): Observable<any> {
    const editando = null;
    if (editando) {
      return this.http.patch(this.API_URL + '/disciplinas/' + editando.id, disciplina);
    } else {
      return this.http.post(this.API_URL + '/disciplinas/', disciplina);
    }
  }
}
