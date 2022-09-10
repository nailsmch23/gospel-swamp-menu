import datetime

from django.db import models
from django.utils import timezone


class DrinkModel(models.Model):

    name = models.CharField(max_length=230)
    description = models.CharField(max_length=2300)
    image = models.CharField(max_length=230)

    ingredients = models.ManyToManyField('IngredientModel', through='DrinkIngredientRelationshipModel')

    def __str__(self):
        return self.name

    def get_ingredients(self):
        return DrinkIngredientRelationshipModel.objects.filter(drink_model=self)


class IngredientModel(models.Model):

    name = models.CharField(max_length=230)

    def __str__(self):
        return self.name


class DrinkIngredientRelationshipModel(models.Model):

    drink_model = models.ForeignKey(DrinkModel, on_delete=models.CASCADE)
    ingredient_model = models.ForeignKey(IngredientModel, on_delete=models.CASCADE)
    ingredient_amount = models.FloatField()
    ingredient_unit = models.CharField(max_length=230)

    def __str__(self):
        return f'{self.drink_model} - {self.ingredient_model}'


class OrderModel(models.Model):

    drink_model = models.ForeignKey(DrinkModel, on_delete=models.CASCADE)
    customer = models.CharField(max_length=230)
    order_time = models.DateTimeField(default=timezone.now, editable=False)
    completed_time = models.DateTimeField(blank=True, null=True, editable=False)
    completed = models.BooleanField(default=False)

    def complete_order(self):
        self.completed = True
        self.completed_time = timezone.now
        self.save()

    def __str__(self):
        return f'{self.customer}: {self.drink_model} at {self.order_time}'
