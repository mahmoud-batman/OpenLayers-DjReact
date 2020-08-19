from django.db import models
from rest_framework import serializers
from django.contrib.postgres.fields import ArrayField

import uuid
from django.core.validators import MaxValueValidator, MinValueValidator


class Bookmark(models.Model):

    title = models.CharField(max_length=50, unique=True)

    description = models.CharField(max_length=50)

    zoom = models.DecimalField(max_digits=50, decimal_places=25)

    center = ArrayField(models.DecimalField(
        max_digits=50, decimal_places=25), size=2)

    extent = ArrayField(models.DecimalField(
        max_digits=50, decimal_places=25), size=4)

    def __str__(self):
        return self.title
