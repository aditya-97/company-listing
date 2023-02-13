from django.urls import path
from api import views

urlpatterns = [
    path('', views.list_companies),
    path('companies-api/', views.list_companies_api)
]