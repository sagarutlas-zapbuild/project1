from rest_framework import serializers
from .models import lead, prospect, attachment, phone_number, email, comment
from rest_framework.response import Response
from rest_framework import status



class prospectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = prospect
        fields = '__all__'
      
class phone_numberSerializer(serializers.ModelSerializer):
    phone_prospect = prospectSerializer(required= False)
    class Meta:
        model = phone_number
        fields = '__all__'

class emailSerializer(serializers.ModelSerializer):
    email_prospect = prospectSerializer(required= False)
    class Meta:
        model = email
        fields = '__all__'

class leadSerializer(serializers.ModelSerializer):
    lead_prospect = prospectSerializer()
    prospect_phone = phone_numberSerializer(required= False, many = True)
    prospect_email = emailSerializer(required= False, many = True)
    class Meta:
        model = lead
        fields = ('lead_title', 'lead_source', 'lead_description', 'lead_url', 
            'lead_domain', 'lead_technology', 'lead_estimated_budget', 'lead_reffered_by', 
            'lead_assignee', 'lead_keyword_tags', 'lead_prospect', 'prospect_phone', 'prospect_email')
        
    def create(self,validated_data):
        prospect_data = validated_data.pop('lead_prospect')
        phone_data = validated_data.pop('prospect_phone')
        email_data = validated_data.pop('prospect_email')
        Prospect = prospect.objects.create(**prospect_data)
        for phone_object in phone_data:
            phone_number.objects.create(phone_prospect = Prospect, **phone_object)
        for email_object in email_data:
            email.objects.create(email_prospect = Prospect, **email_object)
        Lead = lead.objects.create(lead_prospect = Prospect, **validated_data)
        return Lead  
        

class attachmentSerializer(serializers.ModelSerializer):
    attachment_lead = leadSerializer()
    class Meta:
        model = attachment
        fields = ('attachment_id', 'attachment', 'attachment_lead')

class commentSerializer(serializers.ModelSerializer):
    comment_lead = leadSerializer()
    class Meta:
        model = comment
        fields = ('comment','comment_id','comment_date', 'comment_lead')