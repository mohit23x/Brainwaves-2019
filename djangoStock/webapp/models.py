from django.db import models

# Create your models here.

class stocks(models.Model):
    date= models.DateField()
    symbol=models.CharField(max_length=10)
    open = models.FloatField()
    close=models.FloatField()
    low=models.FloatField()
    hight=models.FloatField()
    volume=models.FloatField()
    
    def __str__(self):
        return self.symbol