from rest_framework import serializers
from .models import *

#this file converts model instances into JSON, in order for the front end 
#(react) can work with the received data easily. 

class amazonSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmazonPriceTable
        fields = ('ModelID', 'name', 'price', 'timestamp', 'availability', 'url')

class GraphicCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GraphicsCard
        fields = ('ModelID', 'name', 'image_url')