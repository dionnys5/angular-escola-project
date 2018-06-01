from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from turmas.serializers import TurmaSerializer, SalvaTurmaSerializer
from django.http import HttpResponse

from turmas.models import Turma
from django.contrib.auth.models import User


class TurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class SalvaTurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = SalvaTurmaSerializer