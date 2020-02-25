from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import leadSerializer, prospectSerializer, attachmentSerializer, phone_numberSerializer, emailSerializer
from django.http import HttpResponse
from rest_framework import status
from .models import lead, prospect, attachment, phone_number, email



# Create your views here.

class leadlist(APIView):

    def get(self, request):
        lead1 = lead.objects.all()
        serializer = leadSerializer(lead1, many = True)
        return Response(serializer.data)
    def post(self):
        pass

class prospectlist(viewsets.ModelViewSet):
    prospect1 = prospect.objects.all()
    def get(self, request):
        
        serializer = prospectSerializer(self.prospect1, many = True)
        return Response(serializer.data)
    def post(self, request):
        serializer = prospectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class attachmentlist(APIView):

    def get(self, request):
        attachment1 = attachment.objects.all()
        serializer = attachmentSerializer(attachment1, many = True)
        return Response(serializer.data)
    def post(self):
        pass

class phone_numberlist(APIView):

    def get(self, request):
        phone_number1 = phone_number.objects.all()
        serializer = phone_numberSerializer(phone_number1, many = True)
        return Response(serializer.data)
    def post(self):
        pass

class emaillist(APIView):

    def get(self, request):
        email1 = email.objects.all()
        serializer = emailSerializer(email1, many = True)
        return Response(serializer.data)
    def post(self):
        pass