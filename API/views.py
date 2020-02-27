from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import leadSerializer, prospectSerializer, attachmentSerializer, phone_numberSerializer, emailSerializer, commentSerializer
from django.http import HttpResponse
from rest_framework import status
from .models import lead, prospect, attachment, phone_number, email, comment



# Create your views here.

class leadViewSet(viewsets.ModelViewSet):

    serializer_class =leadSerializer
    queryset = lead.objects.all()
    
    def list(self, request):
        queryset = self.get_queryset()
        serializer = leadSerializer(queryset, many=True)       
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

class prospectViewSet(viewsets.ModelViewSet):

    serializer_class =prospectSerializer
    queryset = prospect.objects.all()
    
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
    
#    def get(self, request):
#        prospect1 = prospect.objects.all()
#        serializer = prospectSerializer(prospect1, many = True)
#        return Response(serializer.data)
#    def post(self, request):
#        serializer = prospectSerializer(data=request.data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status=status.HTTP_201_CREATED)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class attachmentViewSet(viewsets.ModelViewSet):

    serializer_class =attachmentSerializer
    queryset = attachment.objects.all()
    
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

class phone_numberViewSet(viewsets.ModelViewSet):

    serializer_class =phone_numberSerializer
    queryset = phone_number.objects.all()
    
    def list(self, request):
        serializer = phone_numberSerializer(self.queryset, many=True)       
        return Response(serializer.data)
    
    def create(self, request):
        serializer = phone_numberSerializer(data=request.data)
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

class emailViewSet(viewsets.ModelViewSet):

    serializer_class =emailSerializer
    queryset = email.objects.all()
    
    def list(self, request):
        serializer = emailSerializer(self.queryset, many=True)       
        return Response(serializer.data)
    
    def create(self, request):
        serializer = emailSerializer(data=request.data)
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


class commentViewSet(viewsets.ModelViewSet):

    serializer_class =commentSerializer
    queryset = comment.objects.all()
    
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