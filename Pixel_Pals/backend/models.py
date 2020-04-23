from django.db import models

class GraphicsCard(models.Model):

    model_id = models.CharField(max_length=50, default='', primary_key=True)
    name = models.CharField(max_length=200)
    image_url = models.URLField(default='')

    def __str__(self):
        return super().__str__()



class AmazonPriceTable(models.Model):

    model_id = models.CharField(max_length=50, default='')
    price = models.DecimalField(max_digits=25, decimal_places=2)
    timestamp = models.DateTimeField(default='')
    availability = models.BooleanField(default='')
    url = models.URLField(max_length=300)

    def __str__(self):
      return super().__str__()

   #image url field?



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