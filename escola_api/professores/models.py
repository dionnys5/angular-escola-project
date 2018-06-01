from django.db import models
from django.contrib.auth.models import User

class Professor(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=128)
    email = models.EmailField(blank=True, null=True, unique=True)
    telefone = models.CharField(max_length=128)

    def __str__(self):
        return self.nome 

    class Meta:
        verbose_name = 'Professor'
        verbose_name_plural = 'Professores'
