from django.shortcuts import render

# Create your views here.
from .models import Tarefa
from django.http import HttpResponse

def listar_tarefas(request):
    tarefas_salvas = Tarefa.objects.all()
    print(tarefas_salvas)
    return HttpResponse("View 'listar_tarefas' executada! Confira no terminal")
