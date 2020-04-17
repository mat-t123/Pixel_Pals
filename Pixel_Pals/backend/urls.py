#old code

#from django.urls import path

#urlpatterns = [
    #path('', views.index, name='index'),
#]

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from backend import views

#router = routers.DefaultRouter()
#router.register(r'backend', views, 'backend')

urlpatterns = [
    #path('admin/', admin.site.urls), path('api/', include(router.urls))
]