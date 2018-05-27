import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudProfessorComponent } from './crud-professor/crud-professor.component';
import { CrudAlunoComponent } from './crud-aluno/crud-aluno.component';
import { CrudDisciplinaComponent } from './crud-disciplina/crud-disciplina.component';
import { CrudTurmaComponent } from './crud-turma/crud-turma.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import {
    MatInputModule, MatButtonModule, MatRippleModule, MatIconModule,
    MatOptionModule, MatSelectModule, MatToolbarModule, MatSidenavModule,
    MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainTableComponent } from './main-table/main-table.component';

import { DisciplinasService } from './disciplinas.service';

@NgModule({
  declarations: [
      AppComponent,
      CrudProfessorComponent,
      CrudAlunoComponent,
      CrudDisciplinaComponent,
      CrudTurmaComponent,
      MainNavComponent,
      MainTableComponent,
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatIconModule,
      MatOptionModule,
      MatSelectModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
  ],
  providers: [DisciplinasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
