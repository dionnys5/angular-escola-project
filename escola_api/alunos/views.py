from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from django.http import HttpResponse

from django.contrib.auth.models import User
from alunos.models import Aluno
from alunos.serializers import AlunoSerializer

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
