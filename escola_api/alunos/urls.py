from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
from alunos.views import AlunoViewSet

router = routers.DefaultRouter()
router.register(r'alunos', AlunoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]