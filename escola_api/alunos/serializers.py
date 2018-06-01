from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from alunos.models import Aluno


class AlunoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id','nome','curso')