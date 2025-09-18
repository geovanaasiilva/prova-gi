from django.urls import path
from . import views #importa nossas views
urlpatterns = [
    path('', views.listar_tarefas , name = 'listar_tarefas') 
]
