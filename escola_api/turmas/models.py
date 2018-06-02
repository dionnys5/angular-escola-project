from django.db import models
from django.contrib.auth.models import User
from alunos.models import Aluno
from disciplinas.models import Disciplina
from professores.models import Professor

class Turma(models.Model):
    id = models.AutoField(primary_key=True)
    professor = models.ForeignKey(Professor, models.SET_NULL, null=True)
    disciplina = models.ForeignKey(Disciplina, models.SET_NULL, null=True)
    aluno = models.ManyToManyField(Aluno, null=True, blank=True)
    ano = models.CharField(max_length=4)

    def __str__(self):
        return self.disciplina + ' ' + self.ano

    class Meta:
        verbose_name = 'Turma'
        verbose_name_plural = 'Turmas'