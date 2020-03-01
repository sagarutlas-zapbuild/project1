
from rest_framework import serializers
from .models import lead, prospect, attachment, phone_number, email, comment



class prospectSerializer(serializers.ModelSerializer):

    class Meta:
        model = prospect
        fields = '__all__'

class leadSerializer(serializers.ModelSerializer):
    """ lead_prospect = prospectSerializer() """
    class Meta:
        model = lead
        fields = ('lead_title', 'lead_source', 'lead_description', 'lead_url', 'lead_domain', 'lead_technology', 'lead_estimated_budget', 'lead_reffered_by', 'lead_assignee', 'lead_prospect', 'lead_keyword_tags')


class attachmentSerializer(serializers.ModelSerializer):
    attachment_lead = leadSerializer()
    class Meta:
        model = attachment
        fields = ('attachment_id', 'attachment', 'attachment_lead')

class phone_numberSerializer(serializers.ModelSerializer):
    phone_prospect = prospectSerializer()
    class Meta:
        model = phone_number
        fields = ('phone_id', 'phone_prospect')

class emailSerializer(serializers.ModelSerializer):
    email_prospect = prospectSerializer()
    class Meta:
        model = email
        fields = ('email_id', 'email_prospect')

class commentSerializer(serializers.ModelSerializer):
    comment_lead = leadSerializer()
    class Meta:
        model = comment
        fields = ('comment','comment_id','comment_date', 'comment_lead')