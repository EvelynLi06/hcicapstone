from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('stories/', views.getStories, name="stories"),
    path('story/<str:id>/', views.getStory, name="story"),
    path('create/', views.createStory, name="create")
]