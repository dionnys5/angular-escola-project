from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from turmas.models import Turma
from alunos.serializers import AlunoSerializer
from professores.serializers import ProfessorSerializer
from disciplinas.serializers import DisciplinaSerializer


class TurmaSerializer(serializers.HyperlinkedModelSerializer):
    professor = ProfessorSerializer()
    disciplina = DisciplinaSerializer()
    aluno = AlunoSerializer(many=True)
    class Meta:
        model = Turma
        fields = ('id', 'professor', 'disciplina', 'aluno', 'ano')

class SalvaTurmaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Turma
        fields = ('id', 'professor', 'disciplina', 'aluno', 'ano')
        