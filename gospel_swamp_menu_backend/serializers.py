
from rest_framework import serializers
from .models import *


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkModel
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientModel
        fields = '__all__'


class DrinkIngredientRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkIngredientRelationshipModel
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_time = serializers.DateTimeField(format='%I:%M - %b %d')

    class Meta:
        model = OrderModel
        fields = '__all__'
