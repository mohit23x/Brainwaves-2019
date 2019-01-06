from rest_framework import serializers
from . models import stocks

class stocksSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = stocks
        fields = ('date',)
        
class stocksDataSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = stocks
        fields = ('__all__')
 