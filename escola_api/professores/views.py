from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from professores.serializers import ProfessorSerializer
from django.http import HttpResponse

from professores.models import Professor
from django.contrib.auth.models import User


class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer
