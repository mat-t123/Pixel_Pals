from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

# Create your models here.


'''
    Graphics card
    
        Model #
        Name
'''


class GraphicsCard(models.Model):

    ModelID = models.CharField(max_length=25)



'''
    amazon price table
    Price URL
    Avail
'''


class AmazonPriceTable(GraphicsCard):

   price = models.DecimalField(max_digits=25, decimal_places=2)
   timestamp =models.DateTimeField()




'''
    newegg price table
'''


'''
    ideal data
    
    lowest price
        Url
        Available
'''