from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *

class AmazonView(viewsets.ModelViewSet):
    serializer_class = amazonSerializer
    #queryset = AmazonPrice_Manager.objects.all()

