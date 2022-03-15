from django.http import HttpResponseRedirect
from django.shortcuts import render, HttpResponse

# Create your views here.
def home(response):
    return render(response, 'snakeGame/home.html')

def gameplay(response):
    return render(response, 'snakeGame/gameplay.html')

def options(response):

    if response.method == 'POST':

        hex = response.POST.get('color')[1:]

        rgb = ''
        for i in (0, 2, 4):
            decimal = int(hex[i:i+2], 16)
            decimal = f'{"0" * (3-len(str(decimal)))}{decimal}'
            rgb += str(decimal)

        return HttpResponseRedirect(f'/gameplay?&color={rgb}', {'color': rgb})

    return render(response, 'snakeGame/options.html')
