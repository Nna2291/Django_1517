# Generated by Django 3.1.7 on 2021-02-20 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20210220_1818'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='is_over',
            field=models.BooleanField(default=False),
        ),
    ]