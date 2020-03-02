from rest_framework import serializers
from .models import lead, prospect, attachment, phone_number, email, comment
from rest_framework.response import Response
from rest_framework import status

class phone_numberSerializer(serializers.ModelSerializer):
    """ phone_prospect = prospectSerializer() """
    class Meta:
        model = phone_number
        fields = '__all__'

class emailSerializer(serializers.ModelSerializer):
    """ email_prospect = prospectSerializer() """
    class Meta:
        model = email
        fields = '__all__'

class prospectSerializer(serializers.ModelSerializer):

    prospect_email = emailSerializer(many = True, required= False)
    prospect_phone = phone_numberSerializer(many = True, required= False)
    class Meta:
        model = prospect
        fields = '__all__'

    def create(self,validated_data):
        phone_data = validated_data.pop('prospect_phone')
        email_data = validated_data.pop('prospect_email')
        Prospect = prospect.objects.create(**validated_data)
        for phone_object in phone_data:
            append(phone_number.objects.create(prospect = Prospect, **phone_object)) 
        for email_object in email_data:
            append(email.objects.create(prospect = Prospect, **email_object))
        return Prospect


class leadSerializer(serializers.ModelSerializer):
    lead_prospect = prospectSerializer()
    class Meta:
        model = lead
        fields = ('lead_title', 'lead_source', 'lead_description', 'lead_url', 'lead_domain', 'lead_technology', 'lead_estimated_budget', 'lead_reffered_by', 'lead_assignee', 'lead_prospect', 'lead_keyword_tags')
        
    def create(self,validated_data):
        prospect_data = validated_data.pop('lead_prospect')
        phone_data = prospect_data.pop('prospect_phone')
        email_data = prospect_data.pop('prospect_email')
        Prospect = prospect.objects.create(**prospect_data)
        Phones = []
        Emails = []
        for phone_object in phone_data:
            Phones.append(phone_number.objects.create(prospect = Prospect, **phone_object)) 
        for email_object in email_data:
            Emails.append(email.objects.create(prospect = Prospect, **email_object))
        prospect_data['prospect_phone'] = Phones
        prospect_data['prospect_email'] = Emails
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