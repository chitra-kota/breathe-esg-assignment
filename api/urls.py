from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ESGRecordViewSet

router = DefaultRouter()
router.register(r'records', ESGRecordViewSet)

urlpatterns = [
    path('', include(router.urls)),
]