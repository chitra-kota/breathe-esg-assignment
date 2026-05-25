from django.db import models


class ESGRecord(models.Model):
    source = models.CharField(max_length=20)
    activity = models.CharField(max_length=100)
    quantity = models.FloatField()
    unit = models.CharField(max_length=20)
    scope = models.CharField(max_length=20)
    status = models.CharField(max_length=20, default='PENDING')
    suspicious = models.BooleanField(default=False)

    def __str__(self):
        return self.activity
