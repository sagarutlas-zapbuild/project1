from rest_framework import serializers
from .models import lead, prospect, attachment, comment
from rest_framework.response import Response
from rest_framework import status


class prospectSerializer(serializers.ModelSerializer):
    class Meta:
        model = prospect
        fields = '__all__'


class leadSerializer(serializers.ModelSerializer):
    lead_prospect = prospectSerializer()
    """ lead_attachment = lead.comment """
    class Meta:
        model = lead
        fields = '__all__'

    def create(self, validated_data):
        prospect_data = validated_data.pop('lead_prospect')
        Prospect = prospect.objects.create(**prospect_data)
        Lead = lead.objects.create(lead_prospect=Prospect, **validated_data)
        """ attachment_data = validated_data.pop('lead_attachment')
        attachments = []
        for attachment_object in attachment_data:
            attachments.append(attachment.objects.create(**attachment_object)) """
        return (Lead)


class attachmentSerializer(serializers.ModelSerializer):
    attachment_lead = leadSerializer()

    class Meta:
        model = attachment
        fields = ('attachment_id', 'attachment', 'attachment_lead')


class commentSerializer(serializers.ModelSerializer):
    comment_lead = leadSerializer()

    class Meta:
        model = comment
        fields = ('comment', 'comment_id', 'comment_date', 'comment_lead')
