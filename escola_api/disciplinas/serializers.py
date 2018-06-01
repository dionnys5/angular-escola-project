from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from disciplinas.models import Disciplina


class DisciplinaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Disciplina
        fields = ('id','nome','area','descricao')