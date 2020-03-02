# Generated by Django 2.2.10 on 2020-03-02 10:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='email',
            fields=[
                ('email_id', models.EmailField(max_length=254, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='phone_number',
            fields=[
                ('phone_id', models.BigIntegerField(primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='prospect',
            fields=[
                ('prospect_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('prospect_full_name', models.CharField(max_length=50)),
                ('prospect_company', models.CharField(max_length=100)),
                ('prospect_designation', models.CharField(max_length=50)),
                ('prospect_skype_id', models.CharField(max_length=50)),
                ('prospect_street_address', models.CharField(max_length=40)),
                ('prospect_city', models.CharField(max_length=20)),
                ('prospect_state', models.CharField(max_length=20)),
                ('prospect_country', models.CharField(max_length=55)),
                ('prospect_email', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='API.email')),
                ('prospect_phone', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='API.phone_number')),
            ],
        ),
        migrations.CreateModel(
            name='lead',
            fields=[
                ('lead_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('lead_title', models.CharField(max_length=50)),
                ('lead_source', models.CharField(max_length=50)),
                ('lead_description', models.CharField(max_length=1000)),
                ('lead_url', models.URLField()),
                ('lead_domain', models.CharField(max_length=50)),
                ('lead_technology', models.CharField(max_length=50)),
                ('lead_estimated_budget', models.DecimalField(decimal_places=2, max_digits=15)),
                ('lead_reffered_by', models.CharField(max_length=50)),
                ('lead_assignee', models.CharField(max_length=50)),
                ('lead_status', models.CharField(default='New', max_length=20)),
                ('lead_keyword_tags', models.CharField(max_length=100)),
                ('lead_prospect', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.prospect')),
            ],
        ),
        migrations.CreateModel(
            name='comment',
            fields=[
                ('comment_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('comment', models.CharField(max_length=500)),
                ('comment_date', models.DateField(auto_now=True)),
                ('comment_lead', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.lead')),
            ],
        ),
        migrations.CreateModel(
            name='attachment',
            fields=[
                ('attachment_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('attachment', models.FileField(upload_to='uploads/')),
                ('attachment_lead', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.lead')),
            ],
        ),
    ]
