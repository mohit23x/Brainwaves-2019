
import sys
import os
import django
sys.path.append('D:\\practice\\djangoStock\\djangoStock')

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djangoStock.settings")
django.setup()
import csv

from webapp.models import stocks


reader = csv.reader(open("D:\\practice\\djangoStock\\djangoStock\\prices763fefc.csv"), delimiter=',')
   
for row in reader:
    
    date = row[0]
    symbol = row[1]
    open = row[2]
    close = row[3]
    low = row[4]
    hight = row[5]
    volume = row[6]
                      
    stocks.objects.get_or_create(date=date, symbol=symbol, open=open, close=close, low=low, hight=hight, volume=volume)