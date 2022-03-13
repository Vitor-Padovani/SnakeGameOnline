from django.shortcuts import render, HttpResponse

# Create your views here.
def home(response):
    return HttpResponse('<h1>Home</h1>')
