from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import leadSerializer, prospectSerializer, attachmentSerializer, commentSerializer
from django.http import HttpResponse
from rest_framework import status
from .models import lead, prospect, attachment, comment


# Create your views here.

class commentViewSet(viewsets.ModelViewSet):

    queryset = comment.objects.all()
    serializer_class = commentSerializer

    def list(self, request):
        serializer = commentSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = commentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class prospectViewSet(viewsets.ModelViewSet):
    queryset = prospect.objects.all()
    serializer_class = prospectSerializer

    def list(self, request):
        serializer = prospectSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = prospectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class leadViewSet(viewsets.ModelViewSet):
    queryset = lead.objects.all()
    serializer_class = leadSerializer

    def list(self, request):
        serializer = leadSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = leadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class attachmentViewSet(viewsets.ModelViewSet):
    queryset = attachment.objects.all()
    serializer_class = attachmentSerializer

    def list(self, request):
        serializer = attachmentSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = attachmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
