# Generated by Django 3.0.3 on 2020-04-16 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AmazonPriceTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model_id', models.CharField(default='', max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=25)),
                ('timestamp', models.DateTimeField(default='')),
                ('availability', models.BooleanField(default='')),
                ('url', models.URLField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='GraphicsCard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model_id', models.CharField(default='', max_length=50)),
                ('name', models.CharField(max_length=200)),
                ('image_url', models.URLField(default='')),
            ],
        ),
    ]
