from rest_framework import serializers
from .models import *

class amazonSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmazonPriceTable
        fields = ('ModelID', 'name', 'price', 'timestamp', 'availability', 'url')
