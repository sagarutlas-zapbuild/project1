from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import leadSerializer, prospectSerializer, attachmentSerializer, phone_numberSerializer, emailSerializer, commentSerializer
from django.http import HttpResponse
from rest_framework import status
from .models import lead, prospect, attachment, phone_number, email, comment



# Create your views here.


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


class leadViewSet(viewsets.ModelViewSet):
    queryset = lead.objects.all()

    

    def list(self, request):
        queryset = self.get_queryset()
        serializer = leadSerializer(queryset, many=True)       
        return Response(serializer.data)
    
    def create(self, request):

        prospect_data = request.data.pop('lead_prospect')
        print(request.data)     
        Prospect = prospectSerializer(prospect_data)
        prospect.objects.create(prospect_data)
        #request.data['lead_prospect'] = prospect.objects.get(prospect_skype_id = prospect_data.get('prospect_skype_id')).prospect_id
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
    serializer_class =attachmentSerializer
   
    
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

    
    queryset = phone_number.objects.all()
    serializer_class =phone_numberSerializer
    
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

  
    queryset = email.objects.all()
    serializer_class =emailSerializer(queryset, many=True)
    
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

   
    queryset = comment.objects.all()
    serializer_class =commentSerializer
    
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