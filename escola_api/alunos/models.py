from django.db import models
from django.contrib.auth.models import User

class Aluno(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=128)
    curso = models.CharField(max_length=128)

    def __str__(self):
        return self.nome 

    class Meta:
        verbose_name = 'Aluno'
        verbose_name_plural = 'Alunos'