
from rest_framework import viewsets
from .models import ESGRecord
from .serializers import ESGRecordSerializer

class ESGRecordViewSet(viewsets.ModelViewSet):
    queryset = ESGRecord.objects.all()
    serializer_class = ESGRecordSerializer