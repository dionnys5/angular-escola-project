import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  API_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  todosProfessores() {
        return this.http.get(this.API_URL + '/professores/');
  }

  salvarProfessor(professor): Observable<any> {
        const editando = null;
        if (editando) {
            return this.http.patch(this.API_URL + '/professores/' + editando.id, professor);
        } else {
            return this.http.post(this.API_URL + '/professores/', professor);
        }
  }
}
