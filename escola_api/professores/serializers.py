from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from professores.models import Professor


class ProfessorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Professor
        fields = ('id','nome','email', 'telefone')