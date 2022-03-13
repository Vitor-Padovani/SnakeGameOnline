from django.shortcuts import render, HttpResponse

# Create your views here.
def home(response):
    return render(response, 'snakeGame/home.html')

def gameplay(response):
    return render(response, 'snakeGame/gameplay.html')
