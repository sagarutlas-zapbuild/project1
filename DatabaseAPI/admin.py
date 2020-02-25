from django.contrib import admin
from .models import lead, prospect, attachment, phone_number, email

# Register your models here.
admin.site.register(lead)
admin.site.register(prospect)
admin.site.register(attachment)
admin.site.register(phone_number)
admin.site.register(email)