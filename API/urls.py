
from rest_framework.routers import DefaultRouter

from django.urls import path
from . import views

router = DefaultRouter()
router.register(r'prospects', views.prospectViewSet, basename='prospect')
router.register(r'leads', views.leadViewSet, basename='lead')
router.register(r'attachments', views.attachmentViewSet, basename='attachment')
router.register(r'comments', views.commentViewSet, basename='comment')


urlpatterns = router.urls
