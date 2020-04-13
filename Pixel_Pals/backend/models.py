from django.db import models


class AmazonPriceTable(GraphicsCard):

   price = models.DecimalField(max_digits=25, decimal_places=2)
   timestamp =models.DateTimeField()
   availability = models.BooleanField()
   url = models.URLField(max_length=300)
   #image url field?


class GraphicsCard(models.Model):

    ModelID = models.CharField(max_length=50)

    name = models.CharField(max_length=200)

    #CardObject = GraphicsCard_Manager()

'''
    Graphics card
    
        Model #
        Name
'''

'''class GraphicsCard_Manager(models.Manager):
    def create_GraphicsCard(self, GraphicsCard):
        GraphicsCard = self.create(GraphicsCard=GraphicsCard)
        return GraphicsCard
'''


'''
    amazon price table
    Price URL
    Avail
'''

'''class AmazonPrice_Manager(models.Manager):
    def create_Price(self, AmazonPriceTable):
        AmazonPriceTable = self.create(AmazonPriceTable=AmazonPriceTable)
        return AmazonPriceTable

    def _str_(self):
        return self.title
'''


'''
    newegg price table
'''


'''
    ideal data
    
    lowest price
        Url
        Available
'''