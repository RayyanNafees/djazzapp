from django.contrib import admin
from django.urls import path
from django.shortcuts import render


# Simple test view to make sure the backend is working, for actual projects you should make a separate app with "pnpm run django startapp <app name>"
def home(request):
    return render(request, "index", {"test": "Hello From Django!"})


urlpatterns = [path("", home)]
