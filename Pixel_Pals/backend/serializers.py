from rest_framework import serializers
from backend.models import *

#this file converts model instances into JSON, in order for the front end 
#(react) can work with the received data easily. 

class AmazonSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmazonPriceTable
        fields = ('model_id', 'price', 'timestamp', 'availability', 'url')


class GraphicCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GraphicsCard
        fields = ('model_id', 'name', 'image_url')