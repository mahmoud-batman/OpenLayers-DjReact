from django.shortcuts import render

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Bookmark
from .serializers import BookmarkSerializer
from django.core import serializers
import json


class BookmarkView(APIView):
    def get(self, request):
        qs = Bookmark.objects.all()
        serializer = BookmarkSerializer(qs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookmarkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


class BookmarkDetailView(generics.RetrieveUpdateAPIView):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
