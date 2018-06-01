from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from disciplinas.serializers import DisciplinaSerializer
from django.http import HttpResponse

from disciplinas.models import Disciplina
from django.contrib.auth.models import User


class DisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer