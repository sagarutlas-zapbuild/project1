from rest_framework import serializers
from .models import lead, prospect, attachment, phone_number, email, comment

class leadSerializer(serializers.ModelSerializer):

    class Meta:
        model = lead
        fields = '__all__'

class prospectSerializer(serializers.ModelSerializer):

    class Meta:
        model = prospect
        fields = '__all__'

class attachmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = attachment
        fields = '__all__'

class phone_numberSerializer(serializers.ModelSerializer):

    class Meta:
        model = phone_number
        fields = '__all__'

class emailSerializer(serializers.ModelSerializer):

    class Meta:
        model = email
        fields = '__all__'

class commentSerializer(serializers.ModelSerializer):

    class Meta:
        model = comment
        fields = '__all__' 