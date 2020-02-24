from django.db import models
from phone_field import Phone_Field

# Create your models here.
class lead(models.Model):
    lead_id = models.AutoField(primary_key = True, unique = True)
    lead_title = models.CharField(max_length=50)
    lead_source = models.CharField(max_length=50)
    lead_description = models.CharField(max_length=1000, default="")
    lead_url = models.URLField()
    lead_domain = models.CharField(max_length=50)
    lead_technology = models.CharField(max_length=50)
    lead_estimated_budget = models.DecimalField(decimal_places=2, )
    lead_reffered_by = models.CharField(max_length = 50)
    lead_assignee = models.CharField(max_length = 50)

class prospect(models.Model):
    prospect_id = models.AutoField(primary_key = True, unique = True)
    prospect_full_name  = models.CharField(max_length = 50)
    prospect_company = models.CharField(max_length= 100)
    prospect_designation = models.CharField(max_length= 50)
    prospect_skype_id = models.CharField(max_length=50)
    prospect_street_address = models.CharField(max_length= 40)
    prospect_city = models.CharField(max_length= 20)
    prospect_state = models.CharField(max_length= 20)
    prospect_country = models.CharField(max_length= 55)

class email(models.Model):
    email_id = models.EmailField(primary_key=True, unique= True)
    email_prospect_id = models.ForeignKey(prospect, on_delete = models.CASCADE)

class phone(models.Model):
    phone_id = Phone_Field(primary_key=True, unique= True)
    phone__prospect_id = models.ForeignKey(prospect, on_delete = models.CASCADE)