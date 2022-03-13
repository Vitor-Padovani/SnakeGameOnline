from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.home),
    path('home/', views.home),
]