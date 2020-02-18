from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

# Create your models here.

'''
    Model for user
    UserID
    Name
    Email
    Password
    Wishlist
'''


'''
    Graphics card
    
        Model #
        Name
'''
class GraphicsCard(models.Model):

    metaData = JSONField()



'''
    amazon price table
    Price URL
    Avail
'''
class AmaxonPriceTable(models.Model):

    metaData = JSONField()


'''
    newegg price table
'''


'''
    ideal data
    
    lowest price
        Url
        Available
'''