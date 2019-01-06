
csv_filepathname="D:\\practice\\djangoStock\\djangoStock\\prices763fefc.csv"
# Full path to your django project directory
your_djangoproject_home="D:\\practice\\djangoStock\\djangoStock"

import sys,os
sys.path.append(your_djangoproject_home)
#os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

from webapp.models import stocks
import csv

dataReader = csv.reader(open(csv_filepathname), delimiter=',', quotechar='"')

for row in dataReader: 
    zipcode = stocks()
    zipcode.date = row[0]
    zipcode.symbol = row[1]
    zipcode.open = row[2]
    zipcode.close = row[3]
    zipcode.low = row[4]
    zipcode.hight = row[5]
    zipcode.volume = row[6]
    zipcode.save()
    
    
'''
csv_filepathname="D:\\practice\\djangoStock\\djangoStock\\prices763fefc.csv"

your_djangoproject_home="D:\\practice\\djangoStock\\djangoStock"

import sys,os
>>> sys.path.append(your_djangoproject_home)
>>> os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'
>>> from webapp.models import stocks
>>> import csv
>>> dataReader = csv.reader(open(csv_filepathname), delimiter=',')
>>> for row in dataReader:
...     zipcode = stocks()
...     zipcode.date = row[0]
...     zipcode.symbol = row[1]
...     zipcode.open = row[2]
...     zipcode.close = row[3]
...     zipcode.low = row[4]
...     zipcode.hight = row[5]
...     zipcode.volume = row[6]
...     zipcode.save()
    
    
    '''