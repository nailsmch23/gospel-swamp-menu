from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(DrinkModel)
admin.site.register(IngredientModel)
admin.site.register(DrinkIngredientRelationshipModel)
admin.site.register(OrderModel)
