# Generated by Django 2.2.10 on 2020-02-28 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_auto_20200227_1121'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='lead_description',
            field=models.CharField(max_length=1000),
        ),
    ]
