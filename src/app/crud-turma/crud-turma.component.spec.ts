import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTurmaComponent } from './crud-turma.component';

describe('CrudTurmaComponent', () => {
  let component: CrudTurmaComponent;
  let fixture: ComponentFixture<CrudTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
