
from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'drinks', DrinkView, 'drink')
router.register(r'ingredients', IngredientView, 'ingredient')
router.register(r'orders', OrderView, 'order')
router.register(r'outstanding', OutstandingOrdersView, 'outstanding')
router.register(r'completed', CompletedOrdersView, 'completed')


app_name = 'gospel_swamp_menu_backend'
urlpatterns = [
    path('', include(router.urls)),
]

