from rest_framework import serializers
from .models import *

class amazonSerializer(serializers.ModelSerializer):
    class meta:
        model = AmazonPrice_Manager
        fields = ('ModelID', 'Price', 'timestamp', 'availability')
