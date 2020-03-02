from django.db import models

# Create your models here.



class email(models.Model):
    email_id = models.EmailField(primary_key=True, unique= True)

class phone_number(models.Model):
    phone_id = models.BigIntegerField(primary_key=True, unique= True)

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
    prospect_email = models.ForeignKey(email, on_delete = models.DO_NOTHING, null = True, blank = True)
    prospect_phone = models.ForeignKey(phone_number, on_delete = models.DO_NOTHING, null = True, blank = True)


class lead(models.Model):
    lead_id = models.AutoField(primary_key = True, unique = True)
    lead_prospect = models.ForeignKey(prospect, on_delete = models.CASCADE)
    lead_title = models.CharField(max_length=50)
    lead_source = models.CharField(max_length=50)
    lead_description = models.CharField(max_length=1000,)
    lead_url = models.URLField()
    lead_domain = models.CharField(max_length=50)
    lead_technology = models.CharField(max_length=50)
    lead_estimated_budget = models.DecimalField(max_digits = 15, decimal_places= 2)
    lead_reffered_by = models.CharField(max_length = 50)
    lead_assignee = models.CharField(max_length = 50)
    lead_status = models.CharField(max_length= 20, default= 'New')
    lead_keyword_tags = models.CharField(max_length= 100)




class attachment(models.Model):
    attachment_id = models.AutoField(primary_key = True, unique = True)
    attachment = models.FileField(upload_to= 'uploads/' )
    attachment_lead = models.ForeignKey(lead, on_delete = models.CASCADE)

class comment(models.Model):
    comment_id = models.AutoField(primary_key = True, unique = True)
    comment = models.CharField(max_length= 500)
    comment_date = models.DateField(auto_now=True)
    comment_lead = models.ForeignKey(lead, on_delete = models.CASCADE)