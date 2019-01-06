from django.shortcuts import render

from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import stocks
from . serializers import stocksSerializer
from . serializers import stocksDataSerializer


import datetime

class stocksList(APIView):
    def get(self, request, args):
        stock = stocks.objects.filter(symbol__iexact=args)
        serializer = stocksSerializer(stock, many=True)
        return Response(serializer.data)
        
    def post(self):
        pass
    
class stocksData(APIView):
    def get(self, request, sym, sm, sy ,em, ey):
        if(sm or sy or em or ey is 'null' ):
            sm = 1
            sy=2010
            em=1
            ey=2010
        sd = 1
        if em or sm is 2:
            ed = 28
        else: 
            ed = 30
        
        start_date = datetime.date(int(sy), int(sm), sd)
        end_date = datetime.date(int(ey), int(em), ed)
        print()
        print(start_date)
        print(end_date)
        print()
        stock = stocks.objects.filter(symbol__iexact=sym).order_by('date')[:50]
        serializer = stocksDataSerializer(stock, many=True)
        return Response(serializer.data)
        
    def post(self):
        pass
    
  