
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import *
from .models import *
import pandas as pd

from django.contrib.auth.decorators import login_required
# Create your views here.


class DrinkView(viewsets.ModelViewSet):
    serializer_class = DrinkSerializer
    queryset = DrinkModel.objects.all()

    @action(methods=['get'], detail=True,
            url_path='get-ingredients', url_name='get-ingredients')
    def get_ingredient_data(self, request, pk=None):
        drink_queryset = DrinkModel.objects.all()
        drink_model = get_object_or_404(drink_queryset, pk=pk)
        drink_relationship_models = drink_model.get_ingredients()
        return_data = [{'metadata': IngredientSerializer(drink_relationship_model.ingredient_model).data,
                        'relationship_data': DrinkIngredientRelationshipSerializer(drink_relationship_model).data
                        } for drink_relationship_model in drink_relationship_models]
        return Response(return_data)


class IngredientView(viewsets.ModelViewSet):
    serializer_class = IngredientSerializer
    queryset = IngredientModel.objects.all()


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = OrderModel.objects.all()

    @action(methods=['post'], detail=True,
            url_path='complete', url_name='complete')
    def complete_order(self, request, pk=None):
        print('hello')
        order_model = get_object_or_404(OrderModel.objects.all(), pk=pk)
        print(order_model.customer)
        order_model.complete_order()
        print('suzcess?>')
        return Response([{'response': 'success'}])



class OutstandingOrdersView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = OrderModel.objects.filter(completed=False)


class CompletedOrdersView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = OrderModel.objects.filter(completed=True)


def render_welcome(request):
    return HttpResponse('welcome to gospel swamp')
