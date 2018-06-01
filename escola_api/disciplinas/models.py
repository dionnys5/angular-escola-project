from django.db import models
from django.contrib.auth.models import User

'''
principais models
models.CharField(max_length=128)
models.TextField()
models.IntegerField()
models.ForeignKey(Pessoa, null=True, blank=False)
models.DateTimeField()
models.TimeField()
models.CharField(max_length=50, choices=[('publica', 'publica')], default='publica')
'''

class Disciplina(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=128)
    area = models.CharField(max_length=128)
    descricao = models.CharField(max_length=250)

    def __str__(self):
        return self.nome 

    class Meta:
        verbose_name = 'Disciplina'
        verbose_name_plural = 'Disciplinas'
