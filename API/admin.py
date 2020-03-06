from django.contrib import admin
from .models import lead, prospect, attachment, comment

# Register your models here.
admin.site.register(lead)
admin.site.register(prospect)
admin.site.register(attachment)
admin.site.register(comment)
